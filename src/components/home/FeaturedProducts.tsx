import { motion } from "framer-motion";
import { products } from "../../data/products";
import { SectionHeading } from "../common/SectionHeading";
import { ProductGrid } from "../products/ProductGrid";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Engineered Formulations" 
          subtitle="Featured Products"
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <ProductGrid products={featured} />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <Button size="lg" className="font-bold tracking-widest px-8 h-14" asChild>
            <Link href="/products">VIEW FULL CATALOG <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
