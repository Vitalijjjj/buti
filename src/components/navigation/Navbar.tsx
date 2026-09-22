/**
 * Navbar Component
 *
 * Main navigation bar with mega menu support.
 * Inspired by Thérapie Clinic Ireland's solution-focused approach.
 *
 * Features:
 * - Sticky header that stays visible on scroll
 * - Mega menu dropdown for TREATMENTS
 * - User account and cart icons
 * - Free consultation CTA button
 * - Mobile-responsive with hamburger menu
 * - Smooth scroll animations
 * - High performance with optimized rendering
 *
 * Usage:
 * <Navbar />
 */

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { mainNavLinks, treatmentsMenuData } from "@/data/navigation-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef<HTMLElement>(null);
  const megaMenuTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure navbar height for mega menu positioning
  useEffect(() => {
    if (navbarRef.current) {
      const height = navbarRef.current.offsetHeight;
      setNavbarHeight(height);
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    }
  }, [isScrolled]);

  // Handle mega menu hover with delay for better UX
  const handleMegaMenuEnter = () => {
    if (megaMenuTimerRef.current) {
      clearTimeout(megaMenuTimerRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const handleMegaMenuClick = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  // Close mega menu when clicking outside
  useEffect(() => {
    if (isMegaMenuOpen) {
      const handleClickOutside = () => {
        setIsMegaMenuOpen(false);
      };
      // Small delay to prevent immediate closure
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 100);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isMegaMenuOpen]);

  return (
    <>
      <nav
        ref={navbarRef}
        data-navbar
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-neutral-200"
            : "bg-white/95 backdrop-blur-sm shadow-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0 group"
              aria-label="Facecult Home"
            >
              <div className="relative h-14 w-44 sm:h-16 sm:w-52 md:h-18 md:w-60 transition-all duration-200 group-hover:scale-105">
                <Image
                  src="/assets/Facecult transparent.png"
                  alt="Facecult Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={
                    link.hasMegaMenu ? handleMegaMenuEnter : undefined
                  }
                  onMouseLeave={
                    link.hasMegaMenu ? handleMegaMenuLeave : undefined
                  }
                >
                  {link.hasMegaMenu ? (
                    <button
                      onClick={handleMegaMenuClick}
                      className={cn(
                        "flex items-center space-x-1 text-neutral-700 hover:text-primary-600",
                        "transition-colors duration-200 font-semibold text-sm uppercase tracking-wide",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md px-2 py-1",
                        isMegaMenuOpen && "text-primary-600"
                      )}
                      aria-expanded={isMegaMenuOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isMegaMenuOpen && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "transition-colors duration-200",
                        "font-semibold text-sm uppercase tracking-wide",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md px-2 py-1",
                        link.special
                          ? "bg-accent-rose text-primary-600 hover:bg-accent-rose/90 px-4 py-2 rounded-full"
                          : "text-neutral-700 hover:text-primary-600"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Icons & CTA */}
            <div className="flex items-center space-x-4">
              {/* Free Consultation CTA */}
              <Button
                asChild
                className={cn(
                  "hidden md:inline-flex bg-primary-600 hover:bg-primary-700 text-white",
                  "px-6 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg",
                  "transition-all duration-200 transform hover:-translate-y-0.5"
                )}
              >
                <a
                  href="https://partner.pabau.com/online-bookings/facecult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Free Consultation
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  "lg:hidden flex items-center justify-center w-10 h-10 rounded-full",
                  "text-neutral-700 hover:text-primary-600 hover:bg-primary-50",
                  "transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                )}
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMegaMenuLeave}
        data={treatmentsMenuData}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer to prevent content from going under fixed navbar */}
      <div style={{ height: `${navbarHeight}px` }} aria-hidden="true" />
    </>
  );
}
