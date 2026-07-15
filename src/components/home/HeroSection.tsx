import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, MessageSquare, FlaskConical, Package, ShieldCheck, Globe2 } from "lucide-react";
import heroCover from '../../assets/images/heroCover.webp';

const HEX_PATTERN = `
  <svg xmlns='http://www.w3.org/2000/svg' width='120' height='104'>
    <polygon points='60,2 116,32 116,72 60,102 4,72 4,32'
      fill='none' stroke='rgba(201,151,44,0.18)' stroke-width='1'/>
  </svg>
`;
const HEX_BG = `url("data:image/svg+xml,${encodeURIComponent(HEX_PATTERN)}")`;

const stats = [
  { value: "15+", label: "Years Experience", icon: <ShieldCheck size={18} /> },
  { value: "500+", label: "Products", icon: <Package size={18} /> },
  { value: "100+", label: "Clients Served", icon: <Globe2 size={18} /> },
  { value: "50+", label: "Projects Done", icon: <FlaskConical size={18} /> },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden">

      {/* Parallax bg image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
        <img
          src={heroCover}
          alt="Industrial Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071928]/95 via-[#0D2D49]/80 to-[#0D2D49]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071928]/70 via-transparent to-transparent" />
      </motion.div>

      {/* Hexagon tile pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{ backgroundImage: HEX_BG, backgroundSize: "120px 104px" }}
      />

      {/* Diagonal gold accent line */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[18%] w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      {/* Main content */}
      <motion.div style={{ y: textY }} className="container mx-auto px-6 relative z-10 pt-[72px] flex-1 flex items-center">
        <div className="max-w-[780px]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2.5 py-1.5 px-4 border border-primary/50 bg-primary/10 backdrop-blur-sm text-primary font-bold tracking-[0.22em] text-[10px] uppercase mb-8 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Epoxy Systems · Industrial Chemicals · Powder Products
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[44px] md:text-[64px] lg:text-[76px] font-heading font-extrabold text-white leading-[1.04] mb-6 tracking-tight"
          >
            Chemistry That{" "}
            <span className="relative inline-block">
              <span className="text-primary">Powers</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
            <br className="hidden sm:block" />{" "}
            Industry.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[17px] md:text-[19px] text-white/65 mb-10 max-w-[560px] leading-relaxed font-light"
          >
            ArtChem delivers world-class epoxy systems, powder products, and industrial chemicals — backed by a global supply network and expert technical support.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              className="h-[52px] px-9 font-bold tracking-[0.12em] uppercase text-[12px] rounded-sm bg-primary text-white hover:bg-primary/90 shadow-[0_0_32px_rgba(201,151,44,0.28)] border-0 transition-all duration-300 hover:shadow-[0_0_48px_rgba(201,151,44,0.38)]"
              asChild
            >
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-[52px] px-9 font-bold tracking-[0.12em] uppercase text-[12px] rounded-sm bg-transparent text-white border-white/35 hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <MessageSquare className="mr-2" size={16} /> Get a Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated stat cards — bottom strip */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-6 pb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white/8 backdrop-blur-md border border-white/12 rounded-xl px-5 py-4 flex items-center gap-4 hover:bg-white/12 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                  {stat.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-[22px] font-heading font-extrabold text-white leading-none">{stat.value}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5 font-semibold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-24 md:bottom-8 right-8 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] text-white/30 uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <div className="w-px h-10 bg-white/15 overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gradient-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
