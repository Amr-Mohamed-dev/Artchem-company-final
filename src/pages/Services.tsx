import { motion } from "framer-motion";
import { services } from "../data/services";
import { ServiceCard } from "../components/services/ServiceCard";
import { pageTransition, staggerContainer, fadeInUp } from "../utils/animations";
import { ArrowRight, Wrench, Truck, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";

const heroStats = [
  { value: "6+", label: "Service Lines" },
  { value: "100%", label: "Quality Assured" },
  { value: "15+", label: "Years Experience" },
];

export default function Services() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-[72px]"
    >
      {/* ─── Split Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-stretch overflow-hidden bg-white">
        {/* Left — text panel */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:pr-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-lg"
            >
              <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                <Link href="/"><span className="hover:text-primary cursor-pointer transition-colors">Home</span></Link>
                <span className="text-muted-foreground/40">/</span>
                <span className="text-primary">Services</span>
              </motion.nav>

              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                What We Offer
              </motion.span>

              <motion.h1 variants={fadeInUp} className="text-[40px] md:text-[52px] font-heading font-extrabold text-foreground leading-tight tracking-tight mb-5">
                Industrial Solutions<br />
                <span className="text-primary">Built for Scale</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                From chemical supply and epoxy systems to full industrial contracting — ArtChem delivers end-to-end solutions engineered for demanding environments.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-11 px-7 font-bold tracking-wider rounded-sm text-[11px] uppercase shadow-none border-0">
                  <Link href="/contact">Request a Quote <ArrowRight className="ml-1.5" size={14} /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11 px-7 font-bold tracking-wider rounded-sm text-[11px] uppercase border-2 hover:bg-foreground hover:text-white hover:border-foreground transition-all">
                  <Link href="/products">View Products</Link>
                </Button>
              </motion.div>

              {/* Stats strip */}
              <motion.div variants={fadeInUp} className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-100">
                {heroStats.map((s, i) => (
                  <div key={i}>
                    <div className="text-[26px] font-heading font-extrabold text-primary leading-none">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right — image panel */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
          <img
            src="./src/assets/images/servicesCover.png"
            alt="Industrial Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Floating capability chips */}
          <div className="absolute bottom-8 left-8 flex flex-col gap-3">
            {[
              { icon: <Wrench size={14} />, label: "Industrial Contracting" },
              { icon: <Truck size={14} />, label: "Import & Export Logistics" },
              { icon: <ShieldCheck size={14} />, label: "Quality-Certified Products" },
            ].map((chip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="flex items-center gap-2.5 bg-white/92 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-sm border border-white/60 text-[12px] font-semibold text-foreground"
              >
                <span className="text-primary">{chip.icon}</span>
                {chip.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ──────────────────────────────────────── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Integrated Capabilities
            </span>
            <h2 className="text-[32px] md:text-[40px] font-heading font-extrabold text-foreground tracking-tight">
              All Service Lines
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
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
