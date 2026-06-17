import { motion } from "framer-motion";
import { industries } from "../../data/industries";
import { SectionHeading } from "../common/SectionHeading";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import * as LucideIcons from "lucide-react";

export function IndustriesSection() {
  return (
    <section className="py-24 bg-sidebar border-y-4 border-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Industries We Serve" 
          subtitle="Global Applications"
          light={true}
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => {
            const Icon = (LucideIcons as any)[industry.icon];
            return (
              <motion.div 
                key={industry.id}
                variants={fadeInUp}
                className="group p-8 border border-white/10 rounded bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center group-hover:bg-primary transition-colors">
                    {Icon && <Icon size={24} className="text-white" />}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {industry.name}
                  </h3>
                </div>
                <p className="text-sidebar-accent-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
