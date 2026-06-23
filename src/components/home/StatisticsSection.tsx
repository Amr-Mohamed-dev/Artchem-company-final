import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { statistics } from "../../data/statistics";

function AnimatedNumber({ value, suffix = "", duration = 2.2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start: number;
    let raf: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(value * ease));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatisticsSection() {
  return (
    <section className="py-20 bg-sidebar relative overflow-hidden">
      {/* Hex tile background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='100' height='87'><polygon points='50,2 97,26 97,61 50,85 3,61 3,26' fill='none' stroke='%23ffffff' stroke-width='1'/></svg>`)}")`,
          backgroundSize: "100px 87px"
        }}
      />
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-sidebar/80 backdrop-blur-sm px-8 py-10 text-center hover:bg-white/5 transition-colors duration-300 group"
            >
              <div className="text-[44px] md:text-[54px] font-heading font-extrabold text-primary leading-none mb-2 tabular-nums">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[11px] text-white/50 font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
