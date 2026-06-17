import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { companyInfo } from "../../data/companyInfo";
import { ArrowRight, PhoneCall } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#ffffff" strokeWidth="1"/>
              <polygon points="24.8,0 37.3,7.2 37.3,21.7 24.8,28.9 12.3,21.7 12.3,7.2" fill="none" stroke="#ffffff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Secure Your Industrial Supply Chain Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Partner with {companyInfo.name} for uncompromising quality, precise delivery, and global contracting expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="secondary" className="font-bold tracking-widest px-8 h-14 w-full sm:w-auto" asChild>
              <Link href="/contact">REQUEST A QUOTE <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
            <Button size="lg" variant="outline" className="font-bold tracking-widest px-8 h-14 w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <PhoneCall className="mr-2" size={18} /> {companyInfo.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
