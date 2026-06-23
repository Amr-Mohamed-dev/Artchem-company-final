import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { productCategories } from "../data/categories";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { products } from "../data/products";

export default function ProductCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = productCategories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Category Not Found</h1>
        <Link href="/products">
          <span className="text-primary font-bold cursor-pointer hover:underline">← Back to Products</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-[72px] min-h-screen bg-white"
    >
      {/* Header */}
      <section className="bg-[#F5F7FA] border-b border-gray-200 py-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6 uppercase tracking-widest font-semibold">
            <Link href="/products">
              <span className="hover:text-primary transition-colors cursor-pointer">Products</span>
            </Link>
            <ChevronRight size={12} />
            <span className="text-primary">{category.name}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {category.name}
            </span>
            <h1 className="text-4xl md:text-[52px] font-heading font-extrabold text-foreground mb-4 tracking-tight">
              {category.name} Products
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategory Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 max-w-3xl mx-auto"
          >
            {category.subcategories.map((sub) => {
              const count = products.filter(
                (p) => p.category === categoryId && p.subcategory === sub.id
              ).length;

              return (
                <motion.div key={sub.id} variants={fadeInUp}>
                  <Link href={`/products/category/${categoryId}/${sub.id}`}>
                    <div className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-primary/50 bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={sub.image}
                          alt={sub.name}
                          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                        <div className="absolute bottom-3 left-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                            {count} Products
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {sub.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {sub.description}
                        </p>
                        <div className="flex items-center gap-1.5 text-primary text-sm font-bold group-hover:gap-3 transition-all duration-300">
                          View Products <ArrowRight size={15} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-14"
          >
            <Link href="/products">
              <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm font-semibold uppercase tracking-wider">
                <ArrowLeft size={14} /> Back to All Categories
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
