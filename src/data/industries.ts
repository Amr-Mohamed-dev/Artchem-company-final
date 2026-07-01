import { Industry } from "../types";
import Epoxysystems from "../assets/images/Epoxysystems.png";
import Constructionchemicals from "../assets/images/contracting2.png";
import Waterproofing from "../assets/images/Waterproofing.png";
import Industrialcoatings from "../assets/images/Industrial.png";
import Powderproducts from "../assets/images/Powderproducts.png";
import Industrialcontracting from "../assets/images/Industrialcontracting.png";

export const industries: Industry[] = [
  {
    id: "epoxy-systems",
    name: "Epoxy Systems",
    description: "High-performance epoxy resins, hardeners, and additives for industrial flooring, corrosion protection, and structural adhesives.",
    icon: "FlaskConical",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    id: "construction",
    name: "Construction Chemicals",
    description: "Tile adhesives, grouts, waterproofing compounds, and repair mortars engineered for demanding construction environments.",
    icon: "HardHat",
    image: Constructionchemicals
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    description: "Crystalline and membrane waterproofing systems protecting basements, tanks, rooftops, and below-grade structures from water ingress.",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
  },
  {
    id: "industrial-coatings",
    name: "Industrial Coatings",
    description: "Protective coatings for steel structures, pipelines, marine infrastructure, and industrial facilities requiring chemical and abrasion resistance.",
    icon: "PaintRoller",
    image: Industrialcoatings
  },
  {
    id: "powder-products",
    name: "Powder Products",
    description: "Ultra-fine mineral fillers — calcium carbonate, talc, and silica — serving paints, plastics, rubber, and composite manufacturing.",
    icon: "Package",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80"
  },
  {
    id: "contracting",
    name: "Industrial Contracting",
    description: "Turnkey industrial contracting services spanning surface preparation, epoxy flooring installation, and protective coating application.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
  }
];
