import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import { SectionHeading } from "../common/SectionHeading";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-5 pointer-events-none text-[20rem] font-heading font-black leading-none text-center whitespace-nowrap">
        TRUST
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Executive Endorsements" 
          subtitle="Client Trust"
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div 
              key={t.id}
              variants={fadeInUp}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary relative"
            >
              <Quote className="absolute top-6 right-6 text-muted/30 rotate-180" size={48} />
              
              <div className="mb-6 relative z-10">
                <p className="text-muted-foreground italic leading-relaxed text-sm">
                  "{t.content}"
                </p>
              </div>
              
              <div className="mt-auto">
                <h4 className="font-bold text-foreground font-heading">{t.name}</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-accent mt-1">
                  {t.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
