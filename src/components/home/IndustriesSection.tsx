import { motion } from "framer-motion";
import { industries } from "../../data/industries";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import * as LucideIcons from "lucide-react";

export function IndustriesSection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Global Applications
          </span>
          <h2 className="text-[36px] md:text-[46px] font-heading font-extrabold text-foreground tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From construction sites to manufacturing floors — our products and solutions perform across the most demanding industrial environments worldwide.
          </p>
        </motion.div>

        {/* Industry cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {industries.map((industry) => {
            const Icon = (LucideIcons as any)[industry.icon];
            return (
              <motion.div
                key={industry.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-default"
              >
                {/* Background image */}
                {industry.image ? (
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-sidebar" />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071928]/88 via-[#071928]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Gold top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

                {/* Content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30 shrink-0 group-hover:bg-primary transition-all duration-300">
                      {Icon && <Icon size={20} className="text-white" />}
                    </div>
                    <h3 className="text-[18px] font-heading font-bold text-white leading-tight">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
