import { Link } from "wouter";
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
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square p-6 bg-white overflow-hidden cursor-pointer relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
          />
          <div className="absolute top-4 left-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-3 py-1 rounded">
              {product.categoryName}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow border-t border-border">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-heading font-bold text-foreground hover:text-primary transition-colors cursor-pointer mb-2 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-grow">
          {product.shortDescription}
        </p>
        
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
          <Button 
            variant="default" 
            className="flex-1 font-bold tracking-wide"
            onClick={() => openWhatsAppInquiry(product.name, companyInfo.whatsapp)}
          >
            <MessageCircle size={16} className="mr-2" />
            INQUIRE NOW
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={`/products/${product.id}`}>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
