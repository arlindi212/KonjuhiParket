"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BUSINESS_INFO, HERO_DYNAMIC_WORDS } from "@/data/business";
import { RollButton } from "./RollButton";
import { Check, ShieldCheck, Ruler, ArrowDown, Sparkles } from "lucide-react";

interface HeroCurtainProps {
  scrollProgress: number; // 0 to 1 as hero scrolls out
}

export const HeroCurtain: React.FC<HeroCurtainProps> = ({ scrollProgress }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Dynamic rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % HERO_DYNAMIC_WORDS.length);
        setIsFlipping(false);
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // Compute curtain scaling and fade
  const scale = 1 - scrollProgress * 0.07; // 1 -> 0.93
  const opacity = 1 - scrollProgress * 0.55; // 1 -> 0.45
  const borderRadius = `${scrollProgress * 28}px`;

  return (
    <div
      className="sticky top-0 w-full h-[100svh] min-h-[640px] max-h-[1100px] flex flex-col justify-between overflow-hidden bg-[#f6f1e8] text-[#0c0c0c] pl-grain transition-[border-radius] duration-150 origin-bottom"
      style={{
        transform: `scale(${scale})`,
        opacity,
        borderRadius,
      }}
    >
      {/* Background Parquet Architectural Grid */}
      <div className="absolute inset-0 bg-parquet-pattern opacity-40 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 md:pt-32 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            
            {/* Top Tag with Pulsing Golden Amber Dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0c0c0c]/5 border border-[#0c0c0c]/10 text-[#0c0c0c] text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.18em]">
              <span className="w-2 h-2 rounded-full bg-[#c68a4c] pl-pulse inline-block shadow-[0_0_8px_#c68a4c]" />
              <span className="font-semibold">{BUSINESS_INFO.uspBadge}</span>
            </div>

            {/* Giant Title with Instrument Serif & Dynamic Rotating Word */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-[82px] leading-[1.04] tracking-[-0.02em] text-[#0c0c0c]">
              <span className="pl-mask">
                <span className="pl-word">Ndërtojmë</span>
              </span>{" "}
              <span className="pl-mask">
                <span className="pl-word" style={{ animationDelay: "0.1s" }}>
                  dysheme
                </span>
              </span>{" "}
              <span className="pl-mask">
                <span className="pl-word" style={{ animationDelay: "0.2s" }}>
                  me
                </span>
              </span>
              <br />
              <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom">
                <span
                  className={`inline-block italic text-[#c68a4c] transition-all duration-300 ease-out transform ${
                    isFlipping
                      ? "-translate-y-full opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  {HERO_DYNAMIC_WORDS[wordIndex]}
                </span>
              </span>
              <br />
              <span className="pl-mask">
                <span className="pl-word" style={{ animationDelay: "0.3s" }}>
                  që
                </span>
              </span>{" "}
              <span className="pl-mask">
                <span className="pl-word" style={{ animationDelay: "0.35s" }}>
                  shtëpia
                </span>
              </span>{" "}
              <span className="pl-mask">
                <span className="pl-word" style={{ animationDelay: "0.4s" }}>
                  jote
                </span>
              </span>{" "}
              <span className="pl-mask">
                <span className="pl-word" style={{ animationDelay: "0.45s" }}>
                  i
                </span>
              </span>{" "}
              <span className="pl-mask">
                <span className="pl-word" style={{ animationDelay: "0.5s" }}>
                  beson.
                </span>
              </span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-base sm:text-lg text-[#0c0c0c]/75 max-w-xl font-normal leading-relaxed">
              Koleksione të përzgjedhura të parketit natyral dhe laminatit gjerman AC4/AC5. 
              Mjeshtër me përvojë të gjatë që marrin përsipër çdo detaj nga matja në terren deri te përfundimi i përkryer.
            </p>

            {/* Primary Action Buttons with .pl-roll */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <RollButton
                label="Porosit në WhatsApp"
                subLabel="Matje Pa Pagesë ↗"
                href={BUSINESS_INFO.whatsapp.createLink(
                  "Përshëndetje Konjuhi Parket! Dëshiroj të bëj porosi dhe të caktoj matje pa pagesë."
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="text-sm shadow-md"
              />

              <RollButton
                label="Shiko Koleksionet"
                subLabel="Eksploro Drurin ↓"
                href="#koleksionet"
                variant="secondary"
                className="text-sm"
              />
            </div>

            {/* Quick Guarantees Micro-list */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-1 text-[11px] sm:text-xs font-mono uppercase tracking-[0.14em] text-[#0c0c0c]/60">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c68a4c]" /> Matje falas në vend
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c68a4c]" /> Garanci me kontratë
              </span>
              <span className="flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-[#c68a4c]" /> Prerje pa pluhur
              </span>
            </div>

          </div>

          {/* Right Column: Floating Drift Cards (.pl-drift-a & .pl-drift-b) */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center min-h-[380px]">
            
            {/* Primary Drift Card A: Spec Sheet A4 */}
            <div className="pl-drift-a relative z-20 w-[320px] lg:w-[350px] bg-[#fffdf9] rounded-lg p-6 border border-[#0c0c0c]/12 shadow-[0_25px_60px_-15px_rgba(12,12,12,0.18)]">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#0c0c0c]/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#c68a4c]" />
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0c0c0c]/70 font-semibold">
                    SPECIFIKIM TEKNIK A4
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#0c0c0c]/50">
                  KP-2026/DOC
                </span>
              </div>

              {/* Visual Thumbnail of Real Oak Parquet */}
              <div className="relative w-full h-36 rounded overflow-hidden border border-[#0c0c0c]/10 mb-4 bg-[#e8dec8]">
                <Image
                  src="/images/oak-parquet.jpg"
                  alt="Parket Masiv Lisi Konjuhi"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono tracking-wider text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  Dru Lisi Natyral 14mm
                </span>
              </div>

              {/* Surface Calculation Breakdown */}
              <div className="space-y-2.5 mb-5 font-mono text-[11px]">
                <div className="flex justify-between py-1 border-b border-[#0c0c0c]/8">
                  <span className="text-[#0c0c0c]/60">Sipërfaqja shembull:</span>
                  <span className="font-semibold text-[#0c0c0c]">120.0 m²</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0c0c0c]/8">
                  <span className="text-[#0c0c0c]/60">Paketimi i nevojshëm:</span>
                  <span className="font-semibold text-[#0c0c0c]">54 Pako (+10% humbje)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0c0c0c]/8">
                  <span className="text-[#0c0c0c]/60">Sistemi i mbylljes:</span>
                  <span className="font-semibold text-[#0c0c0c]">Click 5G Pa Ngjitës</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0c0c0c]/8">
                  <span className="text-[#0c0c0c]/60">Përshtatshmëria:</span>
                  <span className="font-semibold text-[#c68a4c]">Ngrohje nën dysheme ✓</span>
                </div>
              </div>

              {/* Skewed Stamped Badge: "ME MONTIM" */}
              <div className="absolute -top-3 -right-3 transform rotate-[-12deg] z-30 pointer-events-none">
                <div className="px-3 py-1 bg-[#c68a4c] text-white font-mono text-[11px] uppercase font-bold tracking-[0.2em] border-2 border-white shadow-lg rounded-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white" />
                  ME MONTIM
                </div>
              </div>

              {/* Bottom Quick Action */}
              <a
                href={BUSINESS_INFO.whatsapp.createLink(
                  "Përshëndetje! Po shikoj mostrat e parketit dhe dëshiroj konsultim për një projekt."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-2 bg-[#0c0c0c] hover:bg-[#c68a4c] text-[#f6f1e8] font-mono text-[10px] uppercase tracking-[0.16em] rounded transition-colors duration-200"
              >
                Kërko këtë mostër falas ↗
              </a>
            </div>

            {/* Secondary Floating Pill Card B: Drift B */}
            <div className="pl-drift-b absolute -bottom-4 -left-6 z-30 bg-[#0c0c0c] text-[#f6f1e8] px-4 py-2.5 rounded-full border border-white/10 shadow-xl flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#c68a4c] pl-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/90">
                Matje & Këshillim Pa Pagesë në Kosovë
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Scroll Down Animated Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 pt-4 flex items-center justify-between border-t border-[#0c0c0c]/8">
        <div className="flex items-center gap-3">
          <div className="w-[1.5px] h-8 bg-[#0c0c0c]/15 relative overflow-hidden">
            <div className="w-full h-full bg-[#c68a4c] pl-scroll-line" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0c0c0c]/60">
            Rrëshqit poshtë për të zbuluar dhomën e ndërtimit
          </span>
        </div>

        <a
          href="#dhoma-e-zeze"
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0c0c0c]/70 hover:text-[#c68a4c] transition-colors flex items-center gap-1"
        >
          <span>Eksploro</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
