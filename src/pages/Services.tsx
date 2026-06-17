import { motion } from "framer-motion";
import { services } from "../data/services";
import { ServiceCard } from "../components/services/ServiceCard";
import { pageTransition, staggerContainer, fadeInUp } from "../utils/animations";
import { SectionHeading } from "../components/common/SectionHeading";

export default function Services() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20"
    >
      <section className="bg-sidebar py-24 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">Comprehensive industrial solutions engineered for global scale and precision.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Integrated Capabilities" 
            subtitle="What We Offer"
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
