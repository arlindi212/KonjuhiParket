import { ProductSpec, WoodTile, CityCoverage } from "@/types";

export const BUSINESS_INFO = {
  name: "Konjuhi Parket",
  legalName: "Konjuhi Parket SH.P.K.",
  tagline: "Parket • Laminat • Profila",
  usp: "Shitje me Montim Profesional",
  uspBadge: "● SHITJE ME MONTIM · PRISHTINË / KOSOVË",
  phones: {
    primary: "+383 45 555 145",
    secondary: "048 555 145",
    primaryRaw: "+38345555145",
    secondaryRaw: "+38348555145",
  },
  whatsapp: {
    number: "38345555145",
    directUrl: "https://wa.me/38345555145",
    createLink: (message: string) =>
      `https://wa.me/38345555145?text=${encodeURIComponent(message)}`,
  },
  location: "Kosovë (Shërbim në të gjitha qytetet me matje dhe këshillim pa pagesë)",
  workingHours: "E hënë – E shtunë: 08:00 – 18:00 (E diel me termin)",
  address: "Magjistralja Prishtinë – Ferizaj & Pika Qendrore Kosovë",
  email: "info@konjuhiparket.com",
};

export const HERO_DYNAMIC_WORDS = [
  "parket masiv",
  "laminat gjerman",
  "dru lisi",
  "elegancë",
] as const;

export const MARQUEE_ITEMS = [
  "PARKET MASIV",
  "LAMINAT AC5",
  "SHITJE ME MONTIM",
  "PROFILE MDF",
  "GARANCI SHUMËVJEÇARE",
  "MATJE PA PAGESË",
  "DRU LISI NATYRAL",
  "IZOLIM TERMIK & AKUSTIK",
];

export const BUILD_ROOM_TILES: WoodTile[] = [
  {
    id: "natural-oak",
    number: "01",
    title: "Parket Natyral & Tresh-shtresor",
    subtitle: "Dru lisi autentik evropian me qëndrueshmëri brezash",
    description:
      "Strukturë fisnike prej druri masiv lisi me përfundim vaji natyral ose llak mat UV. Ideal për ambiente rezidenciale luksoze, i përshtatshëm 100% për instalim mbi ngrohje qendrore nën dysheme.",
    tag: "DRU FISNIK",
    image: "/images/oak-parquet.jpg",
    specDetails: [
      { label: "Materiali", value: "100% Dru Lisi Natyral" },
      { label: "Trashësia", value: "14 mm (Top layer 3.5mm)" },
      { label: "Përputhshmëria", value: "Ngrohje nën dysheme" },
      { label: "Montimi", value: "Ngjitje elastike / Click" },
    ],
  },
  {
    id: "swiss-german-laminate",
    number: "02",
    title: "Laminat Premium Zviceran & Gjerman",
    subtitle: "Klasa AC4 & AC5 me rezistencë të lartë ndaj gërvishtjeve",
    description:
      "Koleksione të përzgjedhura me damarë druri të sinkronizuar (EIR) dhe teknologji HydroSeal kundër lagështisë. I dizajnuar për trafik të rëndë shtëpiak dhe ambiente moderne komerciale.",
    tag: "KLASA AC5",
    image: "/images/swiss-laminate.jpg",
    specDetails: [
      { label: "Përzgjedhja", value: "Swiss Krono & Kronotex" },
      { label: "Trashësia", value: "8 mm / 10 mm / 12 mm" },
      { label: "Rezistenca", value: "Ujë 24h & Gërvishtje" },
      { label: "Garancia", value: "Deri në 25 vite" },
    ],
  },
  {
    id: "master-craft-installation",
    number: "03",
    title: "Shërbimi i Montimit Profesional",
    subtitle: "Nivelim, termo-izolim dhe prerje precize pa pluhur",
    description:
      "USP-ja jonë kryesore: Mjeshtër të kualifikuar me mbi 15 vite përvojë që garantojnë shtrirje pa defekte, lënie të hapësirës së duhur të dilatimit, nivelim bazë dhe montim perfekt të plintave MDF.",
    tag: "ME MONTIM",
    image: "/images/craft-install.jpg",
    specDetails: [
      { label: "Ekipi", value: "Mjeshtër me mbi 15 vite përvojë" },
      { label: "Përgatitja", value: "Test lagështie & Nivelim" },
      { label: "Pajisjet", value: "Prerje me thithje pluhuri" },
      { label: "Shërbimi", value: "Matje & Konsulencë Falas" },
    ],
  },
];

export const TECHNICAL_SPECS: ProductSpec[] = [
  {
    id: "spec-laminat-ac4",
    name: "Laminat Swiss Line 8mm",
    category: "Laminat Premium",
    thickness: "8 mm",
    durabilityClass: "AC4 / Klasa 32",
    waterResistance: "Standard Water-repellent",
    lockingSystem: "Click System Express",
    heatingCompatibility: "Po (deri në 27°C)",
    warrantyYears: "15 Vite",
    origin: "Zvicër / Gjermani",
    badge: "Bestseller Rezidencial",
    image: "/images/swiss-laminate.jpg",
    description: "Zgjedhja ideale për dhoma gjumi dhe sallone moderne me cilësi të lartë.",
    features: ["Antistatik", "Rezistent ndaj rrezeve UV", "Montim i shpejtë"],
  },
  {
    id: "spec-laminat-ac5",
    name: "Laminat Gjerman Heavy Duty 10-12mm",
    category: "Laminat Premium",
    thickness: "10 mm - 12 mm",
    durabilityClass: "AC5 / Klasa 33",
    waterResistance: "24h Water-resistant HydroSeal",
    lockingSystem: "Valinge 5G Lock",
    heatingCompatibility: "E shkëlqyer",
    warrantyYears: "25 Vite",
    origin: "Gjermani",
    badge: "Maksimum Rezistencë",
    image: "/images/swiss-laminate.jpg",
    description: "Rezistencë ekstreme ndaj goditjeve, takave dhe kafshëve shtëpiake.",
    features: ["Strukturë sinkron me drurin", "Fugë 4V e theksuar", "Izolim akustik"],
  },
  {
    id: "spec-parket-masiv-lisi",
    name: "Parket Masiv Lisi Evropian",
    category: "Parket Masiv",
    thickness: "14 mm - 20 mm",
    durabilityClass: "Klasa e Lartë Druri",
    waterResistance: "I mbrojtur me Vaj/Llak UV",
    lockingSystem: "Fugë & Përç (Tongue & Groove)",
    heatingCompatibility: "Po (versioni i përshtatur)",
    warrantyYears: "Jetëgjatë (Brezash)",
    origin: "Evropë Qendrore",
    badge: "Luks & Natyrë",
    image: "/images/oak-parquet.jpg",
    description: "Dru lisi i pastër i seleksionuar me dorë, i rishlifueshëm disa herë.",
    features: ["100% Ekologjik", "Rishlifohet 4-5 herë", "Ngrohtësi natyrale"],
  },
];

export const CITIES_SERVED: CityCoverage[] = [
  { city: "Prishtinë", freeMeasurement: true, transitTime: "Ditën e njëjtë" },
  { city: "Fushë Kosovë", freeMeasurement: true, transitTime: "Ditën e njëjtë" },
  { city: "Ferizaj", freeMeasurement: true, transitTime: "Brenda 24h" },
  { city: "Prizren", freeMeasurement: true, transitTime: "Brenda 24h" },
  { city: "Pejë", freeMeasurement: true, transitTime: "Brenda 24h" },
  { city: "Gjilan", freeMeasurement: true, transitTime: "Brenda 24h" },
  { city: "Mitrovicë", freeMeasurement: true, transitTime: "Brenda 24h" },
  { city: "Gjakovë", freeMeasurement: true, transitTime: "Brenda 24h" },
  { city: "Podujevë", freeMeasurement: true, transitTime: "Ditën e njëjtë" },
  { city: "Vushtrri", freeMeasurement: true, transitTime: "Brenda 24h" },
];
