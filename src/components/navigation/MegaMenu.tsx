/**
 * MegaMenu Component
 *
 * Full-width dropdown panel that appears when hovering over TREATMENTS link.
 * Combines CategorySidebar, TreatmentColumns, and CTAColumn.
 *
 * Features:
 * - Smooth fade-in/fade-out animations
 * - Dynamic category switching
 * - Closes on outside click or ESC key
 * - Keyboard navigation support
 * - ARIA-compliant accessibility
 * - Performance optimized with lazy rendering
 *
 * Usage:
 * <MegaMenu
 *   isOpen={isMenuOpen}
 *   onClose={() => setIsMenuOpen(false)}
 *   data={treatmentsMenuData}
 * />
 */

"use client";

import { useState, useEffect, useRef } from "react";
import { MegaMenuData } from "@/types/navigation";
import { CategorySidebar } from "./CategorySidebar";
import { TreatmentColumns } from "./TreatmentColumns";
import { CTAColumn } from "./CTAColumn";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  data: MegaMenuData;
  className?: string;
}

export function MegaMenu({ isOpen, onClose, onMouseEnter, onMouseLeave, data, className }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(data.categories[0]?.id || "");
  const menuRef = useRef<HTMLDivElement>(null);

  // Find the active category data
  const activeCategoryData = data.categories.find(
    (cat) => cat.id === activeCategory
  );

  // Reset to first category when menu opens
  useEffect(() => {
    if (isOpen && data.categories.length > 0) {
      setActiveCategory(data.categories[0].id);
    }
  }, [isOpen, data.categories]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Handle outside click to close menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        // Check if click is also outside the navbar
        const navbar = document.querySelector('[data-navbar]');
        if (navbar && !navbar.contains(e.target as Node)) {
          onClose();
        }
      }
    };

    if (isOpen) {
      // Delay adding listener to avoid immediate triggering
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Don't render if not open (performance optimization)
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mega Menu Panel */}
      <div
        ref={menuRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(
          "fixed left-0 right-0 z-50 bg-white shadow-2xl border-t border-neutral-200",
          "transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none",
          className
        )}
        style={{ top: "var(--navbar-height, 80px)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Treatments menu"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Content Area */}
          <div className="flex gap-6">
            {/* Left Sidebar - Category Navigation */}
            <CategorySidebar
              categories={data.categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Middle Columns - Treatment Links */}
            {activeCategoryData && (
              <div
                className="flex-1 flex gap-6"
                id={`panel-${activeCategory}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeCategory}`}
              >
                {/* Treatment columns with smooth transition */}
                <div
                  className={cn(
                    "flex-1 transition-all duration-300",
                    isOpen ? "opacity-100" : "opacity-0"
                  )}
                >
                  <TreatmentColumns columns={activeCategoryData.columns} />
                </div>

                {/* Right Column - CTAs */}
                <div
                  className={cn(
                    "transition-all duration-300 delay-75",
                    isOpen ? "opacity-100" : "opacity-0"
                  )}
                >
                  <CTAColumn ctas={activeCategoryData.ctas} />
                </div>
              </div>
            )}
          </div>

          {/* Bottom border with accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-accent-rose to-primary-600" />
        </div>
      </div>
    </>
  );
}
