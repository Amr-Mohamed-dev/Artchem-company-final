import { motion } from "framer-motion";
import { services } from "../../data/services";
import { SectionHeading } from "../common/SectionHeading";
import { ServiceCard } from "../services/ServiceCard";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { Button } from "../ui/button";
import { Link } from "wouter";

export function ServicesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Comprehensive Industrial Solutions" 
          subtitle="Our Expertise"
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="font-bold tracking-widest border-2" asChild>
            <Link href="/services">VIEW ALL SERVICES</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
