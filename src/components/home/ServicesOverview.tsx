import { motion } from "framer-motion";
import { services } from "../../data/services";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="py-28 bg-[#F5F7FA] relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E0 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Expertise
            </span>
            <h2 className="text-[36px] md:text-[46px] font-heading font-extrabold text-foreground tracking-tight leading-tight">
              Comprehensive<br />
              <span className="text-primary">Industrial Solutions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="shrink-0 pb-1"
          >
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-7 font-bold tracking-wider border-2 text-[11px] uppercase rounded-sm hover:bg-foreground hover:text-white hover:border-foreground transition-all"
              asChild
            >
              <Link href="/services">View All Services <ArrowRight className="ml-2" size={14} /></Link>
            </Button>
          </motion.div>
        </div>

        {/* Service cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = (LucideIcons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-400"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Icon chip */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center border border-primary/30 shadow-md">
                    {Icon && <Icon size={19} className="text-white" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[17px] font-heading font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <Link href={`/services/${service.id}`}>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent uppercase tracking-wider group-hover:text-primary transition-colors cursor-pointer">
                      Discover More
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </div>
                <div className="h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
