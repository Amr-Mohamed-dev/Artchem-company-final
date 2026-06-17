import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "wouter";
import { products } from "../data/products";
import { companyInfo } from "../data/companyInfo";
import { openWhatsAppInquiry } from "../utils/whatsapp";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { Button } from "../components/ui/button";
import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import { ProductCard } from "../components/products/ProductCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Product Not Found</h1>
        <Button asChild>
          <Link href="/products">RETURN TO CATALOG</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20 bg-background min-h-screen"
    >
      <div className="container mx-auto px-4 py-12">
        <Link href="/products">
          <span className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer text-sm font-bold tracking-wider uppercase">
            <ArrowLeft size={16} className="mr-2" /> Back to Catalog
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="aspect-square rounded-xl bg-white border border-border p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={product.gallery[activeImage] || product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </AnimatePresence>
            </div>
            {product.gallery.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-24 h-24 rounded bg-white border-2 p-2 shrink-0 transition-all ${activeImage === idx ? "border-primary" : "border-border hover:border-primary/50"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded">
                {product.categoryName}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              {product.name}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-muted rounded-lg p-6 mb-8 border border-border">
              <h3 className="text-lg font-heading font-bold mb-4">Product Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="flex-1 font-bold tracking-widest h-14"
                onClick={() => openWhatsAppInquiry(product.name, companyInfo.whatsapp)}
              >
                <MessageCircle size={20} className="mr-2" />
                REQUEST A QUOTE
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Details Tabs equivalent / Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6 pb-2 border-b-2 border-primary inline-block">Technical Specifications</h3>
            <div className="bg-white rounded border border-border overflow-hidden">
              <table className="w-full text-sm text-left">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? "bg-muted/50" : "bg-white"}>
                      <th className="px-6 py-4 font-bold text-foreground border-b border-border/50 w-1/3">{key}</th>
                      <td className="px-6 py-4 text-muted-foreground border-b border-border/50">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6 pb-2 border-b-2 border-primary inline-block">Primary Applications</h3>
            <ul className="space-y-4">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-center gap-3 p-4 bg-muted rounded border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-medium text-foreground">{app}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
