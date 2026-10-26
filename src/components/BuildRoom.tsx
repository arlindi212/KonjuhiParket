"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BUILD_ROOM_TILES, MARQUEE_ITEMS, BUSINESS_INFO } from "@/data/business";
import { ScrubText } from "./ScrubText";
import { ArrowUpRight } from "lucide-react";

export const BuildRoom: React.FC = () => {
  // Live orders cycling to give a dynamic authentic craft pulse
  const liveOrders = [
    { city: "Prishtinë", area: "120 m²", type: "Parket Lisi Masiv", time: "Para 12 min" },
    { city: "Prizren", area: "85 m²", type: "Laminat Gjerman AC5", time: "Para 28 min" },
    { city: "Ferizaj", area: "140 m²", type: "Parket 3-shtresor + Montim", time: "Para 45 min" },
    { city: "Pejë", area: "95 m²", type: "Laminat Zviceran AC4", time: "Para 1 ore" },
  ];

  const [currentOrderIndex, setCurrentOrderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOrderIndex((prev) => (prev + 1) % liveOrders.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [liveOrders.length]);

  const activeOrder = liveOrders[currentOrderIndex];

  return (
    <section
      id="dhoma-e-zeze"
      className="relative z-20 bg-[#0c0c0c] text-[#f6f1e8] py-20 md:py-32 pl-grain-dark overflow-hidden border-t border-white/10"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-parquet-pattern-dark opacity-30 pointer-events-none" />

      {/* 1. Continuous Smooth Marquee */}
      <div className="w-full border-y border-white/10 py-4 mb-20 md:mb-28 overflow-hidden bg-white/[0.02]">
        <div className="pl-marquee-track">
          {/* Repeat marquee items twice for seamless loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center mx-6 font-mono text-[11px] sm:text-xs uppercase tracking-[0.24em] text-white/80 select-none whitespace-nowrap"
            >
              <span>{item}</span>
              <span className="ml-6 text-[#c68a4c]">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Build Room Label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#c68a4c]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c68a4c]" />
            <span>DHOMA E NDËRTIMIT · CRAFT EDITORIAL</span>
          </div>

          <div className="font-mono text-xs text-white/50 tracking-wider">
            STANDARD ZVICERAN & GJERMAN · 2026
          </div>
        </div>

        {/* 2. ScrubText Component Section */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <ScrubText
            text="Çdo dysheme është themeli i shtëpisë tuaj. Ne ndërtojmë ato që zgjasin — me dru të përzgjedhur, montim preciz dhe elegancë që nuk vjetrohet kurrë."
            highlightIndices={[2, 3, 11, 12, 14, 15]}
            className="text-[#f6f1e8]"
          />
        </div>

        {/* Section Headline for 3 Tiles */}
        <div id="koleksionet" className="scroll-mt-28 flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c68a4c] block mb-2">
              Koleksionet & Përparësitë
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f1e8] font-normal tracking-tight">
              Përzgjedhja e drurit dhe arti i shtrirjes
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-wider text-white/60 max-w-xs">
            Tre shtylla themelore që dallojnë punën tonë në çdo hapësirë banimi.
          </p>
        </div>

        {/* 3. Three Interactive Tiles (.pl-tile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {BUILD_ROOM_TILES.map((tile) => (
            <div
              key={tile.id}
              id={tile.id === "master-craft-installation" ? "montimi" : undefined}
              className="pl-tile scroll-mt-28 group bg-[#141414] rounded-xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Tile Top Bar: Number + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#c68a4c] font-semibold">
                    NO. {tile.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-[0.16em] text-white/70">
                    {tile.tag}
                  </span>
                </div>

                {/* Tile Image with Subtle Zoom on Hover */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 border border-white/10 bg-white/5">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
                </div>

                {/* Tile Title & Subtitle */}
                <h3 className="font-serif text-2xl text-[#f6f1e8] mb-2 leading-tight group-hover:text-[#c68a4c] transition-colors">
                  {tile.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#c68a4c]/80 mb-3 font-medium">
                  {tile.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed mb-6 font-normal">
                  {tile.description}
                </p>
              </div>

              {/* Technical Spec List */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono mb-5">
                  {tile.specDetails.map((spec, sIdx) => (
                    <div key={sIdx} className="bg-white/[0.03] p-2 rounded border border-white/5">
                      <span className="text-white/40 block text-[9px] uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-white/90 font-medium">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Link */}
                <a
                  href={BUSINESS_INFO.whatsapp.createLink(
                    `Përshëndetje! Jam i interesuar për: ${tile.title} (${tile.tag}). A mund të më dërgoni ofertë?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-white/5 hover:bg-[#c68a4c] text-white text-xs font-mono uppercase tracking-wider transition-all duration-300 border border-white/10 group-hover:border-[#c68a4c]"
                >
                  <span>Kërko Ofertë për këtë</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Floating Live Order Notification Card */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#181818] border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#c68a4c]/50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-white/80">
              <strong className="text-white font-semibold">Porosi e re montimi:</strong>{" "}
              <span className="text-[#c68a4c]">{activeOrder.city}</span> · {activeOrder.area} · {activeOrder.type}
            </span>
            <span className="font-mono text-[10px] text-white/40 border-l border-white/20 pl-2">
              {activeOrder.time}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
