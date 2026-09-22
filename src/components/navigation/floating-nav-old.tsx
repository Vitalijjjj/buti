"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookConsultationButton } from "@/components/ui/book-consultation-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Membership", href: "/membership", special: true },
];

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-4 right-4 sm:left-6 sm:right-6 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg border border-neutral-200/50"
        : "bg-white/80 backdrop-blur-sm shadow-md"
    } rounded-full px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto`}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <span className="font-primary font-semibold text-2xl">
            <span className="text-primary-600">Facec</span>
            <span className="text-accent-rose">u</span>
            <span className="text-primary-600">lt</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          {navigationItems.map((item) => (
            item.special ? (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full bg-accent-rose text-primary-600 hover:bg-accent-rose/90 transition-colors duration-200 font-semibold whitespace-nowrap"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center space-x-2 text-neutral-700 hover:text-primary-600"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">(555) 123-4567</span>
          </Button>

          <BookConsultationButton
            size="sm"
            className="px-3 sm:px-4 py-2"
            showIcon
          >
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
          </BookConsultationButton>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-white/95 backdrop-blur-md">
              <div className="flex flex-col space-y-6 pt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-primary-600">
                      <span className="font-bold text-sm">
                        <span className="text-primary-600">F</span>
                        <span className="text-accent-rose">C</span>
                      </span>
                    </div>
                    <span className="font-primary font-semibold text-lg">
                      <span className="text-primary-600">Facec</span>
                      <span className="text-accent-rose">u</span>
                      <span className="text-primary-600">lt</span>
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    item.special ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-lg px-4 py-3 rounded-full bg-accent-rose text-primary-600 hover:bg-accent-rose/90 transition-colors duration-200 font-semibold text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-lg text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )
                  ))}
                </div>

                <div className="flex flex-col space-y-3 pt-6 border-t border-neutral-200">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 border-primary-600 text-primary-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </Button>

                  <BookConsultationButton
                    className="flex items-center justify-center space-x-2"
                    showIcon
                  >
                    Book Consultation
                  </BookConsultationButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}