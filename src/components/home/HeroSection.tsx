import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { companyInfo } from "../../data/companyInfo";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[680px] flex items-center justify-center overflow-hidden">

      {/* Background Image — slow ken-burns zoom out */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80"
          alt="Industrial Facility"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        {/* Subtle diagonal accent stripe */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, #C9972C 0px, #C9972C 1px, transparent 1px, transparent 60px)"
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-[72px]">
        <div className="max-w-4xl">

          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-accent/60 bg-accent/10 text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-8 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Global Chemical &amp; Industrial Trading
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-heading font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
          >
            Commanding{" "}
            <span className="text-accent relative">
              Precision
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-accent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              />
            </span>
            <br className="hidden md:block" />
            {" "}in Global Industry.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light"
          >
            {companyInfo.tagline} — Engineering supply chain continuity through world-class chemical sourcing, industrial contracting, and global distribution.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="h-14 px-10 font-bold tracking-[0.12em] uppercase text-sm rounded-none bg-accent text-white hover:bg-accent/90 shadow-[0_0_30px_rgba(201,151,44,0.35)] border border-accent transition-all duration-300"
              asChild
            >
              <Link href="/contact" data-testid="button-hero-quote">
                Get a Quote
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 font-bold tracking-[0.12em] uppercase text-sm rounded-none bg-transparent text-white border-white/60 hover:bg-white/10 hover:border-white transition-all duration-300"
              asChild
            >
              <Link href="/contact" data-testid="button-hero-contact">
                <MessageSquare className="mr-2" size={18} />
                Contact Us
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex items-center gap-8 flex-wrap"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Countries" },
              { value: "1000+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div>
                  <div className="text-2xl font-heading font-extrabold text-accent leading-none">{stat.value}</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-widest mt-0.5">{stat.label}</div>
                </div>
                <div className="w-px h-8 bg-white/20 last:hidden" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-14 bg-white/20 overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gradient-to-b from-accent to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
