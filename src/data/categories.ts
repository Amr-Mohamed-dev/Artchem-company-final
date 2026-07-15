import { ProductCategory } from "../types";
import epoxyImg from "../assets/images/epoxy.webp";
import powderImg from '../assets/images/powder.webp';
import resinImg from "../assets/images/resin.webp";
import hardenerImg from "../assets/images/hardener.webp";
import acceleratorsImg from "../assets/images/Accelerators.webp";
import additivesImg from "../assets/images/Additives.webp";
import coatedImg from '../assets/images/coated.webp';
import uncoatedImg from '../assets/images/uncoated.webp';

export const productCategories: ProductCategory[] = [
  {
    id: "epoxy",
    name: "Epoxy Systems",
    description:
      "Complete epoxy solutions — resins, hardeners, accelerators, and performance additives — engineered for industrial coatings, flooring, and structural applications.",
    image: epoxyImg,
    subcategories: [
      {
        id: "resin",
        name: "Resin",
        description:
          "Bisphenol-A and bisphenol-F liquid epoxy resins for coatings, adhesives, and composites.",
        image: resinImg,
        categoryId: "epoxy",
      },
      {
        id: "hardener",
        name: "Hardener",
        description:
          "Amine, polyamide, and cycloaliphatic hardeners delivering outstanding mechanical and chemical resistance.",
        image: hardenerImg,
        categoryId: "epoxy",
      },
      {
        id: "solvents",
        name: "Solvents",
        description:
          "Tertiary amine and reactive accelerators to shorten cure time and enable low-temperature curing.",
        image: acceleratorsImg,
        categoryId: "epoxy",
      },
      {
        id: "additives",
        name: "Additives",
        description:
          "Defoamers, thixotropic agents, UV stabilizers, and flow modifiers for superior coating performance.",
        image: additivesImg,
        categoryId: "epoxy",
      },
    ],
  },
  {
    id: "powder",
    name: "Powder Products",
    description:
      "High-performance construction and industrial powders — from polymer-modified tile adhesives to ultra-fine mineral fillers — supporting demanding chemical and construction projects.",
    image: powderImg,
    subcategories: [
      {
        id: "coated",
        name: "Coated",
        description:
          "Polymer-modified cementitious adhesives, waterproofing compounds, and grout systems for construction.",
        image:
          coatedImg,
        categoryId: "coated",
      },
      {
        id: "uncoated",
        name: "UnCoated",
        description:
          "High-purity mineral fillers including calcium carbonate, talc, and silica for paints, plastics, and rubber.",
        image:
          uncoatedImg,
        categoryId: "uncoated",
      },
    ],
  },
];
