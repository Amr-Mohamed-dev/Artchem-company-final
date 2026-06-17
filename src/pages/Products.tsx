import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { ProductGrid } from "../components/products/ProductGrid";
import { pageTransition, fadeInUp } from "../utils/animations";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.categoryId));
    return ["all", ...Array.from(cats)];
  }, []);

  const getCategoryName = (id: string) => {
    if (id === "all") return "All Products";
    return products.find(p => p.categoryId === id)?.categoryName || id;
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "all" || product.categoryId === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20 min-h-screen bg-background"
    >
      <section className="bg-sidebar py-20 border-b-4 border-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Product Catalog</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Premium grade industrial chemicals, reagents, and specialized compounds.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {getCategoryName(cat)}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-border"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProductGrid products={filteredProducts} />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
