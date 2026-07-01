import { Service } from "../types";

export const services: Service[] = [
  {
    id: "chemical-supply",
    title: "Chemical Supply",
    shortDescription: "Premium grade industrial chemicals and raw materials for large-scale manufacturing.",
    description: "We supply a comprehensive range of premium grade industrial chemicals, raw materials, and specialized compounds. Our global sourcing network ensures consistent quality and reliable delivery for manufacturing, processing, and industrial applications.",
    icon: "FlaskConical",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    features: ["ISO Certified Quality", "Global Sourcing Network", "Bulk Storage Capabilities", "Just-in-Time Delivery"]
  },
  {
    id: "contracting-services",
    title: "Contracting Services",
    shortDescription: "Expert execution of complex industrial and chemical engineering projects.",
    description: "Our contracting division delivers end-to-end industrial solutions, from facility design to full-scale chemical plant construction and retrofitting. We emphasize safety, compliance, and engineering excellence.",
    icon: "Building2",
    image: "./src/assets/images/contracting.png",
    features: ["Turnkey Project Execution", "Plant Retrofitting", "Safety & Compliance Engineering", "Maintenance Contracts"]
  },
  {
    id: "import-export",
    title: "Import & Export",
    shortDescription: "Seamless global trade and distribution of industrial commodities.",
    description: "Navigating international trade with precision. We manage the complex logistics, regulatory compliance, and cross-border distribution of chemical commodities to ensure uninterrupted supply chains.",
    icon: "Globe2",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
    features: ["Customs Clearance", "Regulatory Compliance", "Global Distribution Network", "Trade Finance Solutions"]
  },
  {
    id: "industrial-supplies",
    title: "Industrial Supplies",
    shortDescription: "Comprehensive hardware and operational supplies for continuous production.",
    description: "Providing essential hardware, safety equipment, and operational supplies required to keep industrial facilities running at peak efficiency.",
    icon: "Wrench",
    image: "./src/assets/images/Industrial.png",
    features: ["PPE & Safety Gear", "Industrial Hardware", "Maintenance Supplies", "Inventory Management"]
  },
  {
    id: "quality-testing",
    title: "Quality Testing",
    shortDescription: "Advanced analytical testing and certification for chemical products.",
    description: "State-of-the-art laboratory testing services to verify chemical composition, purity, and performance against international standards.",
    icon: "Microscope",
    image: "./src/assets/images/quality.png",
    features: ["Purity Analysis", "Performance Testing", "Certification Services", "Batch Verification"]
  },
  {
    id: "logistics-distribution",
    title: "Logistics & Distribution",
    shortDescription: "Secure, specialized transport for hazardous and non-hazardous materials.",
    description: "Specialized fleet and warehousing solutions designed specifically for the safe and efficient transport of hazardous and non-hazardous chemical goods.",
    icon: "Truck",
    image: "./src/assets/images/logistics.png",
    features: ["Hazmat Transport", "Temperature Controlled Storage", "Fleet Management", "Real-time Tracking"]
  }
];
