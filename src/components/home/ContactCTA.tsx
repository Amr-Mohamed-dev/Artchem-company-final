import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { companyInfo } from "../../data/companyInfo";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";

const HEX_PATTERN = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='87'><polygon points='50,2 97,26 97,61 50,85 3,61 3,26' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='1'/></svg>`;

export function ContactCTA() {
  return (
    <section className="py-28 bg-sidebar relative overflow-hidden">
      {/* Hexagon tile */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(HEX_PATTERN)}")`,
          backgroundSize: "100px 87px"
        }}
      />

      {/* Gold gradient accent */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/40 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Start a Conversation
              </span>
              <h2 className="text-[38px] md:text-[52px] font-heading font-extrabold text-white leading-tight tracking-tight mb-6">
                Ready to Power<br />Your Operations?
              </h2>
              <p className="text-white/55 text-[16px] leading-relaxed mb-8">
                Partner with {companyInfo.name} for uncompromising quality, precise delivery, and global chemical supply expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="h-[52px] px-9 font-bold tracking-[0.12em] uppercase text-[12px] rounded-sm bg-primary text-white hover:bg-primary/90 shadow-[0_0_32px_rgba(201,151,44,0.25)] border-0 transition-all duration-300 hover:shadow-[0_0_48px_rgba(201,151,44,0.38)]"
                  asChild
                >
                  <Link href="/contact">Request a Quote <ArrowRight className="ml-2" size={15} /></Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-[52px] px-9 font-bold tracking-[0.12em] uppercase text-[12px] rounded-sm bg-transparent text-white border-white/25 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  asChild
                >
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <a
                href={`tel:${companyInfo.phone}`}
                className="group flex items-center gap-5 bg-white/6 hover:bg-white/10 border border-white/10 hover:border-primary/40 rounded-xl p-5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <PhoneCall size={22} />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Call Us</div>
                  <div className="text-white font-bold text-[16px] group-hover:text-primary transition-colors">{companyInfo.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="group flex items-center gap-5 bg-white/6 hover:bg-white/10 border border-white/10 hover:border-primary/40 rounded-xl p-5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Email Us</div>
                  <div className="text-white font-bold text-[16px] group-hover:text-primary transition-colors">{companyInfo.email}</div>
                </div>
              </a>

              <div className="bg-primary/8 border border-primary/20 rounded-xl p-5">
                <div className="text-[10px] text-primary uppercase tracking-widest font-bold mb-2">Operating Hours</div>
                <div className="text-white/70 text-sm leading-relaxed">Sunday – Thursday: 9:00 AM – 5:00 PM<br />Friday – Saturday: Closed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
