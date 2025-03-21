import mrgold from "../assets/MR GOLD.jpg";
import bmr from "../assets/BMR.jpg";

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  details: string;
  applications: string[];
  image: {
    src: string;
    alt: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    title: "MR BRONZE",
    subtitle: "Carpenter's Delight",
    image: {
      src: mrgold,
      alt: "MR Bronze Plywood",
    },
    description:
      "MR Bronze is an economical and emerging variety in India. We offer the product with best price in the market.",
    features: [
      "Semi Hardwood",
      "Termite Resistant",
      "Insect Resistance",
      "Strong",
      "Moisture Resistance",
      "Eco Friendly",
    ],
    details:
      "Made from high-quality semi hardwood with UREA and Formaldehyde resin. Interior grade suitable for indoor use.",
    applications: ["Home Furniture", "Office Furniture", "Cupboards"],
  },
  {
    id: 2,
    title: "MR GOLD",
    image: {
      src: mrgold,
      alt: "MR Gold Plywood",
    },
    subtitle: "Premium Interior Solution",
    description: "High-quality interior grade plywood with enhanced durability.",
    features: [
      "Hardwood Core",
      "Superior Finish",
      "Crack Resistant",
      "Smooth Surface",
      "Eco Friendly",
      "Cost Effective",
    ],
    details:
      "Made with advanced bonding technology for better structural integrity.",
    applications: ["Modular Furniture", "Wall Paneling", "Decorative Items"],
  },
  {
    id: 3,
    title: "BWP Platina",
    image: {
      src: bmr,
      alt: "BWP Platina Plywood",
    },
    subtitle: "Weatherproof Excellence",
    description: "Boiling Water Proof plywood for extreme conditions.",
    features: [
      "Boiling Water Resistant",
      "Termite Proof",
      "Long-lasting",
      "High Density",
      "Chemical Resistant",
      "UV Protected",
    ],
    details: "Ideal for outdoor and high-moisture environments.",
    applications: ["Exterior Furniture", "Marine Use", "Bathroom Cabinets"],
  },
  {
    id: 4,
    title: "BWR Calibrated",
    image: {
      src: bmr,
      alt: "BWR Calibrated Plywood",
    },
    subtitle: "Precision Engineering",
    description: "Calibrated for perfect dimensions and consistency.",
    features: [
      "Uniform Thickness",
      "High Strength",
      "Moisture Resistance",
      "Surface Smoothness",
      "Termite Resistant",
      "Eco Certified",
    ],
    details: "Perfect for precise carpentry and industrial applications.",
    applications: ["Cabinet Making", "Flooring", "Architectural Millwork"],
  },
];
