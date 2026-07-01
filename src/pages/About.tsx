import { motion } from "framer-motion";
import { pageTransition, staggerContainer, fadeInUp, fadeInLeft } from "../utils/animations";
import { companyInfo } from "../data/companyInfo";
import { timeline } from "../data/timeline";
import { Target, Eye, HeartHandshake, Award, Shield, Globe, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";

const mission = {
  icon: <Target size={26} />,
  label: "Our Mission",
  title: "Delivering Chemistry That Moves Industry",
  text: "To supply world-class epoxy systems, industrial powders, and construction chemicals — with uncompromising quality, expert technical support, and reliable logistics — enabling our clients to build, protect, and perform at the highest level.",
};

const vision = {
  icon: <Eye size={26} />,
  label: "Our Vision",
  title: "A Global Standard in Industrial Chemistry",
  text: "To be the leading chemical supply partner in the MENA region and beyond, recognized for product excellence, deep technical expertise, and the trusted supply networks that power industry forward.",
};

const values = [
  { icon: <Award size={20} />, title: "Quality First", desc: "Every product meets or exceeds international standards. We never compromise on the specifications that keep your operations running." },
  { icon: <Shield size={20} />, title: "Integrity", desc: "Transparent pricing, honest communication, and steadfast execution — our word is our contract." },
  { icon: <Globe size={20} />, title: "Global Reach", desc: "Partnerships across Europe, Asia, and the Middle East give us the sourcing depth to fulfill any requirement." },
  { icon: <Users size={20} />, title: "Partnership", desc: "We invest in long-term client relationships — your success is the metric by which we measure ours." },
  { icon: <HeartHandshake size={20} />, title: "Technical Expertise", desc: "Our team of chemical specialists provides hands-on guidance from product selection to on-site application." },
  { icon: <Target size={20} />, title: "Reliability", desc: "Consistent delivery timelines, responsive support, and predictable quality — every time, without exception." },
];

const HEX = `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='70'><polygon points='40,2 76,22 76,48 40,68 4,48 4,22' fill='none' stroke='%230D2D49' stroke-width='1.5'/></svg>`;

export default function About() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-[72px]"
    >
      {/* ─── Split Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[52vh]">

          {/* Left — text */}
          <div className="relative flex items-center py-16 lg:py-20">
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(HEX)}")`,
                backgroundSize: "80px 70px"
              }}
            />
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/40 to-transparent" />

            <div className="container mx-auto px-6 lg:pr-0 relative z-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-lg"
              >
                <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                  <Link href="/"><span className="hover:text-primary cursor-pointer transition-colors">Home</span></Link>
                  <span className="text-muted-foreground/40">/</span>
                  <span className="text-primary">About</span>
                </motion.nav>

                <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  About ArtChem
                </motion.span>

                <motion.h1 variants={fadeInUp} className="text-[40px] md:text-[56px] font-heading font-extrabold text-foreground leading-tight tracking-tight mb-5">
                  Built on Chemistry.<br />
                  <span className="text-primary">Driven by Purpose.</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-[16px] text-muted-foreground leading-relaxed mb-8 max-w-md">
                  Egypt's trusted partner for high-performance epoxy systems, powder products, and construction chemicals — supplying the quality that industry demands.
                </motion.p>

                {/* Quick stats */}
                <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-6 border-t border-gray-100">
                  {[
                    { value: "15+", label: "Years" },
                    { value: "500+", label: "Products" },
                    { value: "100+", label: "Clients" },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="text-[28px] font-heading font-extrabold text-primary leading-none">{s.value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right — industrial lab image */}
          <div className="hidden lg:block relative">
            <img
              src="./src/assets/images/aboutCover.png"
              alt="ArtChem Laboratory"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-10 right-10 bg-white rounded-2xl shadow-xl p-5 border border-gray-100"
            >
              <div className="text-[36px] font-heading font-extrabold text-primary leading-none">15+</div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Story Section ───────────────────────────────────── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_24px_56px_rgba(13,45,73,0.13)] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=900&q=80"
                  alt="ArtChem Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-5 w-28 h-28 rounded-full border border-primary/15 -z-10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Our Legacy
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-[32px] md:text-[40px] font-heading font-extrabold text-foreground mb-5 tracking-tight leading-tight">
                A Decade of Industrial<br />
                <span className="text-primary">Chemistry Excellence</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                Established in Cairo with a vision to streamline complex industrial supply chains, ArtChem has grown into a formidable presence in the Egyptian and regional chemical market.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[15px] text-muted-foreground leading-relaxed mb-7">
                We specialize in providing uncompromising quality in epoxy systems, construction chemicals, and industrial powder products — backed by direct manufacturer partnerships and expert technical support.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button asChild size="lg" className="h-11 px-7 font-bold tracking-wider rounded-sm text-[11px] uppercase shadow-none border-0">
                  <Link href="/products">Browse Products <ArrowRight className="ml-1.5" size={14} /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(HEX)}")`,
            backgroundSize: "80px 70px"
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              What Drives Us
            </span>
            <h2 className="text-[34px] md:text-[44px] font-heading font-extrabold text-foreground tracking-tight">Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[mission, vision].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-400 overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-2">{card.label}</div>
                <h3 className="text-[19px] font-heading font-bold text-foreground mb-4 leading-snug">{card.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values Grid ──────────────────────────────────────── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Foundation
            </span>
            <h2 className="text-[34px] md:text-[44px] font-heading font-extrabold text-foreground tracking-tight">Company Values</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-[16px] font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Journey
            </span>
            <h2 className="text-[34px] md:text-[44px] font-heading font-extrabold text-foreground tracking-tight">Corporate Evolution</h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group"
                >
                  {/* Desktop node */}
                  <div className="hidden md:flex w-14 h-14 rounded-full bg-white border-2 border-primary/25 group-hover:border-primary group-hover:bg-primary transition-all duration-300 items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
                    <span className="text-[10px] font-heading font-black text-primary group-hover:text-white transition-colors duration-300 leading-none text-center">{event.year}</span>
                  </div>

                  {/* Mobile: year badge */}
                  <div className="md:hidden flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-black text-white leading-none">{event.year}</span>
                    </div>
                    <div className="h-px flex-1 bg-primary/20" />
                  </div>

                  <div className="md:text-center">
                    <h4 className="text-[14px] font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{event.title}</h4>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
