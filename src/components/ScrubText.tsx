"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrubTextProps {
  text: string;
  highlightIndices?: number[];
  className?: string;
}

export const ScrubText: React.FC<ScrubTextProps> = ({
  text,
  highlightIndices = [],
  className = "",
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start illuminating when top enters lower 85% of screen, finish when top reaches upper 25%
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;

      const current = rect.top;
      const rawProgress = (start - current) / (start - end);
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const words = text.split(" ");
  const total = words.length;

  return (
    <p
      ref={containerRef}
      className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight ${className}`}
    >
      {words.map((word, index) => {
        // Calculate each word's individual illumination progress
        const step = 1 / total;
        const wordStart = index * step;
        const wordEnd = (index + 1) * step;

        let wordProgress = 0;
        if (progress >= wordEnd) {
          wordProgress = 1;
        } else if (progress <= wordStart) {
          wordProgress = 0;
        } else {
          wordProgress = (progress - wordStart) / step;
        }

        // Opacity interpolates smoothly from 0.16 to 1.0
        const opacity = 0.16 + 0.84 * wordProgress;

        const isHighlight = highlightIndices.includes(index);

        return (
          <span
            key={index}
            className="inline-block transition-opacity duration-150 mr-[0.28em] last:mr-0"
            style={{
              opacity,
              color: isHighlight && wordProgress > 0.5 ? "#c68a4c" : undefined,
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
};
