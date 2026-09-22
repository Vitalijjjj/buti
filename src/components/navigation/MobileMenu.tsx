/**
 * MobileMenu Component
 *
 * Mobile drawer menu with accordion navigation.
 * Converts the desktop mega menu into a mobile-friendly format.
 *
 * Features:
 * - Full-screen drawer that slides in from right
 * - Accordion-style treatment categories
 * - Smooth animations
 * - Accessible keyboard navigation
 * - Close on ESC key or outside click
 * - Touch-optimized interactions
 *
 * Usage:
 * <MobileMenu
 *   isOpen={isMobileMenuOpen}
 *   onClose={() => setIsMobileMenuOpen(false)}
 * />
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import { mainNavLinks, treatmentsMenuData } from "@/data/navigation-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-50 lg:hidden",
          "transform transition-transform duration-300 ease-out",
          "overflow-y-auto overscroll-contain",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between z-10">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center"
          >
            <div className="relative h-12 w-40">
              <Image
                src="/assets/Facecult transparent.png"
                alt="Facecult Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <button
            onClick={onClose}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-full",
              "text-neutral-700 hover:text-primary-600 hover:bg-primary-50",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            )}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-6 space-y-2">
          {mainNavLinks.map((link) => (
            <div key={link.label}>
              {link.hasMegaMenu ? (
                /* Treatments Accordion */
                <div className="space-y-2">
                  <button
                    onClick={() => setExpandedCategory(expandedCategory ? null : "treatments")}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-lg",
                      "text-neutral-700 hover:text-primary-600 hover:bg-primary-50",
                      "transition-all duration-200 font-semibold text-base",
                      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                      expandedCategory && "text-primary-600 bg-primary-50"
                    )}
                    aria-expanded={expandedCategory !== null}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        expandedCategory && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Treatment Categories Accordion */}
                  {expandedCategory && (
                    <div className="pl-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                      {treatmentsMenuData.categories.map((category) => (
                        <div key={category.id} className="space-y-2">
                          <button
                            onClick={() => toggleCategory(category.id)}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2.5 rounded-lg",
                              "text-neutral-600 hover:text-primary-600 hover:bg-primary-50",
                              "transition-all duration-200 font-medium text-sm",
                              "focus:outline-none focus:ring-2 focus:ring-primary-500",
                              expandedCategory === category.id && "text-primary-600 bg-primary-50"
                            )}
                            aria-expanded={expandedCategory === category.id}
                          >
                            <span>{category.label}</span>
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                expandedCategory === category.id && "rotate-180"
                              )}
                            />
                          </button>

                          {/* Treatment Links */}
                          {expandedCategory === category.id && (
                            <div className="pl-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                              {category.columns.map((column, colIndex) => (
                                <div key={colIndex} className="space-y-1">
                                  <p className="px-4 py-2 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                                    {column.header}
                                  </p>
                                  {column.treatments.map((treatment, idx) => (
                                    <Link
                                      key={idx}
                                      href={treatment.href}
                                      onClick={onClose}
                                      className={cn(
                                        "block px-4 py-2 rounded-lg text-sm",
                                        "text-neutral-600 hover:text-primary-600 hover:bg-primary-50",
                                        "transition-all duration-200",
                                        "focus:outline-none focus:ring-2 focus:ring-primary-500"
                                      )}
                                    >
                                      {treatment.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Regular Navigation Link */
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "block px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-base",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                    link.special
                      ? "bg-accent-rose text-primary-600 hover:bg-accent-rose/90 text-center"
                      : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="sticky bottom-0 bg-white border-t border-neutral-200 px-6 py-4">
          <Button
            asChild
            className={cn(
              "w-full bg-primary-600 hover:bg-primary-700 text-white",
              "py-4 rounded-full font-semibold text-base shadow-lg",
              "transition-all duration-200"
            )}
          >
            <a
              href="https://partner.pabau.com/online-bookings/facecult"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              Book Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
