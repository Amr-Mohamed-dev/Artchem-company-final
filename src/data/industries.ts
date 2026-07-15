import { Industry } from "../types";
import Constructionchemicals from "../assets/images/contracting2.webp";
import Industrialcoatings from "../assets/images/Industrial.webp";
import epoxysystemImg from "../assets/images/epoxysyytem.webp";
import industryImg from '../assets/images/industry.webp';
import waterproofingImg from '../assets/images/water.webp';
import powderImg from '../assets/images/powderproducts.webp';


export const industries: Industry[] = [
  {
    id: "epoxy-systems",
    name: "Epoxy Systems",
    description: "High-performance epoxy resins, hardeners, and additives for industrial flooring, corrosion protection, and structural adhesives.",
    icon: "FlaskConical",
    image: epoxysystemImg  },
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
    image: waterproofingImg
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
    image: powderImg
  },
  {
    id: "contracting",
    name: "Industrial Contracting",
    description: "Turnkey industrial contracting services spanning surface preparation, epoxy flooring installation, and protective coating application.",
    icon: "Wrench",
    image: industryImg,
  }
];
