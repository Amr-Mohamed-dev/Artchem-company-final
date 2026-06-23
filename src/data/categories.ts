import { ProductCategory } from "../types";

export const productCategories: ProductCategory[] = [
  {
    id: "epoxy",
    name: "Epoxy Systems",
    description: "Complete epoxy solutions — resins, hardeners, accelerators, and performance additives — engineered for industrial coatings, flooring, and structural applications.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    subcategories: [
      {
        id: "resin",
        name: "Resin",
        description: "Bisphenol-A and bisphenol-F liquid epoxy resins for coatings, adhesives, and composites.",
        image: "https://images.unsplash.com/photo-1614033096703-ff20a4b5c2c9?w=600&q=80",
        categoryId: "epoxy",
      },
      {
        id: "hardener",
        name: "Hardener",
        description: "Amine, polyamide, and cycloaliphatic hardeners delivering outstanding mechanical and chemical resistance.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
        categoryId: "epoxy",
      },
      {
        id: "accelerators",
        name: "Accelerators",
        description: "Tertiary amine and reactive accelerators to shorten cure time and enable low-temperature curing.",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
        categoryId: "epoxy",
      },
      {
        id: "additives",
        name: "Additives",
        description: "Defoamers, thixotropic agents, UV stabilizers, and flow modifiers for superior coating performance.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
        categoryId: "epoxy",
      },
    ],
  },
  {
    id: "powder",
    name: "Powder Products",
    description: "High-performance construction and industrial powders — from polymer-modified tile adhesives to ultra-fine mineral fillers — supporting demanding chemical and construction projects.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    subcategories: [
      {
        id: "construction-powders",
        name: "Construction Powders",
        description: "Polymer-modified cementitious adhesives, waterproofing compounds, and grout systems for construction.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
        categoryId: "powder",
      },
      {
        id: "industrial-powders",
        name: "Industrial Powders",
        description: "High-purity mineral fillers including calcium carbonate, talc, and silica for paints, plastics, and rubber.",
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80",
        categoryId: "powder",
      },
    ],
  },
];
