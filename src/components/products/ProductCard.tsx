import { Link } from "wouter";
import { motion } from "framer-motion";
import { Product } from "../../types";
import { companyInfo } from "../../data/companyInfo";
import { openWhatsAppInquiry } from "../../utils/whatsapp";
import { Button } from "../ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-52 overflow-hidden cursor-pointer bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="text-[9px] font-bold uppercase tracking-wider bg-primary text-white px-2.5 py-1 rounded-sm shadow-sm">
              {product.subcategoryName}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-base font-heading font-bold text-foreground hover:text-primary transition-colors cursor-pointer mb-2 leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-muted-foreground mb-5 line-clamp-2 leading-relaxed flex-grow">
          {product.shortDescription}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <Button
            className="flex-1 h-9 text-[11px] font-bold tracking-wider bg-primary hover:bg-primary/90 text-white rounded-sm shadow-none border-0 uppercase"
            onClick={(e) => {
              e.preventDefault();
              openWhatsAppInquiry(product.name, companyInfo.whatsapp);
            }}
          >
            <MessageCircle size={14} className="mr-1.5 shrink-0" />
            Inquire
          </Button>

          <Button
            variant="outline"
            size="icon"
            asChild
            className="h-9 w-9 rounded-sm border-gray-200 hover:border-primary/50 hover:text-primary shrink-0"
          >
            <Link href={`/products/${product.id}`}>
              <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
