import { Product } from "../types";

export const products: Product[] = [
  {
    id: "industrial-solvents",
    name: "Industrial Solvents (Tech Grade)",
    categoryId: "solvents",
    categoryName: "Solvents",
    shortDescription: "High-purity solvents for manufacturing, cleaning, and extraction processes.",
    description: "Our technical grade industrial solvents are engineered for maximum efficiency in heavy manufacturing, precision cleaning, and chemical extraction. Manufactured under strict quality controls to ensure consistent performance and safety.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
    ],
    features: ["High Purity", "Low Residue", "Consistent Quality", "Bulk Availability"],
    specifications: { "Purity": ">99.5%", "Appearance": "Clear, Colorless", "Water Content": "<0.05%" },
    applications: ["Metal Cleaning", "Paint & Coatings", "Pharmaceutical Manufacturing"]
  },
  {
    id: "lab-reagents",
    name: "Analytical Lab Reagents",
    categoryId: "reagents",
    categoryName: "Reagents",
    shortDescription: "Ultra-pure analytical reagents for critical laboratory testing.",
    description: "Designed for use in analytical chemistry and critical laboratory testing, our reagents offer unparalleled purity and reliability for precise scientific research and quality assurance.",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
    ],
    features: ["AR Grade", "Traceable Batches", "Long Shelf Life"],
    specifications: { "Grade": "Analytical Reagent (AR)", "Assay": "99.9%" },
    applications: ["Quality Control Labs", "R&D Facilities", "Academic Research"]
  },
  {
    id: "cleaning-compounds",
    name: "Heavy-Duty Cleaning Compounds",
    categoryId: "cleaning",
    categoryName: "Cleaning Solutions",
    shortDescription: "Industrial-strength degreasers and cleaning agents.",
    description: "Formulated to tackle the toughest industrial grime, grease, and hydrocarbon residues. Safe for use on various metals and industrial surfaces without causing corrosion.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    features: ["Fast Acting", "Non-Corrosive", "Biodegradable Options"],
    specifications: { "pH Level": "11.5 - 12.5", "Density": "1.05 g/cm³" },
    applications: ["Equipment Maintenance", "Facility Floor Cleaning", "Part Degreasing"]
  },
  {
    id: "epoxy-coatings",
    name: "Protective Epoxy Coatings",
    categoryId: "coatings",
    categoryName: "Coatings & Resins",
    shortDescription: "Durable, chemical-resistant epoxy for industrial flooring and structures.",
    description: "High-build epoxy coatings designed to protect concrete floors and steel structures from severe chemical spills, heavy impact, and extreme wear.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    features: ["Chemical Resistant", "High Impact Strength", "Self-Leveling"],
    specifications: { "Cure Time": "24 Hours", "Coverage": "4 m²/kg" },
    applications: ["Warehouse Floors", "Chemical Storage Areas", "Marine Structures"]
  },
  {
    id: "water-treatment",
    name: "Water Treatment Chemicals",
    categoryId: "treatment",
    categoryName: "Water Treatment",
    shortDescription: "Coagulants and flocculants for industrial wastewater management.",
    description: "A comprehensive range of chemicals for the purification and treatment of industrial wastewater, cooling towers, and boiler systems, ensuring environmental compliance.",
    image: "https://images.unsplash.com/photo-1611698906418-b6b1de4ad6a1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611698906418-b6b1de4ad6a1?w=800&q=80"
    ],
    features: ["Rapid Flocculation", "Environmentally Safe", "Cost-Effective"],
    specifications: { "Type": "Polyacrylamide", "Molecular Weight": "High" },
    applications: ["Effluent Treatment", "Municipal Water Facilities", "Mining Runoff"]
  },
  {
    id: "corrosion-inhibitors",
    name: "Advanced Corrosion Inhibitors",
    categoryId: "maintenance",
    categoryName: "Industrial Maintenance",
    shortDescription: "Protective additives to prevent metal degradation in harsh environments.",
    description: "Highly effective corrosion inhibitors designed to protect pipelines, storage tanks, and processing equipment from oxidative damage and extend operational lifespan.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
    ],
    features: ["Long-lasting Protection", "High Thermal Stability", "Low Toxicity"],
    specifications: { "Form": "Liquid", "Solubility": "Water Soluble" },
    applications: ["Oil & Gas Pipelines", "Cooling Systems", "Boiler Treatment"]
  },
  {
    id: "industrial-lubricants",
    name: "Synthetic Industrial Lubricants",
    categoryId: "maintenance",
    categoryName: "Industrial Maintenance",
    shortDescription: "High-performance synthetic oils for heavy machinery.",
    description: "Premium synthetic lubricants formulated to reduce friction, dissipate heat, and prevent wear in high-load industrial machinery operating under extreme conditions.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80"
    ],
    features: ["Extended Drain Intervals", "Excellent Wear Protection", "High Viscosity Index"],
    specifications: { "Viscosity": "ISO VG 320", "Flash Point": ">240°C" },
    applications: ["Gearboxes", "Compressors", "Hydraulic Systems"]
  },
  {
    id: "agricultural-chemicals",
    name: "Agricultural Chemicals",
    categoryId: "agri",
    categoryName: "Agricultural",
    shortDescription: "Fertilizers, pesticides, and soil conditioners for modern agriculture.",
    description: "Precision-grade agricultural chemicals sourced from world-leading manufacturers to maximize crop yield and soil health while complying with international safety regulations.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80"
    ],
    features: ["High Efficacy", "Regulatory Compliant", "Sustainable Formulas"],
    specifications: { "Form": "Liquid & Granular", "Application": "Foliar & Soil" },
    applications: ["Large-Scale Farming", "Greenhouses", "Soil Remediation"]
  }
];
