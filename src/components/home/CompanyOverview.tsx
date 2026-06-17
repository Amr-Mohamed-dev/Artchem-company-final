import { motion } from "framer-motion";
import { companyInfo } from "../../data/companyInfo";
import { SectionHeading } from "../common/SectionHeading";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CompanyOverview() {
  const points = [
    "Uncompromising adherence to international quality standards",
    "Robust global supply chain infrastructure",
    "Expert technical support and consultation",
    "Sustainable and responsible chemical sourcing"
  ];

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-left mb-8">
              <motion.span variants={fadeInUp} className="block text-sm font-bold tracking-wider uppercase mb-3 text-accent">
                Who We Are
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                The Standard of Excellence in Industrial Trading
              </motion.h2>
              <motion.div variants={fadeInUp} className="mt-6 h-1 w-20 bg-primary" />
            </div>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {companyInfo.description} We bridge the gap between complex industrial requirements and precise chemical solutions, ensuring your operations never miss a beat.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 mb-10">
              {points.map((point, index) => (
                <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" className="font-bold tracking-wider">
                <Link href="/about">READ OUR STORY <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] bg-muted rounded-lg overflow-hidden relative z-10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80" 
                alt="Corporate Overview" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 -right-12 w-24 h-24 border-4 border-accent/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
