import { motion } from "framer-motion";
import { whyChooseUs } from "../../data/whyChooseUs";
import { SectionHeading } from "../common/SectionHeading";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import * as LucideIcons from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8F9FA] relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="The ARTCHEM Advantage" 
          subtitle="Why Partner With Us"
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = (LucideIcons as any)[item.icon];
            return (
              <motion.div 
                key={item.id}
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  {Icon && <Icon size={32} className="text-primary group-hover:text-white transition-colors duration-300" />}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
