import { motion } from "framer-motion";
import { pageTransition, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";
import { companyInfo } from "../data/companyInfo";
import { timeline } from "../data/timeline";
import { Target, Eye, HeartHandshake, Award, Shield, Globe, Users } from "lucide-react";

const mission = {
  icon: <Target size={28} />,
  label: "Our Mission",
  title: "Delivering Chemistry That Moves Industry",
  text: "To supply world-class epoxy systems, industrial powders, and construction chemicals — with uncompromising quality, expert technical support, and reliable logistics — enabling our clients to build, protect, and perform at the highest level.",
};

const vision = {
  icon: <Eye size={28} />,
  label: "Our Vision",
  title: "A Global Standard in Industrial Chemistry",
  text: "To be the leading chemical supply partner in the MENA region and beyond, recognized for product excellence, deep technical expertise, and the trusted supply networks that power industry forward.",
};

const values = [
  { icon: <Award size={22} />, title: "Quality First", desc: "Every product meets or exceeds international standards. We never compromise on the specifications that keep your operations running." },
  { icon: <Shield size={22} />, title: "Integrity", desc: "Transparent pricing, honest communication, and steadfast execution — our word is our contract." },
  { icon: <Globe size={22} />, title: "Global Reach", desc: "Partnerships across Europe, Asia, and the Middle East give us the sourcing depth to fulfill any requirement." },
  { icon: <Users size={22} />, title: "Partnership", desc: "We invest in long-term client relationships — your success is the metric by which we measure ours." },
  { icon: <HeartHandshake size={22} />, title: "Technical Expertise", desc: "Our team of chemical specialists provides hands-on guidance from product selection to on-site application." },
  { icon: <Target size={22} />, title: "Reliability", desc: "Consistent delivery timelines, responsive support, and predictable quality — every time, without exception." },
];

const HEX_PATTERN = `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='70'><polygon points='40,2 76,22 76,48 40,68 4,48 4,22' fill='none' stroke='%230D2D49' stroke-width='1.5'/></svg>`;

export default function About() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20"
    >
      {/* ─── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(HEX_PATTERN)}")`,
            backgroundSize: "80px 70px"
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              About ArtChem
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-[48px] md:text-[68px] font-heading font-extrabold text-foreground leading-tight tracking-tight mb-5">
              Built on Chemistry.<br />
              <span className="text-primary">Driven by Purpose.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[18px] text-muted-foreground leading-relaxed max-w-xl">
              ArtChem is Egypt's trusted partner for high-performance epoxy systems, industrial powders, and construction chemicals — supplying quality that industry demands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Story Section ───────────────────────────────────────── */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(13,45,73,0.14)] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80"
                  alt="ArtChem Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[180px]">
                <div className="text-4xl font-heading font-extrabold text-primary leading-none">15+</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border border-primary/15 -z-10" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Our Legacy
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-[34px] md:text-[42px] font-heading font-extrabold text-foreground mb-6 tracking-tight leading-tight">
                A Decade of Industrial<br />
                <span className="text-primary">Chemistry Excellence</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[16px] text-muted-foreground leading-relaxed mb-5">
                Established in Cairo with a vision to streamline complex industrial supply chains, ArtChem has grown into a formidable presence in the Egyptian and regional chemical market.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[16px] text-muted-foreground leading-relaxed">
                We specialize in providing uncompromising quality in epoxy systems, construction chemicals, and industrial powder products — backed by direct manufacturer partnerships and expert technical support. From import logistics to on-site contracting, we deliver end-to-end industrial solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ────────────────────────────────────── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(HEX_PATTERN)}")`,
            backgroundSize: "80px 70px"
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              What Drives Us
            </span>
            <h2 className="text-[36px] md:text-[46px] font-heading font-extrabold text-foreground tracking-tight">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[mission, vision].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-400 overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-2">{card.label}</div>
                <h3 className="text-[20px] font-heading font-bold text-foreground mb-4 leading-snug">{card.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values Grid ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Foundation
            </span>
            <h2 className="text-[36px] md:text-[46px] font-heading font-extrabold text-foreground tracking-tight">
              Company Values
            </h2>
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
                <h3 className="text-[17px] font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ────────────────────────────────────────────── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Journey
            </span>
            <h2 className="text-[36px] md:text-[46px] font-heading font-extrabold text-foreground tracking-tight">
              Corporate Evolution
            </h2>
          </motion.div>

          {/* Horizontal timeline on desktop / vertical on mobile */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group"
                >
                  {/* Node */}
                  <div className="hidden md:flex w-14 h-14 rounded-full bg-white border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary transition-all duration-300 items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
                    <span className="text-[11px] font-heading font-black text-primary group-hover:text-white transition-colors duration-300">{event.year}</span>
                  </div>

                  {/* Mobile: year badge left-aligned */}
                  <div className="md:hidden flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-black text-white">{event.year}</span>
                    </div>
                    <div className="h-px flex-1 bg-primary/20" />
                  </div>

                  <div className="md:text-center">
                    <h4 className="text-[15px] font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{event.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{event.description}</p>
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
