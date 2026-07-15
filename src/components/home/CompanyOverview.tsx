import { motion } from "framer-motion";
import { companyInfo } from "../../data/companyInfo";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../../utils/animations";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Award, Users, Globe } from "lucide-react";
import industrychem from "../../assets/images/industrychem.webp";

const highlights = [
  "Uncompromising adherence to international quality standards",
  "Robust global supply chain infrastructure",
  "Expert technical support across all product lines",
  "Sustainable and responsible chemical sourcing",
];

const badges = [
  { icon: <Award size={18} />, label: "ISO Certified Quality" },
  { icon: <Globe size={18} />, label: "15+ Countries" },
  { icon: <Users size={18} />, label: "100+ Active Clients" },
];

export function CompanyOverview() {
  return (
    <section className="py-28 bg-white overflow-hidden relative">
      {/* Subtle hex watermark */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='80' height='70'><polygon points='40,2 76,22 76,48 40,68 4,48 4,22' fill='none' stroke='%230D2D49' stroke-width='1.5'/></svg>`)}")`,
          backgroundSize: "80px 70px"
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Image with floating accent */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(13,45,73,0.18)] aspect-[4/3]">
              <img
                src={industrychem}
                alt="ArtChem Chemical Laboratory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sidebar/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-5 border border-gray-100 max-w-[200px]"
            >
              <div className="text-4xl font-heading font-extrabold text-primary leading-none">15+</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">Years of Excellence</div>
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-1.5 rounded-full bg-primary" style={{ opacity: 1 - i * 0.15 }} />
                ))}
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full border-[1.5px] border-primary/15 -z-10" />
            <div className="absolute -top-14 -left-14 w-56 h-56 rounded-full border border-primary/8 -z-10" />
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Who We Are
            </motion.span>

            <motion.h2 variants={fadeInUp} className="text-[36px] md:text-[44px] font-heading font-extrabold text-foreground leading-tight mb-6 tracking-tight">
              The Standard of Excellence<br />
              <span className="text-primary">in Industrial Chemistry</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-[16px] text-muted-foreground mb-6 leading-relaxed">
              {companyInfo.description} We bridge the gap between complex industrial requirements and precise chemical solutions — ensuring your operations run at peak efficiency.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3.5 mb-8">
              {highlights.map((point, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={17} />
                  <span className="text-[15px] text-foreground/80 font-medium leading-snug">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Trust badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#F5F7FA] rounded-lg border border-gray-200 text-xs font-semibold text-foreground/70">
                  <span className="text-primary">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="h-12 px-8 font-bold tracking-wider rounded-sm bg-foreground text-white hover:bg-foreground/90 shadow-none border-0 text-[12px] uppercase"
              >
                <Link href="/about">
                  Read Our Story <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
