import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { productCategories } from "../data/categories";
import { products } from "../data/products";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "../components/products/ProductCard";

export default function ProductSubcategory() {
  const { categoryId, subcategoryId } = useParams<{ categoryId: string; subcategoryId: string }>();
  const category = productCategories.find((c) => c.id === categoryId);
  const subcategory = category?.subcategories.find((s) => s.id === subcategoryId);

  const filtered = products.filter(
    (p) => p.category === categoryId && p.subcategory === subcategoryId
  );

  if (!category || !subcategory) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Subcategory Not Found</h1>
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
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6 uppercase tracking-widest font-semibold flex-wrap">
            <Link href="/products">
              <span className="hover:text-primary transition-colors cursor-pointer">Products</span>
            </Link>
            <ChevronRight size={12} />
            <Link href={`/products/category/${categoryId}`}>
              <span className="hover:text-primary transition-colors cursor-pointer">{category.name}</span>
            </Link>
            <ChevronRight size={12} />
            <span className="text-primary">{subcategory.name}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {category.name} / {subcategory.name}
            </span>
            <h1 className="text-4xl md:text-[52px] font-heading font-extrabold text-foreground mb-4 tracking-tight">
              {subcategory.name}
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              {subcategory.description}
            </p>
            <p className="mt-3 text-sm font-semibold text-muted-foreground">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-gray-200 rounded-xl bg-muted/30">
              <p className="text-muted-foreground font-medium">No products in this subcategory yet. Check back soon.</p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8 border-t border-gray-100">
            <Link href={`/products/category/${categoryId}`}>
              <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm font-semibold uppercase tracking-wider">
                <ArrowLeft size={14} /> Back to {category.name}
              </span>
            </Link>
            <Link href="/products">
              <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm font-semibold uppercase tracking-wider">
                All Categories
              </span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
