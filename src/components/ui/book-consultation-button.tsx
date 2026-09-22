"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookConsultationButtonProps extends React.ComponentProps<typeof Button> {
  showIcon?: boolean;
  children?: React.ReactNode;
  asChild?: boolean;
}

const PABAU_BOOKING_URL = "https://partner.pabau.com/online-bookings/facecult";

export function BookConsultationButton({
  showIcon = false,
  children = "Book Consultation",
  className,
  asChild,
  ...props
}: BookConsultationButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#FEBAC4' : '#01373A',
    color: isHovered ? '#01373A' : '#ffffff',
    transition: 'all 0.2s ease',
  };

  // When using asChild, don't render the icon - let the child handle all content
  if (asChild) {
    return (
      <Button
        className={cn("transition-colors", className)}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        asChild
        {...props}
      >
        {children}
      </Button>
    );
  }

  // When not using asChild, wrap in an anchor tag that links to Pabau
  return (
    <Button
      className={cn("transition-colors", className)}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      asChild
    >
      <a
        href={PABAU_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {showIcon && <Calendar className="w-4 h-4 mr-2" />}
        {children}
      </a>
    </Button>
  );
}