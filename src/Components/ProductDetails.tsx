import mrgold from "../assets/MR GOLD.jpg";
// import bmr from "../assets/BMR.jpg";

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
    title: "MR COMMERCIAL",
    subtitle: "Carpenter's Delight",
    image: {
      src: mrgold,
      alt: "MR Bronze Plywood",
    },
    description:
      "MR Commercial is an economical and emerging variety in India. We offer the best price in the market while ensuring top-notch quality.",
    features: [
      "Semi Hardwood - Durable and reliable",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Prevents damage",
      "Strong & Sturdy - Ideal for robust applications",
      "Moisture Resistant - Suitable for indoor environments",
      "Eco-Friendly - Sustainable and safe",
    ],
    details: "Made from high-quality semi-hardwood, reinforced with UREA and Formaldehyde resin for enhanced durability. This interior-grade plywood is designed for indoor use, providing strength, stability, and moisture resistance.",
    applications: ["Home Furniture", "Office Furniture", "Cupboards"],
  },
  {
    id: 2,
    title: "MR GOLD",
    subtitle: "Carpenter's Delight",
    image: {
      src: mrgold,
      alt: "MR Gold Plywood"
    },
    description: "MR Gold is a premium plywood made from 100% hardwood. We offer the best price in the market while ensuring top-notch quality and durability.",
    features: [
      "100% Hardwood - Premium quality and strength",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Prevents damage",
      "Strong & Durable - Ideal for heavy-duty applications",
      "Moisture Resistant - Suitable for indoor environments",
      "Eco-Friendly - Sustainable and safe"
    ],
    details: "Made from high-quality hardwood, bonded with UREA and Formaldehyde resin for superior durability. This interior-grade plywood is designed to meet high tolerance standards, ensuring strength and reliability.",
    applications: ["Home Furniture", "Office Furniture", "Cupboards"],
  },  
  {
    id: 3,
    title: "MR COMMERCIAL PLUS",
    subtitle: "Carpenter's Delight",
    image: {
      src: "mrcommercialplus",
      alt: "MR Commercial Plus Plywood"
    },
    description: "MR Commercial Plus is an economical and emerging variety in India. We offer the best price in the market while ensuring top-notch quality.",
    features: [
      "Semi Hardwood - Durable and reliable",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Prevents damage",
      "Strong & Sturdy - Ideal for robust applications",
      "Moisture Resistant - Suitable for indoor environments",
      "Eco-Friendly - Sustainable and safe"
    ],
    details: "Made from high-quality semi-hardwood, bound with UREA and Formaldehyde resin for enhanced durability. This interior-grade plywood is designed for indoor applications, offering strength and moisture resistance.",
    applications: ["Home Furniture", "Office Furniture", "Cupboards"]
  },  
  {
    id: 4,
    title: "BWP ELITE",
    subtitle: "Carpenter's Delight",
    image: {
      src: "bwpelite",
      alt: "BWP Elite Plywood"
    },
    description: "BWP Elite plywood is crafted using advanced technology with carefully selected hardwood veneers. It is bonded with Phenol Formaldehyde resin, ensuring exceptional strength, rigidity, and resistance to termites and fungi.",
    features: [
      "100% Hardwood - High durability and strength",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Prevents damage",
      "Superior Waterproofing - Can withstand water submersion for 72+ hours",
      "Strong & Rigid - Ideal for heavy-duty applications",
      "Eco-Friendly - Safe and sustainable"
    ],
    details: "Engineered for extreme conditions, BWP Elite is bonded with undiluted Phenol Formaldehyde resin, making it highly resistant to moisture and outdoor exposure. Suitable for high-humidity environments and long-term durability.",
    applications: ["Kitchen Cabinets", "Bathroom Partitions", "Marine Applications"],
  },  
  {
    id: 5,
    title: "BWP PREMIUM",
    subtitle: "Carpenter's Delight",
    image: {
      src: "bwppremium",
      alt: "BWP Premium Plywood"
    },
    description: "BWP Premium is a top-tier plywood designed for extreme weather conditions. Manufactured from high-quality hardwood veneers, it is reinforced with Phenol Formaldehyde resin to provide outstanding durability, strength, and waterproofing.",
    features: [
      "100% Hardwood - Premium quality and toughness",
      "Termite Resistant - Long-term durability",
      "Insect Resistance - Protects against infestations",
      "Maximum Waterproofing - Submersible for 72+ hours without damage",
      "Heavy-Duty Strength - Suitable for high-pressure environments",
      "Eco-Friendly - Sustainable and safe"
    ],
    details: "Designed to withstand harsh environments, BWP Premium is made using undiluted Phenol Formaldehyde resin for superior bonding. This exterior-grade plywood is perfect for high-moisture and outdoor applications.",
    applications: ["Kitchen Cabinets", "Bathroom Partitions", "Marine Applications"],
  }, 
  {
    id: 6,
    title: "MR CALIBRATED",
    subtitle: "Carpenter's Delight",
    image: {
      src: "mrcalibrated",
      alt: "MR Calibrated Plywood"
    },
    description: "MR Calibrated plywood is a premium-quality product from Vikaraa, designed for interior applications. Made from 100% high-quality hardwood, it is ideal for home and office furniture. The UREA and Formaldehyde resin used in advanced manufacturing techniques ensures superior strength and durability.",
    features: [
      "100% Hardwood - Premium quality and strength",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Prevents damage",
      "Strong & Durable - Ideal for heavy-duty applications",
      "Moisture Resistant - Suitable for indoor use",
      "Eco-Friendly - Sustainable and safe"
    ],
    details: "Crafted from high-quality 100% hardwood, MR Calibrated plywood is bonded with UREA and Formaldehyde resin to create a superior, durable product perfect for premium interior applications.",
    applications: ["Home Furniture", "Office Furniture"]
  },
  {
    id: 7,
    title: "BWR CALIBRATED",
    subtitle: "Carpenter's Delight",
    image: {
      src: "bwrcalibrated",
      alt: "BWR Calibrated Plywood"
    },
    description: "BWR Calibrated plywood is specially designed to resist boiling water and is ideal for exterior applications. The high-quality resin used in the bonding process prevents cracking and warping, making it a reliable choice for demanding environments.",
    features: [
      "100% Hardwood - Premium durability and strength",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Protects against infestations",
      "Boiled Water Resistance - Superior resistance to water damage",
      "Strong & Rigid - Suitable for heavy-duty applications",
      "Eco-Friendly - Safe and sustainable"
    ],
    details: "BWR Calibrated plywood is made with high-quality hardwood and is bonded using advanced resins for enhanced resistance to boiling water, ensuring long-lasting durability and reliability in extreme conditions.",
    applications: ["Kitchen Cabinets", "False Ceiling", "Bathroom Paneling", "Exterior Purposes"]
  },
  {
    id: 8,
    title: "BSL & OSL PLYWOOD",
    subtitle: "Carpenter's Delight",
    image: {
      src: "bsl-osl",
      alt: "BSL & OSL Plywood"
    },
    description: "BSL & OSL Plywood is crafted through the pressing of MF impregnated with uniform density and porosity on a particle board surface. This process, done under controlled temperature and pressure, modifies the wood to enhance its durability and performance.",
    features: [
      "100% Hardwood - Premium quality and strength",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Prevents damage",
      "Strong & Durable - Ideal for heavy-duty applications",
      "Moisture Resistant - Suitable for various environments",
      "Eco-Friendly - Sustainable and safe"
    ],
    details: "BSL & OSL Plywood is made by pressing MF impregnated with uniform density and porosity onto a particle board surface. This process enhances the plywood's strength, making it a reliable choice for various interior applications.",
    applications: ["Wardrobe Cabins", "Wall Decoration"]
  },  
  {
    id: 9,
    title: "MDF & PARTICLE BOARDS",
    subtitle: "Carpenter's Delight",
    image: {
      src: "mdf-particleboard",
      alt: "MDF & Particle Boards"
    },
    description: "MDF & Particle Boards are crafted using advanced technology to ensure durability and reliability. MDF is highly resistant to abrasion, chemicals, moisture, and termites, while Particle Board is designed to offer a smooth, decorative finish at an affordable cost. Both are ideal for a variety of interior and exterior applications.",
    features: [
      "100% Hardwood - Premium quality and strength",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Prevents damage",
      "Strong & Durable - Ideal for robust applications",
      "Moisture Resistant - Suitable for various environments",
      "Eco-Friendly - Sustainable and safe"
    ],
    details: "MDF plywood is manufactured to be highly resistant to abrasion, household chemicals, fire burns, and termites, ensuring longevity and minimal risk of de-lamination. Particle Boards are created from particles and chips of wood, bonded with advanced technology for a smooth, decorative finish that remains affordable.",
    applications: [
      "Benches",
      "Doors",
      "Floors",
      "Outdoor Furniture",
      "Kitchen Cabinets",
      "False Ceiling",
      "Bathroom Paneling",
      "Exterior Purposes"
    ]
  },
  {
    id: 10,
    title: "BLOCK BOARDS & FLUSH DOORS",
    subtitle: "Carpenter's Delight",
    image: {
      src: "block-boards-flush-doors",
      alt: "Block Boards & Flush Doors"
    },
    description: "Block Boards and Flush Doors are designed for both strength and aesthetic appeal. Block Boards are made from solid wood strips with a plywood core and thin veneer panels, while Flush Doors are created with plywood or MDF facings, filled with hardwood for enhanced durability and minimal joints.",
    features: [
      "100% Hardwood - Premium quality and strength",
      "Termite Resistant - Long-lasting protection",
      "Insect Resistance - Prevents damage",
      "Strong & Durable - Ideal for heavy-duty applications",
      "Moisture Resistant - Suitable for various environments",
      "Eco-Friendly - Sustainable and safe"
    ],
    details: "Block Boards are manufactured by bonding solid wood strips under heat and pressure, creating a strong and rigid product. Flush Doors are designed with plywood or MDF facings and a hardwood core, providing a smooth and sturdy finish for both indoor and outdoor applications.",
    applications: [
      "Desks",
      "Tabletops",
      "Furniture Pieces",
      "Indoor & Outdoor Doors"
    ]
  }, 
  {
    id: 11,
    title: "LAMINATES",
    subtitle: "Carpenter's Delight",
    image: {
      src: "laminates",
      alt: "Laminates"
    },
    description: "Laminates are highly flexible and abrasion-resistant, offering enhanced surface durability. Our advanced technology ensures superior bonding and increased resistance to wear and tear, making them an ideal choice for a wide range of applications.",
    features: [
      "Flexible - Easy to apply and adaptable",
      "Abrasion Resistant - Long-lasting protection",
      "Superior Bonding - Strong adhesion to substrates",
      "High Durability - Resistant to wear and tear",
      "Moisture Resistant - Ideal for various environments",
      "Eco-Friendly - Sustainable and safe"
    ],
    details: "Laminates are designed with flexibility and high abrasion resistance. The advanced technology used in their production ensures excellent bonding with substrates and increased durability, making them suitable for use in high-traffic areas.",
    applications: [
      "Tables",
      "Countertops",
      "Cabinet Fronts",
      "Desks",
      "Drawers"
    ]
  }, 
  {
    id: 12,
    title: "EDGE BANDING",
    subtitle: "Carpenter's Delight",
    image: {
      src: "edge-banding",
      alt: "Edge Banding"
    },
    description: "Edge banding is an ultra-thin laminate designed to protect plywood from humidity and enhance the overall appearance of edges. It bonds seamlessly with substrates, providing dimensional stability and a sleek, professional finish without visible seams.",
    features: [
      "Humidity Protection - Safeguards against moisture damage",
      "Dimensional Stability - Provides strength and structure",
      "Superior Finish - Creates a neat and uniform look",
      "Seamless Bonding - Eliminates substrate seams",
      "Durable - Long-lasting protection and aesthetics",
      "Eco-Friendly - Safe and sustainable"
    ],
    details: "Edge banding offers a protective layer that enhances the aesthetic appeal of plywood edges. It bonds smoothly with the substrate, providing a uniform finish that protects from humidity and adds a polished, professional look.",
    applications: [
      "Tables",
      "Countertops",
      "Cabinet Fronts",
      "Desks",
      "Drawers"
    ]
  },  
  
];
