import { Product } from "../types";
import parmelImg from "../assets/images/parmelx.png";
import shekaraImg from "/shekara.png";

export const products: Product[] = [
  // ─── EPOXY → RESIN ───────────────────────────────────────────────────────────
  {
    id: "epoxy-resin-standard",
    name: "828",
    category: "epoxy",
    subcategory: "resin",
    categoryName: "Epoxy",
    subcategoryName: "Resin",
    shortDescription: "Solvent Free",
    description:
      "Our Standard Epoxy Resin is a high-purity bisphenol-A based liquid epoxy, offering excellent adhesion, chemical resistance, and mechanical strength. Ideal for a wide range of industrial coatings and structural adhesives.",
    image: parmelImg,
   
  },
  {
    id: "epoxy-resin-flexible",
    name: "X75",
    category: "epoxy",
    subcategory: "resin",
    categoryName: "Epoxy",
    subcategoryName: "Resin",
    shortDescription: "Solvent Based",
    description:
      "A specially modified epoxy resin formulated to provide superior flexibility and toughness compared to standard bisphenol-A resins. Reduces crack propagation in cured systems exposed to thermal cycling and vibration.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  
  },

  // ─── EPOXY → HARDENER ────────────────────────────────────────────────────────
  {
    id: "amine-hardener",
    name: "118",
    category: "epoxy",
    subcategory: "hardener",
    categoryName: "Epoxy",
    subcategoryName: "Hardener",
    shortDescription: "Modified cycloaliphatic polyamine Adduct",
    description:
      "A low-viscosity aliphatic amine hardener designed for room-temperature curing of bisphenol-A and bisphenol-F epoxy resins. Delivers outstanding hardness, chemical resistance, and adhesion on a variety of substrates.",
    image:
      "https://images.unsplash.com/photo-1614033096703-ff20a4b5c2c9?w=600&q=80",

  },
  {
    id: "polyamide-hardener",
    name: "332",
    category: "epoxy",
    subcategory: "hardener",
    categoryName: "Epoxy",
    subcategoryName: "Hardener",
    shortDescription: "Modified cycloaliphatic polyamine Adduct",
    description:
      "Derived from dimerized fatty acids and polyamines, this polyamide hardener imparts excellent toughness and flexibility to cured epoxy systems. Provides outstanding wet adhesion and is widely used in marine and industrial maintenance coatings.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  },
  {
    id: "cycloaliphatic-hardener",
    name: "324",
    category: "epoxy",
    subcategory: "hardener",
    categoryName: "Epoxy",
    subcategoryName: "Hardener",
    shortDescription: "Modified cycloaliphatic polyamine",
    description:
      "A premium cycloaliphatic amine hardener offering excellent UV stability, low yellowing, and high gloss retention. Essential for exterior coatings, decorative floors, and any application requiring long-term color stability.",
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&q=80",
  },

  // ─── EPOXY → ACCELERATORS ─────────────────────────────────────────────────────
  {
    id: "dmp30-accelerator",
    name: "DMP-30 Accelerator",
    category: "epoxy",
    subcategory: "accelerators",
    categoryName: "Epoxy",
    subcategoryName: "Accelerators",
    shortDescription:
      "2,4,6-tris(dimethylaminomethyl)phenol — the industry standard epoxy cure accelerator.",
    description:
      "DMP-30 (2,4,6-Tris(dimethylaminomethyl)phenol) is the benchmark tertiary amine accelerator for epoxy systems. Used at low addition levels (0.5–3%), it dramatically reduces gel time and accelerates full cure without adversely affecting final film properties.",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },
  {
    id: "benzyl-alcohol-accelerator",
    name: "Benzyl Alcohol Accelerator",
    category: "epoxy",
    subcategory: "accelerators",
    categoryName: "Epoxy",
    subcategoryName: "Accelerators",
    shortDescription:
      "Reactive diluent and accelerator that lowers viscosity while promoting low-temperature cure.",
    description:
      "Benzyl Alcohol serves as both a reactive plasticizer and a cure accelerator for epoxy/amine systems. Particularly effective at low temperatures, it reduces system viscosity and improves workability in cold-climate applications.",
    image:
      "https://images.unsplash.com/photo-1611698906418-b6b1de4ad6a1?w=600&q=80",
  },

  // ─── EPOXY → ADDITIVES ───────────────────────────────────────────────────────
  {
    id: "epoxy-defoamer",
    name: "Epoxy Defoamer Additive",
    category: "epoxy",
    subcategory: "additives",
    categoryName: "Epoxy",
    subcategoryName: "Additives",
    shortDescription:
      "Silicone-free defoamer specifically formulated to eliminate air bubbles in epoxy systems.",
    description:
      "A high-efficiency, silicone-free defoamer designed to prevent and eliminate foam and micro-bubbles in epoxy coating and casting systems. Ensures smooth, crater-free surfaces without impairing intercoat adhesion.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
  },
  {
    id: "thixotropic-agent",
    name: "Thixotropic Agent",
    category: "epoxy",
    subcategory: "additives",
    categoryName: "Epoxy",
    subcategoryName: "Additives",
    shortDescription:
      "Fumed silica-based rheology modifier preventing sagging on vertical surfaces.",
    description:
      "A treated hydrophobic fumed silica that provides excellent thixotropy in solvent-free epoxy systems. Prevents sagging and running on vertical and overhead surfaces while maintaining easy application at shear.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",
  },
  {
    id: "uv-stabilizer",
    name: "UV Stabilizer for Epoxy",
    category: "epoxy",
    subcategory: "additives",
    categoryName: "Epoxy",
    subcategoryName: "Additives",
    shortDescription:
      "HALS-based UV light stabilizer protecting epoxy coatings from photodegradation and yellowing.",
    description:
      "A hindered amine light stabilizer (HALS) blend that provides superior UV protection for outdoor and UV-exposed epoxy coating systems. Significantly extends gloss and color retention under intense sunlight.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
  },

  // ─── POWDER → CONSTRUCTION POWDERS ───────────────────────────────────────────
  {
    id: "tile-adhesive-powder",
    name: "Tile Adhesive Powder",
    category: "powder",
    subcategory: "coated",
    categoryName: "Powder",
    subcategoryName: "Coated",
    shortDescription:
      "Polymer-modified cementitious tile adhesive for ceramic, porcelain, and natural stone.",
    description:
      "A high-performance, ready-to-mix tile adhesive powder combining Portland cement, graded aggregates, and polymer additives. Provides excellent open time, non-slump performance, and superior bond strength for interior and exterior tiling.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },


  // ─── POWDER → INDUSTRIAL POWDERS ─────────────────────────────────────────────
  {
    id: "calcium-carbonate",
    name: "Precipitated Calcium Carbonate",
    category: "powder",
    subcategory: "uncoated",
    categoryName: "Powder",
    subcategoryName: "UnCoated",
    shortDescription:
      "Ultra-fine precipitated calcium carbonate as filler and extender for paints, plastics, and rubber.",
    description:
      "High-brightness precipitated calcium carbonate (PCC) with controlled particle size distribution. Acts as a functional filler, improving whiteness, opacity, and rheology in paints, paper coatings, sealants, and polymer composites.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  
];
