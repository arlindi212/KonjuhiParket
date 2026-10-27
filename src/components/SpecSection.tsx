"use client";

import React, { useState } from "react";
import { TECHNICAL_SPECS, BUSINESS_INFO } from "@/data/business";
import { ShieldCheck, Droplets, Flame, Calculator, ArrowRight } from "lucide-react";

export const SpecSection: React.FC = () => {
  // Calculator state
  const [area, setArea] = useState<number>(65);
  const [productType, setProductType] = useState<string>("laminat_ac5");
  const [withInstallation, setWithInstallation] = useState<boolean>(true);
  const [withSkirting, setWithSkirting] = useState<boolean>(true);

  // Waste margin calculation (+10% for cuts and perimeter dilation)
  const wastePercentage = 10;
  const totalM2Required = Math.ceil(area * (1 + wastePercentage / 100));
  // Standard box coverage is around 2.22 m²
  const boxesNeeded = Math.ceil(totalM2Required / 2.22);

  const productNames: Record<string, string> = {
    laminat_ac4: "Laminat Swiss AC4 (8mm)",
    laminat_ac5: "Laminat Gjerman Heavy Duty AC5 (10-12mm)",
    parket_masiv: "Parket Masiv Lisi Evropian (14mm)",
    parket_3_shtresor: "Parket 3-Shtresor Natyral",
  };

  const getWhatsAppMessage = () => {
    return `Përshëndetje Konjuhi Parket! Përdora llogaritësin në faqe:\n` +
      `- Sipërfaqja: ${area} m² (me 10% prerje: ${totalM2Required} m², ${boxesNeeded} pako)\n` +
      `- Produkti: ${productNames[productType]}\n` +
      `- Montimi Profesional: ${withInstallation ? "Po, e dëshiroj me montim" : "Vetëm materiali"}\n` +
      `- Plinta MDF & Izolim: ${withSkirting ? "Po" : "Jo"}\n` +
      `Dëshiroj ofertë të saktë dhe termin për matje falas.`;
  };

  return (
    <section
      id="specifikat"
      className="scroll-mt-28 py-24 md:py-32 bg-[#f6f1e8] text-[#0c0c0c] pl-grain border-t border-[#0c0c0c]/8 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#0c0c0c]/10 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c68a4c] block mb-2 font-semibold">
              04 · TË DHËNAT TEKNIKE & KRAHASIMI
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0c0c0c] font-normal tracking-tight">
              Specifikimet dhe saktësia inxhinierike
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-[#0c0c0c]/60 max-w-sm">
            Çdo dërrasë vlerësohet sipas standardeve më rigoroze evropiane të rezistencës dhe lagështisë.
          </p>
        </div>

        {/* Technical Specification Matrix / Table */}
        <div className="bg-white rounded-xl border border-[#0c0c0c]/10 shadow-[0_4px_24px_rgba(12,12,12,0.03)] overflow-hidden mb-20">
          
          {/* MOBILE VIEW: Specs placed underneath (nga ana poshtë) */}
          <div className="block md:hidden divide-y divide-[#0c0c0c]/8">
            {TECHNICAL_SPECS.map((spec) => (
              <div key={spec.id} className="p-5 space-y-3.5 hover:bg-[#fcfaf5] transition-colors">
                <div>
                  <div className="font-sans font-semibold text-base text-[#0c0c0c] leading-snug">
                    {spec.name}
                  </div>
                  <span className="text-[10.5px] text-[#c68a4c] font-mono uppercase tracking-wider block mt-1">
                    {spec.origin} · {spec.badge}
                  </span>
                </div>

                {/* Key specs underneath in a clean 2-column grid */}
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
                  <div className="bg-[#f6f1e8]/70 p-2.5 rounded-lg border border-[#0c0c0c]/5">
                    <span className="block text-[10px] text-[#0c0c0c]/50 uppercase tracking-wider">Trashësia</span>
                    <span className="font-semibold text-[#0c0c0c] text-xs">{spec.thickness}</span>
                  </div>

                  <div className="bg-[#f6f1e8]/70 p-2.5 rounded-lg border border-[#0c0c0c]/5">
                    <span className="block text-[10px] text-[#0c0c0c]/50 uppercase tracking-wider">Klasa e Konsumit</span>
                    <span className="font-semibold text-[#0c0c0c] text-xs">{spec.durabilityClass}</span>
                  </div>

                  <div className="bg-[#f6f1e8]/70 p-2.5 rounded-lg border border-[#0c0c0c]/5">
                    <span className="block text-[10px] text-[#0c0c0c]/50 uppercase tracking-wider">Sistemi</span>
                    <span className="font-medium text-[#0c0c0c]/85 text-xs truncate block">{spec.lockingSystem}</span>
                  </div>

                  <div className="bg-[#f6f1e8]/70 p-2.5 rounded-lg border border-[#0c0c0c]/5">
                    <span className="block text-[10px] text-[#0c0c0c]/50 uppercase tracking-wider">Garancia</span>
                    <span className="font-semibold text-[#0c0c0c] text-xs">{spec.warrantyYears}</span>
                  </div>
                </div>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <Droplets className="w-3 h-3 shrink-0" />
                    <span>{spec.waterResistance}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Flame className="w-3 h-3 text-[#c68a4c] shrink-0" />
                    <span>{spec.heatingCompatibility}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW: Original Full Matrix Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f0ebe0] border-b border-[#0c0c0c]/10 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0c0c0c]/70">
                  <th className="py-4 px-6 font-semibold">Koleksioni & Lloji</th>
                  <th className="py-4 px-6 font-semibold">Trashësia</th>
                  <th className="py-4 px-6 font-semibold">Klasa e Konsumit</th>
                  <th className="py-4 px-6 font-semibold">Sistemi i Bashkimit</th>
                  <th className="py-4 px-6 font-semibold">Rezistenca ndaj Ujit</th>
                  <th className="py-4 px-6 font-semibold">Ngrohje në Dysheme</th>
                  <th className="py-4 px-6 font-semibold">Garancia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0c0c0c]/8 font-mono text-xs">
                {TECHNICAL_SPECS.map((spec) => (
                  <tr
                    key={spec.id}
                    className="hover:bg-[#fcfaf5] transition-colors duration-150"
                  >
                    <td className="py-5 px-6">
                      <div className="font-sans font-semibold text-sm text-[#0c0c0c]">
                        {spec.name}
                      </div>
                      <span className="text-[10px] text-[#c68a4c] font-mono uppercase tracking-wider">
                        {spec.origin} · {spec.badge}
                      </span>
                    </td>
                    <td className="py-5 px-6 font-semibold text-[#0c0c0c]">
                      {spec.thickness}
                    </td>
                    <td className="py-5 px-6">
                      <span className="px-2 py-1 rounded bg-[#0c0c0c]/5 font-semibold text-[#0c0c0c]">
                        {spec.durabilityClass}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-[#0c0c0c]/80">
                      {spec.lockingSystem}
                    </td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px] font-medium border border-emerald-200">
                        <Droplets className="w-3 h-3" />
                        {spec.waterResistance}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full text-[11px] font-medium border border-amber-200">
                        <Flame className="w-3 h-3 text-[#c68a4c]" />
                        {spec.heatingCompatibility}
                      </span>
                    </td>
                    <td className="py-5 px-6 font-semibold text-[#0c0c0c]">
                      {spec.warrantyYears}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive m² Estimator & Calculator Card */}
        <div id="kalkulatori" className="scroll-mt-28 bg-[#141414] text-[#f6f1e8] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] pl-grain-dark relative overflow-hidden">
          
          {/* Subtle Ambient Wood Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c68a4c]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#c68a4c] font-mono text-[11px] uppercase tracking-wider mb-4">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Kalkulatori i Sipërfaqes dhe Montimit</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#f6f1e8] mb-3">
                  Llogarit sasinë e saktë për ambientin tënd
                </h3>
                <p className="text-sm text-white/70 mb-8 max-w-lg">
                  Plotëso të dhënat e thjeshta për të llogaritur menjëherë pakot e nevojshme, rezervën e rekomanduar prej 10% dhe montimin e plotë.
                </p>

                {/* 1. Area Slider & Number Input */}
                <div className="mb-6 bg-white/[0.03] p-5 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-mono text-xs uppercase tracking-wider text-white/80">
                      Sipërfaqja e Dhomave / Hapësirës:
                    </label>
                    <div className="flex items-center gap-1 font-mono text-lg font-bold text-[#c68a4c]">
                      <input
                        type="number"
                        min="5"
                        max="1000"
                        value={area || ""}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setArea(isNaN(val) || val <= 0 ? 1 : val);
                        }}
                        className="w-20 bg-black/40 border border-white/20 rounded px-2 py-1 text-right text-white focus:outline-none focus:border-[#c68a4c]"
                      />
                      <span>m²</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="1"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full accent-[#c68a4c] cursor-pointer h-2 bg-white/10 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1">
                    <span>10 m² (Dhomë)</span>
                    <span>75 m² (Banesë)</span>
                    <span>150 m² (Shtëpi)</span>
                    <span>300+ m²</span>
                  </div>
                </div>

                {/* 2. Product Selector */}
                <div className="mb-6">
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/80 mb-2">
                    Zgjidh Llojin e Dyshemesë:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: "laminat_ac4", label: "Laminat Swiss AC4 (8mm)", note: "Rezidencial Standard" },
                      { id: "laminat_ac5", label: "Laminat Gjerman AC5 (10-12mm)", note: "Maksimum Rezistencë" },
                      { id: "parket_masiv", label: "Parket Masiv Lisi (14mm)", note: "Dru Natyral Fisnik" },
                      { id: "parket_3_shtresor", label: "Parket 3-Shtresor Natyral", note: "Për Ngrohje Dyshemeje" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setProductType(opt.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          productType === opt.id
                            ? "bg-[#c68a4c]/20 border-[#c68a4c] text-white"
                            : "bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20"
                        }`}
                      >
                        <span className="block font-sans text-xs font-semibold text-white">
                          {opt.label}
                        </span>
                        <span className="block font-mono text-[10px] text-[#c68a4c]">
                          {opt.note}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/[0.05] transition-colors">
                    <input
                      type="checkbox"
                      checked={withInstallation}
                      onChange={(e) => setWithInstallation(e.target.checked)}
                      className="w-4 h-4 accent-[#c68a4c] rounded cursor-pointer"
                    />
                    <span className="font-mono text-xs text-white/90">
                      Përfshij Montimin Profesional
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/[0.05] transition-colors">
                    <input
                      type="checkbox"
                      checked={withSkirting}
                      onChange={(e) => setWithSkirting(e.target.checked)}
                      className="w-4 h-4 accent-[#c68a4c] rounded cursor-pointer"
                    />
                    <span className="font-mono text-xs text-white/90">
                      Plinta MDF & Nën-shtresë Termike
                    </span>
                  </label>
                </div>

              </div>
            </div>

            {/* Right Column: Instant Live Summary & WhatsApp CTA */}
            <div className="lg:col-span-5 bg-[#1a1a1a] rounded-xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-white/60">
                    Përmbledhja e Ofertës
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] tracking-wider font-semibold">
                    MATJA FALAS
                  </span>
                </div>

                <div className="space-y-4 mb-6 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-white/60">Sipërfaqja neto:</span>
                    <span className="text-white font-semibold">{area} m²</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-white/60">Rezervë prerjeje (+10%):</span>
                    <span className="text-[#c68a4c]">+{Math.ceil(area * 0.1)} m²</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-white/60">Gjithsej material:</span>
                    <span className="text-white font-bold">{totalM2Required} m²</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-white/60">Paketimi i vlerësuar:</span>
                    <span className="text-white font-semibold">~{boxesNeeded} Pako</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-white/60">Shërbimi i Montimit:</span>
                    <span className={withInstallation ? "text-emerald-400 font-semibold" : "text-white/40"}>
                      {withInstallation ? "Përfshirë nga Mjeshtri ✓" : "Pa montim"}
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5">
                    <span className="text-white/60">Këshillim në vend:</span>
                    <span className="text-emerald-400 font-semibold">0.00 € (Pa Pagesë)</span>
                  </div>
                </div>

                {/* Guarantee Banner */}
                <div className="p-3 rounded bg-white/[0.04] border border-white/5 mb-6 text-[11px] font-mono text-white/70 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c68a4c] flex-shrink-0" />
                  <span>Çmimi përfundimtar përcaktohet pas verifikimit të dyshemesë nga mjeshtri ynë.</span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <a
                href={BUSINESS_INFO.whatsapp.createLink(getWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#c68a4c] hover:bg-[#b3783a] text-white font-mono text-xs uppercase tracking-[0.16em] rounded-lg font-bold text-center flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-[#c68a4c]/20"
              >
                <span>Dërgo Kalkulimin në WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
