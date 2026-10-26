"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroCurtain } from "@/components/HeroCurtain";
import { BuildRoom } from "@/components/BuildRoom";
import { SpecSection } from "@/components/SpecSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [heroProgress, setHeroProgress] = useState(0);
  const heroWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroWrapperRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate hero shrinkage progress over the first scroll window
      const scrollThreshold = windowHeight * 0.75;
      const progress = Math.min(1, Math.max(0, scrollY / scrollThreshold));
      setHeroProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#f6f1e8] text-[#0c0c0c] selection:bg-[#c68a4c] selection:text-white overflow-x-clip">
      {/* 1. Floating Navigation Header */}
      <Navigation />

      {/* 2. Sticky Curtain Hero Section Wrapper */}
      {/* The wrapper is 150vh so user can scroll while sticky curtain shrinks with scale(0.93) and fades out */}
      <div ref={heroWrapperRef} className="relative w-full h-[145vh] bg-[#f6f1e8]">
        <HeroCurtain scrollProgress={heroProgress} />
      </div>

      {/* 3. Dhoma e Zezë (Build Room - Sliding over the curtain) */}
      <BuildRoom />

      {/* 4. Mostra dhe Specifikime Teknike & m² Kalkulatori */}
      <SpecSection />

      {/* 5. Seksioni i Thirrjes / Kontaktit & Konsulencës */}
      <ContactSection />

      {/* 6. Footer me Watermark Gjigant "KONJUHI" */}
      <Footer />
    </main>
  );
}
