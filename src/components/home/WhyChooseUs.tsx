import { motion } from "framer-motion";
import { whyChooseUs } from "../../data/whyChooseUs";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import * as LucideIcons from "lucide-react";

// Bento grid layout config
const bentoConfig = [
  { colSpan: "md:col-span-2", large: true },   // w1 – wide
  { colSpan: "md:col-span-1", large: false },  // w2
  { colSpan: "md:col-span-1", large: false },  // w3
  { colSpan: "md:col-span-1", large: false },  // w4
  { colSpan: "md:col-span-1", large: false },  // w5
  { colSpan: "md:col-span-2", large: true },   // w6 – wide
];

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#F5F7FA] relative overflow-hidden">
      {/* Background mol-inspired dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E0 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Why Partner With Us
          </span>
          <h2 className="text-[36px] md:text-[46px] font-heading font-extrabold text-foreground tracking-tight leading-tight">
            The ArtChem<br />
            <span className="text-primary">Advantage</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = (LucideIcons as any)[item.icon];
            const cfg = bentoConfig[index] || { colSpan: "md:col-span-1", large: false };
            const isLarge = cfg.large;

            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-400 cursor-default ${cfg.colSpan}`}
              >
                {/* Inner padding varies by size */}
                <div className={`p-7 ${isLarge ? "flex gap-7 items-center" : ""}`}>
                  {/* Icon */}
                  <div className={`${isLarge ? "shrink-0 w-16 h-16" : "w-14 h-14 mb-5"} rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300`}>
                    {Icon && <Icon size={isLarge ? 30 : 26} />}
                  </div>

                  <div className={isLarge ? "flex-1" : ""}>
                    <h3 className={`font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug ${isLarge ? "text-[22px]" : "text-[18px]"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${isLarge ? "text-[15px]" : "text-sm"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 rounded-b-2xl" />

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/3 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
