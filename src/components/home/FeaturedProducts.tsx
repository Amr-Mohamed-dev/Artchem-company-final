import { motion } from "framer-motion";
import { Link } from "wouter";
import { products } from "../../data/products";
import { productCategories } from "../../data/categories";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { Button } from "../ui/button";
import { ArrowRight, FlaskConical, Package } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  epoxy: <FlaskConical size={22} />,
  powder: <Package size={22} />,
};

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Product Lines
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-extrabold text-foreground tracking-tight mb-4">
            Engineered Formulations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Two core product families — Epoxy Systems and Powder Products — covering every industrial application.
          </p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14"
        >
          {productCategories.map((cat) => (
            <motion.div key={cat.id} variants={fadeInUp}>
              <Link href={`/products/category/${cat.id}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-primary/40 bg-[#F5F7FA] hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-6 p-7">

                    {/* Icon */}
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {categoryIcons[cat.id]}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                        {cat.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.subcategories.map((sub) => (
                          <span key={sub.id} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-gray-200 rounded-full text-muted-foreground">
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      size={20}
                      className="shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>

                  {/* Bottom accent */}
                  <div className="h-[3px] w-0 group-hover:w-full bg-primary transition-all duration-400 rounded-b-2xl" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Product count strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#F5F7FA] rounded-xl border border-gray-200 mb-8"
        >
          <div className="flex gap-8">
            {productCategories.map((cat) => {
              const count = products.filter((p) => p.category === cat.id).length;
              return (
                <div key={cat.id} className="text-center">
                  <div className="text-2xl font-heading font-extrabold text-primary">{count}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{cat.name} Products</div>
                </div>
              );
            })}
            <div className="text-center">
              <div className="text-2xl font-heading font-extrabold text-primary">{products.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Total Products</div>
            </div>
          </div>

          <Button
            size="lg"
            className="font-bold tracking-widest px-8 h-12 rounded-sm bg-primary hover:bg-primary/90 text-white shadow-none border-0 text-xs uppercase"
            asChild
          >
            <Link href="/products">
              View Full Catalog <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
