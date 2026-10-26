# Konjuhi Parket — Modern Editorial / Craft Luxury Landing Page

Faqe zyrtare kryesore (Landing Page) e krijuar me **Next.js 16 (App Router)**, **TypeScript**, dhe **Tailwind CSS**, duke replikuar stilin dhe animacionet kinetike të arkitekturës **Modern Editorial / Craft Luxury (InvoiceApp)**.

---

## 🎨 Paleta e Ngjyrave & Identiteti
- **CREAM (`#f6f1e8`)**: Sfondi editorial i ngrohtë prej letre/pergamenti natyral.
- **INK (`#0c0c0c`)**: E zeza e thellë obsidian për kontrast të lartë dhe për Dhomën e Zezë (*Build Room*).
- **ACCENT (`#c68a4c`)**: Nuancë e ngrohtë lisi/ari të logos së Konjuhi Parket.

---

## 🔤 Tipografia
- **Display Serif**: `Instrument_Serif` nga `next/font/google` për titujt kryesorë, fjalët italike dhe elegancën craft.
- **Monospace**: `JetBrains_Mono` (`font-mono`) me uppercase tracking (`0.14em` deri `0.2em`) për të dhënat teknike (8mm, 14mm, AC5, m², 01, 02).
- **Body**: `Plus_Jakarta_Sans` me kontrast të lartë dhe lexueshmëri maksimale.

---

## ⚡ Animacionet & Efektet Kinetike
1. **`.pl-grain` & `.pl-grain-dark`**: Texture analoge SVG me zhurmë mikroskopike (`feTurbulence`) në sfond.
2. **`.pl-mask` & `.pl-word`**: Zbulim kinetik fjalë-për-fjalë me `transform: translate3d(0, 112%, 0)` dhe vonesa kaskadë.
3. **`.pl-roll`**: Butona me tekst të dyfishtë me efekt rrotullimi (*roll*) gjatë hover-it.
4. **`ScrubText` Component**: Fjalët e manifestit ndriçohen njëra pas tjetrës gjatë scroll-it (nga `0.16` në `1.0` opacity).
5. **Radial Clip-Path Menu**: Menuja mobile hapet me efekt rrethor kinetik `circle(150% at calc(100% - 46px) 46px)`.
6. **Sticky Hero Curtain**: Hero me lartësi `100svh`, `sticky top-0`, i cili gjatë scroll-it zvogëlohet me `scale(0.93)` dhe bën fade out, ndërsa Dhoma e Zezë rrëshqet përmbi të (`overflow-x: clip`).
7. **Floating Drift Cards (`.pl-drift-a` & `.pl-drift-b`)**: Fletë mostrash druri A4 me llogaritje sipërfaqeje në m² dhe vulë të pjerrët `"ME MONTIM"`.

---

## 🏗️ Struktura e Projektit (Senior Architecture)

```
konjuhi-parket/
├── public/
│   └── images/
│       ├── oak-parquet.jpg       # Foto makro e parketit masiv të lisit
│       ├── swiss-laminate.jpg    # Foto e laminatit premium AC5
│       └── craft-install.jpg     # Foto e montimit profesional në terren
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Fontet Google, OpenGraph, Viewport, SEO metadata
│   │   ├── globals.css           # Tokens të dizajnit, grain, .pl-roll, .pl-mask, keyframes
│   │   └── page.tsx              # Faqja kryesore Client Component (Orkestruesi)
│   ├── components/
│   │   ├── Navigation.tsx        # Header me qelq të ngrirë, roll CTA, radial clip drawer
│   │   ├── HeroCurtain.tsx       # 100svh sticky hero curtain me fjalë rrotulluese & drift A4 card
│   │   ├── BuildRoom.tsx         # Dhoma e Zezë, Marquee, ScrubText, 3 pllaka interaktive
│   │   ├── SpecSection.tsx       # Tabela e specifikimeve dhe Kalkulatori interaktiv m²
│   │   ├── ContactSection.tsx    # Seksioni i thirrjes dhe lidhja direkte në WhatsApp
│   │   ├── Footer.tsx            # Footer me orar, qytetet dhe Watermark gjigant "KONJUHI"
│   │   ├── ScrubText.tsx         # Ndriçimi progresiv i fjalëve gjatë scroll-it
│   │   └── RollButton.tsx        # Buton kinetik me dy rreshta lëvizës në hover
│   ├── data/
│   │   └── business.ts           # Të dhënat zyrtare, numrat e telefonit, WhatsApp link builder
│   └── types/
│       └── index.ts              # TypeScript interfaces për produkte, specifikime dhe kalkulator
```

---

## 🚀 Si ta nisni projektin

```bash
cd C:\Users\agonh\.gemini\antigravity-ide\scratch\konjuhi-parket

# Instalimi i varësive (nëse nevoitet)
npm install

# Nisja e serverit të zhvillimit
npm run dev

# Ndërtimi për produksion
npm run build
```

Faqja hapet në: **[http://localhost:3000](http://localhost:3000)**
