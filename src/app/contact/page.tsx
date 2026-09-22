import { FloatingNav } from "@/components/navigation/floating-nav";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/homepage/footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
      {/* Load Google reCAPTCHA v3 Script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />

      <main className="min-h-screen">
        <FloatingNav />
        <ContactHero />

      {/* Contact Section */}
      <section className="relative z-20 -mt-32 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <ContactForm />
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-secondary text-xl font-semibold text-neutral-900 mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">Phone</p>
                          <p className="text-neutral-600">+353 89 973 5302</p>
                          <p className="text-sm text-neutral-500 mt-1">Mon-Fri: 9am-6pm</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent-rose/10 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-accent-rose" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">Email</p>
                          <p className="text-neutral-600">info@facecult.ie</p>
                          <p className="text-sm text-neutral-500 mt-1">We reply within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">Location</p>
                          <p className="text-neutral-600">39/40 Mount Street Upper</p>
                          <p className="text-neutral-600">Dublin 2, D02 R229</p>
                          <p className="text-neutral-600">Ireland</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent-rose/10 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-accent-rose" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">Hours</p>
                          <p className="text-neutral-600">Monday - Friday: 10:00 AM - 7:00 PM</p>
                          <p className="text-neutral-600">Saturday: 10:00 AM - 6:00 PM</p>
                          <p className="text-neutral-600">Sunday: 10:00 AM - 4:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="rounded-2xl h-64 overflow-hidden border border-neutral-200">
                    <iframe
                      src="https://www.google.com/maps?q=39/40+Mount+Street+Upper,Dublin+2,D02+R229,Ireland&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Facecult Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-accent-warmBeige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-secondary text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
              Common Questions
            </h2>
            <p className="text-neutral-600">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  Do you offer free consultations?
                </h3>
                <p className="text-neutral-600">
                  Yes! We offer complimentary consultations for all new clients. During your consultation, we&apos;ll discuss your goals and create a personalised treatment plan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  How quickly can I get an appointment?
                </h3>
                <p className="text-neutral-600">
                  We often have same-day or next-day appointments available. Contact us and we&apos;ll find a time that works for your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  Do you accept insurance?
                </h3>
                <p className="text-neutral-600">
                  Most aesthetic treatments are elective and not covered by insurance. We offer flexible payment options and financing plans to make treatments affordable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  );
}