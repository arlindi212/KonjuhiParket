export interface ProductSpec {
  id: string;
  name: string;
  category: "Parket Masiv" | "Laminat Premium" | "Profile & Aksesorë";
  thickness: string;
  durabilityClass: string;
  waterResistance: string;
  lockingSystem: string;
  heatingCompatibility: string;
  warrantyYears: string;
  origin: string;
  badge?: string;
  image: string;
  description: string;
  features: string[];
}

export interface WoodTile {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specDetails: { label: string; value: string }[];
  tag: string;
  image: string;
}

export interface CityCoverage {
  city: string;
  freeMeasurement: boolean;
  transitTime: string;
}

export interface QuoteCalculation {
  areaM2: number;
  productType: "laminat_ac4" | "laminat_ac5" | "parket_lisi_masiv" | "parket_3_shtresor";
  includeInstallation: boolean;
  includeUnderlay: boolean;
  includeSkirting: boolean;
}
