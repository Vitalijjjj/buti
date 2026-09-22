"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="relative h-20 w-60 sm:h-28 sm:w-80 lg:h-36 lg:w-96 max-w-full mb-6">
              <Image
                src="/assets/Facecult_white.png"
                alt="Facecult Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Transforming lives with expert care, proven results, and personalised treatments.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-neutral-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 39/40 Mount Street Upper, Dublin 2, D02 R229
              </p>
              <p className="text-neutral-400 flex items-center gap-2">
                <Phone className="w-4 h-4" /> +353 89 973 5302
              </p>
              <p className="text-neutral-400 flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@facecult.ie
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Treatments</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/treatments/injectables/dermal-fillers" className="text-neutral-300 hover:text-primary-300 transition-colors">Dermal Fillers</Link></li>
              <li><Link href="/treatments/laser-hair-removal/laser-full-body" className="text-neutral-300 hover:text-primary-300 transition-colors">Laser Hair Removal</Link></li>
              <li><Link href="/treatments/skin-treatments/chemical-peels" className="text-neutral-300 hover:text-primary-300 transition-colors">Chemical Peels</Link></li>
              <li><Link href="/treatments/rf-microneedling/doubletite" className="text-neutral-300 hover:text-primary-300 transition-colors">RF Microneedling</Link></li>
              <li><Link href="/treatments/skin-treatments/hydrafacial" className="text-neutral-300 hover:text-primary-300 transition-colors">HydraFacial</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-neutral-300 hover:text-primary-300 transition-colors">Home</Link></li>
              <li><Link href="/treatments/injectables/skin-boosters" className="text-neutral-300 hover:text-primary-300 transition-colors">Treatments</Link></li>
              <li><Link href="/pricing" className="text-neutral-300 hover:text-primary-300 transition-colors">Pricing</Link></li>
              <li><Link href="/results" className="text-neutral-300 hover:text-primary-300 transition-colors">Results</Link></li>
              <li><Link href="/membership" className="text-neutral-300 hover:text-primary-300 transition-colors">Membership</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-primary-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter & Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
            <p className="text-neutral-300 text-sm mb-4">
              Get the latest treatment updates and skin care tips.
            </p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-sm focus:outline-none focus:border-primary-500"
              />
              <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                Subscribe
              </Button>
            </div>

            <div className="text-sm">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <div className="space-y-1 text-neutral-400">
                <p>Mon - Fri: 10:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400">Follow Us:</span>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/17MqAXcX4H/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/facecult.clinic?igsh=MXJqODllZ2dwYXpzZg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>© 2025 Facecult. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-lg">
          <p className="text-sm text-red-200">
            <strong>Medical Emergency:</strong> If you are experiencing a medical emergency, please call 112 or 999 immediately or go to your nearest emergency department.
          </p>
        </div>
      </div>
    </footer>
  );
}