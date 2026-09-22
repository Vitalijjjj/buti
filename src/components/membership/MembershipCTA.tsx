"use client";

import Link from "next/link";
import { gaEvent } from "@/lib/analytics";

interface MembershipCTAProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  "data-analytics"?: string;
  onClick?: () => void;
}

export function MembershipCTA({
  href,
  label,
  variant = "primary",
  className = "",
  "data-analytics": analyticsId,
  onClick,
}: MembershipCTAProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-accent-rose text-primary-600 hover:bg-accent-gold hover:text-white focus:ring-accent-rose",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500",
  };

  const handleClick = () => {
    if (analyticsId) {
      gaEvent("cta_click", {
        cta: analyticsId,
        page: "/membership",
        href,
      });
    }
    onClick?.();
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={handleClick}
      data-analytics={analyticsId}
    >
      {label}
    </Link>
  );
}
