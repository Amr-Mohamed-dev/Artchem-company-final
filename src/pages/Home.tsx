import { motion } from "framer-motion";
import { HeroSection } from "../components/home/HeroSection";
import { CompanyOverview } from "../components/home/CompanyOverview";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { ServicesOverview } from "../components/home/ServicesOverview";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { IndustriesSection } from "../components/home/IndustriesSection";
import { StatisticsSection } from "../components/home/StatisticsSection";
import { ProjectsShowcase } from "../components/home/ProjectsShowcase";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { ContactCTA } from "../components/home/ContactCTA";
import { pageTransition } from "../utils/animations";

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <CompanyOverview />
      <WhyChooseUs />
      <ServicesOverview />
      <FeaturedProducts />
      <IndustriesSection />
      <StatisticsSection />
      <ProjectsShowcase />
      <TestimonialsSection />
      <ContactCTA />
    </motion.div>
  );
}
