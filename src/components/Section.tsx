import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {title && (
          <div className="mb-12">
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {title}
            </h2>
            {intro && (
              <p className="text-lg text-neutral-600 max-w-3xl">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}