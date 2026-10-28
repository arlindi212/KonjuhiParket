"use client";

import React, { useState } from "react";
import { BUSINESS_INFO, CITIES_SERVED } from "@/data/business";
import { ArrowUp, MapPin, ChevronDown } from "lucide-react";

export const Footer: React.FC = () => {
  const [showCities, setShowCities] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#f6f1e8] text-[#0c0c0c] pt-20 pb-8 pl-grain overflow-hidden border-t border-[#0c0c0c]/10">
      
      {/* Parquet Pattern Overlay */}
      <div className="absolute inset-0 bg-parquet-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#0c0c0c]/10">
          
          {/* Column 1: Brand & USP */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#0c0c0c] text-[#f6f1e8] flex items-center justify-center">
                <div className="w-5 h-5 flex flex-col justify-between py-0.5">
                  <div className="flex gap-0.5 h-1.5">
                    <div className="w-1/2 bg-[#f6f1e8] rounded-[0.5px]"></div>
                    <div className="w-1/2 bg-[#f6f1e8]/50 rounded-[0.5px]"></div>
                  </div>
                  <div className="flex gap-0.5 h-1.5">
                    <div className="w-1/2 bg-[#f6f1e8]/50 rounded-[0.5px]"></div>
                    <div className="w-1/2 bg-[#f6f1e8] rounded-[0.5px]"></div>
                  </div>
                </div>
              </div>

              <span className="font-serif text-2xl text-[#0c0c0c] leading-none">
                Konjuhi <span className="italic text-[#c68a4c]">Parket</span>
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#c68a4c] font-semibold">
              {BUSINESS_INFO.usp}
            </p>

            <p className="text-sm text-[#0c0c0c]/70 leading-relaxed max-w-sm">
              Standard i lartë në tregtinë dhe shtrirjen e parketit natyral, laminatit zviceran e gjerman, dhe profileve MDF. Përvojë mbi 15-vjeçare në dysheme rezidenciale dhe komerciale.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0c0c]/5 border border-[#0c0c0c]/10 text-[10px] font-mono uppercase tracking-widest text-[#0c0c0c]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Kosovë · Matje dhe Këshillim Falas
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#0c0c0c]/50 block font-semibold">
              Navigimi
            </span>
            <ul className="space-y-2.5 font-mono text-xs uppercase tracking-wider text-[#0c0c0c]/80">
              <li>
                <a href="#koleksionet" className="hover:text-[#c68a4c] transition-colors">
                  Koleksionet
                </a>
              </li>
              <li>
                <a href="#montimi" className="hover:text-[#c68a4c] transition-colors">
                  Montimi
                </a>
              </li>
              <li>
                <a href="#specifikat" className="hover:text-[#c68a4c] transition-colors">
                  Specifikat
                </a>
              </li>
              <li>
                <a href="#kalkulatori" className="hover:text-[#c68a4c] transition-colors">
                  Kalkulatori m²
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-[#c68a4c] transition-colors">
                  Cakto Matje
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#0c0c0c]/50 block font-semibold">
              Kontakti & Orari
            </span>
            <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
              <div className="flex justify-between items-start py-2 border-b border-[#0c0c0c]/8 sm:border-0 sm:py-0 sm:block">
                <span className="text-[#0c0c0c]/50 block text-[10px] uppercase font-semibold">Telefonat:</span>
                <div className="text-right sm:text-left">
                  <a href={`tel:${BUSINESS_INFO.phones.primaryRaw}`} className="text-[#0c0c0c] font-bold sm:font-semibold hover:text-[#c68a4c] block">
                    {BUSINESS_INFO.phones.primary}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phones.secondaryRaw}`} className="text-[#0c0c0c] font-semibold hover:text-[#c68a4c] block text-[11px] sm:text-xs text-[#0c0c0c]/70">
                    {BUSINESS_INFO.phones.secondary}
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-start py-2 border-b border-[#0c0c0c]/8 sm:border-0 sm:py-0 sm:block">
                <span className="text-[#0c0c0c]/50 block text-[10px] uppercase font-semibold">Orari i Punës:</span>
                <p className="text-[#0c0c0c]/80 text-right sm:text-left text-[11px] sm:text-xs max-w-[210px] sm:max-w-none">{BUSINESS_INFO.workingHours}</p>
              </div>

              <div className="flex justify-between items-start py-2 sm:py-0 sm:block">
                <span className="text-[#0c0c0c]/50 block text-[10px] uppercase font-semibold">Lokacioni:</span>
                <p className="text-[#0c0c0c]/80 text-right sm:text-left text-[11px] sm:text-xs max-w-[210px] sm:max-w-none">{BUSINESS_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Kosovo Cities Served */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#0c0c0c]/50 block font-semibold">
              Qytetet me Shërbim në Terren
            </span>

            {/* Mobile: Softer warm charcoal black button "Ku gjindemi ne" that reveals locations only when clicked */}
            <div className="sm:hidden space-y-3">
              <button
                type="button"
                onClick={() => setShowCities((prev) => !prev)}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#1e1d1a] hover:bg-[#282622] text-[#f6f1e8] border border-[#1e1d1a]/80 flex items-center justify-between font-mono text-xs uppercase tracking-wider font-bold shadow-[0_4px_16px_rgba(30,29,26,0.18)] active:scale-[0.98] transition-all duration-200 cursor-pointer select-none"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#c68a4c] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-bold text-[#f6f1e8] text-[12px] tracking-[0.08em]">Ku gjindemi ne</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#f6f1e8] text-[#1e1d1a] font-bold text-[10px] tracking-wider uppercase flex items-center gap-1.5 shadow-sm shrink-0">
                  <span>{showCities ? "Mbyll" : "Shfaq"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      showCities ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {showCities && (
                <div className="space-y-3 pt-1 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-2">
                    {CITIES_SERVED.map((c) => (
                      <span
                        key={c.city}
                        className="px-2.5 py-2.5 rounded-xl bg-[#252420] text-[#f6f1e8] border border-[#1e1d1a]/30 text-[11px] font-mono font-medium text-center flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98] transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c68a4c] shrink-0"></span>
                        <span>{c.city}</span>
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] font-mono text-[#c68a4c] pt-1 font-semibold">
                    ✓ Ekipi ynë vjen në çdo komunë brenda 24 orëve.
                  </p>
                </div>
              )}
            </div>

            {/* Desktop: Keep visible as originally designed */}
            <div className="hidden sm:block space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {CITIES_SERVED.map((c) => (
                  <span
                    key={c.city}
                    className="px-2.5 py-1 rounded bg-[#0c0c0c]/5 border border-[#0c0c0c]/8 text-[11px] font-mono text-[#0c0c0c]/80 hover:text-[#c68a4c] transition-colors"
                  >
                    {c.city}
                  </span>
                ))}
              </div>
              <p className="text-[11px] font-mono text-[#c68a4c] pt-1">
                ✓ Ekipi ynë vjen në çdo komunë brenda 24 orëve.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Sub-row */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#0c0c0c]/60 border-b border-[#0c0c0c]/10 gap-4">
          <p>
            © 2026 {BUSINESS_INFO.name}. Të gjitha të drejtat të rezervuara.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#0c0c0c] hover:text-[#c68a4c] uppercase tracking-wider font-semibold transition-colors cursor-pointer"
          >
            <span>Kthehu në krye</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Giant Editorial Watermark: KONJUHI */}
        <div className="w-full text-center overflow-hidden pt-6 pb-2 pointer-events-none select-none">
          <span className="font-serif text-[18vw] leading-[0.78] tracking-[-0.03em] font-normal text-[#0c0c0c]/[0.08] block uppercase">
            KONJUHI
          </span>
        </div>

      </div>
    </footer>
  );
};
