import { Link } from "wouter";
import { Service } from "../../types";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = (LucideIcons as any)[service.icon];

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>
      
      <div className="absolute top-4 right-4 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        {Icon && <Icon size={24} />}
      </div>

      <div className="p-6 relative bg-card h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors md:hidden">
             {Icon && <Icon size={20} />}
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
            {service.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
          {service.shortDescription}
        </p>

        <Link href={`/services/${service.id}`}>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider group-hover:text-primary transition-colors cursor-pointer">
            Discover More
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
}
