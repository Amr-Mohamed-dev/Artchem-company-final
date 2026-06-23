import { motion } from "framer-motion";
import { Link } from "wouter";
import { productCategories } from "../data/categories";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { ArrowRight, FlaskConical, Package } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  epoxy: <FlaskConical size={32} className="text-primary" />,
  powder: <Package size={32} className="text-primary" />,
};

export default function Products() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-[72px] min-h-screen bg-white"
    >
      {/* Page Header — light background */}
      <section className="bg-[#F5F7FA] border-b border-gray-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Product Catalog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-foreground mb-5 tracking-tight">
              Our Product Lines
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of industrial epoxy systems and high-performance powder products — engineered to perform in the world's most demanding environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {productCategories.map((cat) => (
              <motion.div key={cat.id} variants={fadeInUp}>
                <Link href={`/products/category/${cat.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-primary/40 bg-white shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer h-full">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            {categoryIcons[cat.id]}
                          </div>
                          <h2 className="text-2xl font-heading font-extrabold text-white tracking-tight">{cat.name}</h2>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                        {cat.description}
                      </p>

                      {/* Subcategory chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {cat.subcategories.map((sub) => (
                          <span
                            key={sub.id}
                            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 bg-muted rounded-full text-muted-foreground"
                          >
                            {sub.name}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm font-bold text-foreground">
                          {cat.subcategories.length} Subcategories
                        </span>
                        <span className="flex items-center gap-1.5 text-primary text-sm font-bold group-hover:gap-3 transition-all duration-300">
                          Explore <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#F5F7FA] border-t border-gray-200 py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              { value: "100%", label: "Quality Tested" },
              { value: "Global", label: "Supply Chain" },
              { value: "15+", label: "Years Experience" },
              { value: "Fast", label: "WhatsApp Inquiry" },
            ].map((item, i) => (
              <div key={i} className="text-center flex-1">
                <div className="text-3xl font-heading font-extrabold text-primary mb-1">{item.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
