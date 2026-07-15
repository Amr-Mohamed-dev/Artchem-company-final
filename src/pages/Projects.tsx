import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/projects/ProjectCard";
import { pageTransition, staggerContainer, fadeInUp } from "../utils/animations";
import { Link } from "wouter";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import projectsCover from "../assets/images/projectsCover.webp";

const projectStats = [
  { value: "50+", label: "Completed Projects" },
  { value: "8", label: "Countries" },
  { value: "100%", label: "On-time Delivery" },
];

const HEX = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='87'><polygon points='50,2 97,26 97,61 50,85 3,61 3,26' fill='none' stroke='rgba(201,151,44,0.15)' stroke-width='1'/></svg>`;

export default function Projects() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-[72px]"
    >
      {/* ─── Glassmorphism Hero ──────────────────────────────── */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        {/* Full-width bg image */}
        <img
          src={projectsCover}
          alt="Projects Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071928]/92 via-[#071928]/55 to-[#071928]/30" />

        {/* Hex tile */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(HEX)}")`,
            backgroundSize: "100px 87px"
          }}
        />

        {/* Gold top accent */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full pb-14 pt-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

              {/* Left: text */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-xl"
              >
                <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-5">
                  <Link href="/"><span className="hover:text-white/80 cursor-pointer transition-colors">Home</span></Link>
                  <span>/</span>
                  <span className="text-white/70">Projects</span>
                </motion.nav>

                <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/50 bg-primary/15 backdrop-blur-sm text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Proven Capability
                </motion.span>

                <motion.h1 variants={fadeInUp} className="text-[40px] md:text-[58px] font-heading font-extrabold text-white leading-tight tracking-tight mb-4">
                  Projects That<br />
                  <span className="text-primary">Define Excellence</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-[16px] text-white/60 leading-relaxed max-w-md">
                  Demonstrating precise execution and global reach across major industrial, construction, and chemical supply projects.
                </motion.p>
              </motion.div>

              {/* Right: glass stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4"
              >
                {projectStats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-6 py-5 text-center min-w-[100px]"
                  >
                    <div className="text-[30px] font-heading font-extrabold text-primary leading-none">{s.value}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What We Deliver strip ──────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">We deliver:</span>
            {[
              { icon: <MapPin size={13} />, text: "On-site Application" },
              { icon: <Calendar size={13} />, text: "On-time Execution" },
              { icon: <CheckCircle2 size={13} />, text: "ISO-Quality Standards" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[12px] font-semibold text-foreground/70">
                <span className="text-primary">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects Grid ───────────────────────────────────── */}
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
              Our Track Record
            </span>
            <h2 className="text-[32px] md:text-[40px] font-heading font-extrabold text-foreground tracking-tight">
              All Projects
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
