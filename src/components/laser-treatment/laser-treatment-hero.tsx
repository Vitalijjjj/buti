"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Clock, Play, Shield, Sparkles } from "lucide-react";

export function LaserTreatmentHero() {
  return (
    <section className="relative min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Content Section */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-primary-100 via-accent-cream to-neutral-100 px-4 sm:px-6 lg:px-12 py-20">
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/30 via-transparent to-transparent" />

          <div className="relative z-10 max-w-2xl">
            {/* Main Headline */}
            <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Experience the Art of<br />
              <span className="text-primary-600">Laser Skin Perfection</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-neutral-700 font-light mb-4">
              Your Journey to Flawless Skin Starts Here
            </p>

            {/* Descriptive Text */}
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Step into a world where cutting-edge laser technology meets personalised care. Our expert team uses the most advanced, FDA-approved laser systems to address your unique skin concerns with precision, safety, and remarkable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all"
              >
                View Before & After
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">FDA-Approved</h3>
                <p className="text-sm text-neutral-600">Safe & proven technology</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Expert Team</h3>
                <p className="text-sm text-neutral-600">Certified specialists</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Quick Recovery</h3>
                <p className="text-sm text-neutral-600">Minimal downtime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative h-full min-h-[400px] lg:min-h-screen group">
          <Image
            src="/assets/Hero.png"
            alt="Advanced Laser Treatment at Facecult"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Video Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="group/play relative flex items-center justify-center"
              onClick={() => console.log('Video would play here')}
              aria-label="Play video"
            >
              {/* Outer ring with pulse animation */}
              <div className="absolute inset-0 w-24 h-24 bg-white/30 rounded-full animate-pulse" />

              {/* Main play button */}
              <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110">
                <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" />
              </div>

              {/* Text below button */}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-medium text-lg whitespace-nowrap drop-shadow-lg">
                Watch Treatment Process
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}