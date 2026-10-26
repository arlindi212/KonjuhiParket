import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://konjuhiparket.com"),
  title: "Konjuhi Parket | Shitje me Montim Profesional në Kosovë",
  description:
    "Konjuhi Parket - Parket masiv natyral, laminat zviceran & gjerman AC4/AC5 dhe profila me montim profesional me përvojë në të gjithë Kosovën. Matje dhe këshillim pa pagesë.",
  keywords: [
    "Konjuhi Parket",
    "Parket Kosovë",
    "Laminat Prishtinë",
    "Montim Parketi",
    "Laminat Gjerman",
    "Parket Lisi",
    "Dysheme Druri",
  ],
  authors: [{ name: "Konjuhi Parket" }],
  openGraph: {
    title: "Konjuhi Parket | Shitje me Montim Profesional",
    description: "Parket • Laminat • Profila. Shitje me Montim Profesional në të gjithë Kosovën.",
    type: "website",
    locale: "sq_AL",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f6f1e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Konjuhi Parket",
    description: "Parket masiv natyral, laminat zviceran & gjerman AC4/AC5 dhe profila me montim profesional në Kosovë.",
    url: "https://konjuhiparket.com",
    telephone: "+38345555145",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Kosovo",
      addressLocality: "Prishtinë",
    },
    areaServed: [
      "Prishtinë",
      "Fushë Kosovë",
      "Ferizaj",
      "Prizren",
      "Pejë",
      "Gjilan",
      "Mitrovicë",
      "Gjakovë",
    ],
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-18:00",
  };

  return (
    <html
      lang="sq"
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${jakartaSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#f6f1e8] text-[#0c0c0c] antialiased selection:bg-[#c68a4c] selection:text-white overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
