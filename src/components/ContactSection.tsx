"use client";

import React, { useState } from "react";
import { BUSINESS_INFO, CITIES_SERVED } from "@/data/business";
import { RollButton } from "./RollButton";
import { Phone, MessageSquare, Clock, CheckCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("Prishtinë");
  const [projectType, setProjectType] = useState("Banesë e re");
  const [approxM2, setApproxM2] = useState("80");

  const handleCustomConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Përshëndetje Konjuhi Parket! Dëshiroj të caktoj matje në vend dhe mostër falas.\n- Qyteti: ${selectedCity}\n- Tipi i projektit: ${projectType}\n- Sipërfaqja e përafërt: ${approxM2} m²\nJu lutem më kontaktoni me detaje.`;
    window.open(BUSINESS_INFO.whatsapp.createLink(msg), "_blank");
  };

  return (
    <section
      id="kontakt"
      className="scroll-mt-28 py-24 md:py-36 bg-[#0c0c0c] text-[#f6f1e8] pl-grain-dark relative overflow-hidden border-t border-white/10"
    >
      {/* Decorative architectural geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c68a4c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#c68a4c] font-mono text-xs uppercase tracking-[0.2em] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c68a4c] pl-pulse" />
            <span>KONSULENCË & MATJE PA PAGESË</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f6f1e8] font-normal leading-[1.1] tracking-tight mb-6">
            Keni një projekt në mendje? <br />
            <span className="italic text-[#c68a4c]">Na kontaktoni</span> për matje në vend dhe mostër falas.
          </h2>

          <p className="font-mono text-xs sm:text-sm text-white/70 uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
            Shërbejmë me përkushtim në çdo qytet të Kosovës. Mjeshtri ynë vjen në objekt me mostrat fizike të drurit.
          </p>
        </div>

        {/* Quick Action Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Card 1: Direct Phone Lines */}
          <div className="lg:col-span-5 bg-[#141414] rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a4c] block mb-3 font-semibold">
                Linjat e Komunikimit të Drejtpërdrejtë
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-6">
                Bisedoni direkt me menaxherin tonë teknik
              </h3>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mb-8">
                {/* Primary Number (Majtas) */}
                <a
                  href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#c68a4c]/50 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#c68a4c]/20 text-[#c68a4c] flex items-center justify-center group-hover:bg-[#c68a4c] group-hover:text-white transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#c68a4c]/15 group-hover:bg-[#c68a4c] text-[#c68a4c] group-hover:text-white text-[10px] font-mono uppercase font-bold tracking-wider flex items-center gap-0.5 transition-colors">
                      <span>Thirr</span>
                      <span>↗</span>
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9.5px] uppercase tracking-wider text-white/50 truncate">
                      Kryesor & WhatsApp
                    </span>
                    <span className="font-mono text-[12px] sm:text-sm font-bold text-white group-hover:text-[#c68a4c] transition-colors block mt-0.5 truncate">
                      {BUSINESS_INFO.phones.primary}
                    </span>
                  </div>
                </a>

                {/* Secondary Number (Djathtas) */}
                <a
                  href={`tel:${BUSINESS_INFO.phones.secondaryRaw}`}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#c68a4c]/50 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-[#c68a4c] group-hover:text-white transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white/10 group-hover:bg-[#c68a4c] text-white/75 group-hover:text-white text-[10px] font-mono uppercase font-bold tracking-wider flex items-center gap-0.5 transition-colors">
                      <span>Thirr</span>
                      <span>↗</span>
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9.5px] uppercase tracking-wider text-white/50 truncate">
                      Linja e Dytë
                    </span>
                    <span className="font-mono text-[12px] sm:text-sm font-bold text-white group-hover:text-[#c68a4c] transition-colors block mt-0.5 truncate">
                      {BUSINESS_INFO.phones.secondary}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Operating Times Tag - Majtas & Djathtas with generous spacing */}
            <div className="pt-6 border-t border-white/10 flex items-start justify-between gap-4">
              <div className="flex items-start gap-2.5 min-w-0">
                <Clock className="w-4 h-4 text-[#c68a4c] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block font-mono text-[10px] uppercase text-white/45 tracking-wider font-semibold">
                    Orari i Punës
                  </span>
                  <p className="font-mono text-xs text-white/85 font-medium leading-snug">
                    E hënë – E shtunë: 08:00 – 18:00
                  </p>
                  <p className="font-mono text-[10.5px] text-white/45">
                    (E diel me termin paraprak)
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10.5px] sm:text-[11px] font-mono font-bold tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Aktive sot</span>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Instant WhatsApp Appointment Builder */}
          <div className="lg:col-span-7 bg-[#161616] rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a4c] block mb-3 font-semibold">
                Kërkesë e Shpejtë në WhatsApp
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-6">
                Cakto datën për vizitë dhe sjelljen e mostrave
              </h3>

              <form onSubmit={handleCustomConsultation} className="space-y-4 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City selector */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-white/70 mb-1.5">
                      Qyteti juaj në Kosovë:
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full bg-[#1c1c1c] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#c68a4c]"
                    >
                      {CITIES_SERVED.map((c) => (
                        <option key={c.city} value={c.city} className="bg-[#1c1c1c] text-white">
                          {c.city} (Matje Pa Pagesë)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-white/70 mb-1.5">
                      Lloji i Ambientit:
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-[#1c1c1c] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#c68a4c]"
                    >
                      <option value="Banesë e re">Banesë e re</option>
                      <option value="Renovim shtëpie">Renovim shtëpie / dysheme ekzistuese</option>
                      <option value="Lokal / Zyrë Komerciale">Lokal / Zyrë Komerciale</option>
                      <option value="Villë / Shtëpi pushimi">Villë / Shtëpi pushimi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/70 mb-1.5">
                    Sipërfaqja e përafërt në m²:
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="2000"
                    value={approxM2}
                    onChange={(e) => setApproxM2(e.target.value)}
                    placeholder="p.sh. 85 m²"
                    className="w-full bg-[#1c1c1c] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#c68a4c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c68a4c] hover:bg-[#b3783a] text-white font-mono text-xs uppercase tracking-[0.16em] rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-[#c68a4c]/20 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Dërgo Kërkesën Menjëherë në WhatsApp ↗</span>
                </button>
              </form>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 pt-2 border-t border-white/5">
              <CheckCircle className="w-3.5 h-3.5 text-[#c68a4c]" />
              <span>Matja në terren nuk ju obligon me asnjë blerje.</span>
            </div>
          </div>

        </div>

        {/* Big Highlight WhatsApp Strip */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#181818] via-[#1f1913] to-[#181818] border border-[#c68a4c]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c68a4c] text-white flex items-center justify-center flex-shrink-0 shadow-lg">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-2xl text-white">
                Dëshironi përgjigje të menjëhershme brenda 5 minutave?
              </h4>
              <p className="font-mono text-xs text-white/70 uppercase tracking-wider">
                Ekipi ynë është online në WhatsApp çdo ditë pune.
              </p>
            </div>
          </div>

          <RollButton
            label="Hap WhatsApp Chat"
            subLabel="+383 45 555 145 ↗"
            href={BUSINESS_INFO.whatsapp.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            className="text-xs font-bold whitespace-nowrap"
          />
        </div>

      </div>
    </section>
  );
};
