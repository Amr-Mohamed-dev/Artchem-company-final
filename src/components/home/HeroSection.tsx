import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[680px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80"
          alt="Industrial Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
        {/* Gold diagonal accent */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, #C9972C 0px, #C9972C 1px, transparent 1px, transparent 56px)"
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
            <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-primary/60 bg-primary/10 text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-8 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Industrial Chemicals · Epoxy Systems · Powder Products
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-heading font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
          >
            Precision{" "}
            <span className="text-primary relative">
              Chemistry
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              />
            </span>
            <br className="hidden md:block" />
            {" "}for a Better World.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light"
          >
            ArtChem delivers world-class epoxy systems, powder products, and industrial chemicals — backed by global supply chains and expert technical support.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="h-14 px-10 font-bold tracking-[0.12em] uppercase text-sm rounded-sm bg-primary text-white hover:bg-primary/90 shadow-[0_0_28px_rgba(201,151,44,0.3)] border-0 transition-all duration-300"
              asChild
            >
              <Link href="/products" data-testid="button-hero-products">
                Explore Products
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 font-bold tracking-[0.12em] uppercase text-sm rounded-sm bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white transition-all duration-300"
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
              { value: "50+", label: "Countries Served" },
              { value: "500+", label: "Products Supplied" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div>
                  <div className="text-2xl font-heading font-extrabold text-primary leading-none">{stat.value}</div>
                  <div className="text-[10px] text-white/55 uppercase tracking-widest mt-0.5">{stat.label}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-white/15" />}
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
        <div className="w-px h-12 bg-white/20 overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gradient-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
