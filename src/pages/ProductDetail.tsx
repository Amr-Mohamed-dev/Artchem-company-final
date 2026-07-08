import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "wouter";
import { products } from "../data/products";
import { companyInfo } from "../data/companyInfo";
import { openWhatsAppInquiry } from "../utils/whatsapp";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { Button } from "../components/ui/button";
import { ArrowLeft, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
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

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.subcategory === product.subcategory && p.id !== product.id)
    .slice(0, 4);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-[72px] bg-white min-h-screen"
    >
      {/* Breadcrumb header */}
      <div className="bg-[#F5F7FA] border-b border-gray-200 py-5">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-semibold flex-wrap">
            <Link href="/products">
              <span className="hover:text-primary transition-colors cursor-pointer">Products</span>
            </Link>
            <ChevronRight size={11} />
            <Link href={`/products/category/${product.category}`}>
              <span className="hover:text-primary transition-colors cursor-pointer">{product.categoryName}</span>
            </Link>
            <ChevronRight size={11} />
            {/* <Link href={`/products/category/${product.category}/${product.subcategory}`}>
              <span className="hover:text-primary transition-colors cursor-pointer">{product.subcategoryName}</span>
            </Link>
            <ChevronRight size={11} />
            <span className="text-foreground/60 font-normal normal-case tracking-normal truncate max-w-[200px]">{product.name}</span> */}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="aspect-square rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            
          </motion.div>

          {/* Info */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-primary px-3 py-1.5 rounded-sm">
                {product.categoryName}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-sm">
                {product.subcategoryName}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-[44px] font-heading font-extrabold text-foreground mb-4 leading-tight tracking-tight"
            >
              {product.name}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </motion.p>

            {/* Features */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#F5F7FA] rounded-xl p-6 mb-8 border border-gray-200"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Product Features</h3>
             
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 font-bold tracking-widest h-13 rounded-sm text-sm uppercase bg-primary hover:bg-primary/90 text-white shadow-none border-0"
                onClick={() => openWhatsAppInquiry(product.name, companyInfo.whatsapp)}
              >
                <MessageCircle size={18} className="mr-2" />
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Specs + Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Technical Specifications
            </h3>
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Primary Applications
            </h3>
           
          </motion.div>
        </div>

        {/* WhatsApp Inquiry CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F5F7FA] border border-gray-200 rounded-2xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Interested in {product.name}?
            </h3>
            <p className="text-muted-foreground">
              Contact us on WhatsApp and our team will respond with full details, pricing, and availability.
            </p>
          </div>
          <Button
            size="lg"
            className="shrink-0 h-13 px-8 font-bold tracking-widest text-sm uppercase bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-sm shadow-none border-0 whitespace-nowrap"
            onClick={() => openWhatsAppInquiry(product.name, companyInfo.whatsapp)}
          >
            <MessageCircle size={18} className="mr-2" />
            WhatsApp Inquiry
          </Button>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
