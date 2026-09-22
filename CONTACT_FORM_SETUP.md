# Contact Form Setup Guide

The contact form is now set up and ready to use! Follow these steps to configure email delivery.

## 1. Sign Up for Resend

1. Go to https://resend.com
2. Sign up for a free account (3,000 emails/month free)
3. Verify your email address

## 2. Get Your API Key

1. Log in to Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Copy the API key (starts with `re_`)

## 3. Add Environment Variables

1. Create a `.env.local` file in your project root:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=your-email@example.com
```

2. Replace:
   - `re_your_actual_api_key_here` with your actual Resend API key
   - `your-email@example.com` with the email where you want to receive form submissions

## 4. Verify Your Domain (Optional but Recommended)

For production use, verify your domain in Resend:

1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Add your domain (e.g., `facecult.com`)
4. Add the DNS records they provide
5. Once verified, update the "from" email in `/src/app/api/contact/route.ts`:

```typescript
from: "Contact Form <noreply@yourdomain.com>",
```

## 5. Add to Vercel

When deploying to Vercel:

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add both variables:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Redeploy your site

## 6. Test the Form

1. Fill out the contact form on `/contact`
2. Submit it
3. Check your email for the notification

## Form Fields

The contact form collects:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Service Interest** (dropdown)
- **Message** (required)

## Email Template

Each submission sends a formatted HTML email with:
- Contact details
- Service interest
- Full message
- Reply-to set to the sender's email (so you can reply directly)

## Troubleshooting

**Form not working locally?**
- Make sure `.env.local` exists and has the correct API key
- Restart your dev server after adding environment variables

**Not receiving emails?**
- Check your Resend dashboard for logs
- Verify the API key is correct
- Make sure `CONTACT_EMAIL` is set correctly

**Domain verification issues?**
- Use `onboarding@resend.dev` as the from address until your domain is verified
- This works but will show as "via resend.dev"

## Need Help?

- Resend docs: https://resend.com/docs
- Check Resend logs: https://resend.com/emails