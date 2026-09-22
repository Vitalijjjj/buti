/**
 * CategorySidebar Component
 *
 * Left sidebar navigation for the mega menu.
 * Displays treatment categories with hover and active states.
 * Clicking a category updates the main content area.
 *
 * Features:
 * - Visual indicator for active category
 * - Smooth hover transitions
 * - Keyboard accessible
 * - ARIA labels for screen readers
 */

"use client";

import { Category } from "@/types/navigation";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategorySidebar({
  categories,
  activeCategory,
  onCategoryChange,
}: CategorySidebarProps) {
  return (
    <nav
      className="flex flex-col space-y-1 min-w-[200px] pr-6 border-r border-neutral-200"
      aria-label="Treatment categories"
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            onMouseEnter={() => onCategoryChange(category.id)}
            className={cn(
              "relative px-4 py-3 text-left rounded-lg transition-all duration-200 group",
              "hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              isActive
                ? "bg-primary-50 text-primary-700 font-semibold"
                : "text-neutral-700 font-medium hover:text-primary-600"
            )}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${category.id}`}
            tabIndex={isActive ? 0 : -1}
          >
            {/* Active indicator bar */}
            <span
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-600 rounded-r-full transition-all duration-200",
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              )}
            />

            <span className="relative z-10">{category.label}</span>

            {/* Hover arrow indicator */}
            <span
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-200",
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          </button>
        );
      })}
    </nav>
  );
}
