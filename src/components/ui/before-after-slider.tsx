"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspectRatio?: string;
  className?: string;
  objectFit?: "cover" | "contain";
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  aspectRatio = "3/4",
  className,
  objectFit = "cover",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      const bounded = Math.min(Math.max(percentage, 0), 100);
      setSliderPosition(bounded);
    },
    []
  );

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = React.useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault(); // Prevent page scrolling
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  React.useEffect(() => {
    if (isDragging) {
      // Lock all scrolling while dragging
      const htmlElement = document.documentElement;
      const bodyElement = document.body;

      htmlElement.style.overflow = 'hidden';
      htmlElement.style.overscrollBehavior = 'none';
      bodyElement.style.overflow = 'hidden';
      bodyElement.style.overscrollBehavior = 'none';

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleMouseUp);
    } else {
      // Restore scroll
      const htmlElement = document.documentElement;
      const bodyElement = document.body;

      htmlElement.style.overflow = '';
      htmlElement.style.overscrollBehavior = '';
      bodyElement.style.overflow = '';
      bodyElement.style.overscrollBehavior = '';
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
      // Restore scroll on cleanup
      const htmlElement = document.documentElement;
      const bodyElement = document.body;

      htmlElement.style.overflow = '';
      htmlElement.style.overscrollBehavior = '';
      bodyElement.style.overflow = '';
      bodyElement.style.overscrollBehavior = '';
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-xl shadow-lg cursor-ew-resize select-none",
        className
      )}
      style={{
        aspectRatio,
        overscrollBehavior: 'none',
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
      onClick={handleClick}
      onDragStart={(e) => e.preventDefault()}
      onPointerDown={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0" style={{ border: 'none', outline: 'none' }}>
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className={`object-${objectFit} object-center`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{ border: 'none', outline: 'none' }}
        />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          border: 'none',
          outline: 'none',
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className={`object-${objectFit} object-center`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{ border: 'none', outline: 'none' }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm text-neutral-900 px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
          Before
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm text-neutral-900 px-3 py-1.5 rounded-full text-sm font-medium shadow-md">
          After
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Vertical Line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white shadow-lg" />

        {/* Handle Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <ChevronLeft className="w-4 h-4 text-primary-600 -mr-1" />
            <ChevronRight className="w-4 h-4 text-primary-600 -ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}