"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_INFO } from "@/data/business";
import { RollButton } from "./RollButton";
import { Phone, MessageSquare } from "lucide-react";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Koleksionet", href: "#koleksionet" },
    { label: "Montimi", href: "#montimi" },
    { label: "Specifikat", href: "#specifikat" },
    { label: "Llogaritësi", href: "#kalkulatori" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f6f1e8]/90 backdrop-blur-md border-b border-[#0c0c0c]/8 py-3 shadow-[0_4px_24px_rgba(12,12,12,0.04)]"
            : "bg-[#f6f1e8]/75 backdrop-blur-sm py-4 md:py-5 border-b border-[#0c0c0c]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-transform duration-200"
          >
            {/* Architectural Parquet Icon */}
            <div className="w-10 h-10 rounded-sm bg-[#0c0c0c] text-[#f6f1e8] flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-[#c68a4c]">
              <div className="w-6 h-6 flex flex-col justify-between py-0.5">
                <div className="flex gap-0.5 h-2">
                  <div className="w-1/2 bg-[#f6f1e8] rounded-[0.5px]"></div>
                  <div className="w-1/2 bg-[#f6f1e8]/50 rounded-[0.5px]"></div>
                </div>
                <div className="flex gap-0.5 h-2">
                  <div className="w-1/2 bg-[#f6f1e8]/50 rounded-[0.5px]"></div>
                  <div className="w-1/2 bg-[#f6f1e8] rounded-[0.5px]"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#0c0c0c] leading-none">
                Konjuhi <span className="italic text-[#c68a4c]">Parket</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#0c0c0c]/60 mt-1 font-semibold">
                Parket • Laminat • Profila
              </span>
            </div>
          </a>

          {/* Desktop Mono Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#0c0c0c]/70 hover:text-[#0c0c0c] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c68a4c] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Roll Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <RollButton
                label="Kërko Ofertë ↗"
                subLabel="WhatsApp Chat 💬"
                href={BUSINESS_INFO.whatsapp.createLink(
                  "Përshëndetje Konjuhi Parket! Jam i interesuar për ofertë me montim profesional."
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="shadow-sm"
              />
            </div>

            {/* Mobile Hamburger / Cross Animated Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-11 h-11 rounded-full border border-[#0c0c0c]/15 flex items-center justify-center focus:outline-none bg-[#f6f1e8] text-[#0c0c0c] z-50 cursor-pointer"
              aria-label={isOpen ? "Mbyll menunë" : "Hap menunë"}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <span
                  className={`w-5 h-[1.5px] bg-[#0c0c0c] transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] bg-[#0c0c0c] transition-all duration-200 ${
                    isOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] bg-[#0c0c0c] transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Radial Clip-Path Mobile Drawer */}
      <div
        className="fixed inset-0 z-40 bg-[#0c0c0c] text-[#f6f1e8] md:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pl-grain-dark"
        style={{
          clipPath: isOpen
            ? "circle(150% at calc(100% - 46px) 46px)"
            : "circle(0% at calc(100% - 46px) 46px)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c68a4c]">
            Navigimi Editorial · Konjuhi Parket
          </p>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-3xl sm:text-4xl text-[#f6f1e8] hover:text-[#c68a4c] transition-colors flex items-center justify-between border-b border-white/10 pb-3"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-white/40">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs font-mono tracking-wider text-white/60">
            <span>KOSOVË · SHËRBIM NË ÇDO QYTET</span>
            <span className="text-[#c68a4c]">MATJE FALAS</span>
          </div>

          <a
            href={BUSINESS_INFO.whatsapp.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 bg-[#c68a4c] hover:bg-[#b3783a] text-white font-mono text-xs uppercase tracking-widest rounded-full text-center font-semibold flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Bisedo në WhatsApp (+383 45 555 145)
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
            className="w-full py-3.5 border border-white/20 text-[#f6f1e8] font-mono text-xs uppercase tracking-widest rounded-full text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#c68a4c]" />
            Thirr 045 555 145 / 048 555 145
          </a>
        </div>
      </div>
    </>
  );
};
