import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, service, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token (if provided)
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      try {
        const recaptchaResponse = await fetch(
          "https://www.google.com/recaptcha/api/siteverify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
          }
        );

        const recaptchaResult = await recaptchaResponse.json();

        // Check if reCAPTCHA verification passed and score is acceptable
        if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
          console.warn("reCAPTCHA verification failed:", recaptchaResult);
          return NextResponse.json(
            { error: "Bot protection verification failed. Please try again." },
            { status: 400 }
          );
        }
      } catch (recaptchaError) {
        console.error("reCAPTCHA verification error:", recaptchaError);
        // Continue anyway if reCAPTCHA service fails (fallback)
      }
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "FaceCult Contact Form <onboarding@resend.dev>", // You'll update this with your verified domain
      to: process.env.CONTACT_EMAIL || "your-email@example.com", // Your email address
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #01373A;">New Contact Form Submission</h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
            ${service ? `<p style="margin: 10px 0;"><strong>Service Interest:</strong> ${service}</p>` : ""}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #01373A;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

          <p style="font-size: 12px; color: #666;">
            This email was sent from the FaceCult Medical Aesthetics contact form.
            Reply to this email to respond directly to ${email}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}