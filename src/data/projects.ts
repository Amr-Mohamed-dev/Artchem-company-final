import { Project } from "../types";
import Industrialconstruction from "../assets/images/Industrialconstruction.png";
import Pipelinecorrosion from "../assets/images/Pipelinecorrosion.png";
import Waterfacility from "../assets/images/Water-facility.png";
import Mininglogistics from "../assets/images/mining-logistics.png";
import Pharmaceuticalimport from "../assets/images/pharmaceutical-import.png";
export const projects: Project[] = [
  {
    id: "mega-plant-supply",
    title: "Industrial Chemical Supply - Mega Plant Project",
    industry: "Manufacturing",
    description: "Secured a 5-year contract to supply bulk chemical reagents and solvents for a massive new manufacturing facility, establishing a fully managed just-in-time inventory system.",
    image: Industrialconstruction 
  },
  {
    id: "pipeline-protection",
    title: "Trans-Continental Pipeline Corrosion Protection",
    industry: "Oil & Gas",
    description: "Supplied advanced corrosion inhibitors and protective coatings for a 1,200km pipeline, ensuring decades of structural integrity in harsh environmental conditions.",
    image: Pipelinecorrosion 
  },
  {
    id: "water-facility",
    title: "Municipal Water Treatment Overhaul",
    industry: "Public Infrastructure",
    description: "Provided comprehensive water treatment chemical solutions and logistics for a major city's newly upgraded effluent treatment facility.",
    image: Waterfacility 
  },
  {
    id: "mining-logistics",
    title: "Remote Mining Logistics Operation",
    industry: "Mining",
    description: "Engineered a specialized hazardous materials supply chain to safely deliver extraction chemicals to a remote mining site deep inland.",
    image: Mininglogistics 
  },
  {
    id: "pharmaceutical-import",
    title: "Pharmaceutical Raw Material Import Program",
    industry: "Pharmaceuticals",
    description: "Established a compliant and audited import corridor for pharmaceutical-grade raw materials across 12 countries, reducing procurement lead times by 40%.",
    image: Pharmaceuticalimport 
  }
];
