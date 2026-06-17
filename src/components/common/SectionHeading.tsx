import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({ title, subtitle, align = "center", light = false }: SectionHeadingProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      className={`mb-12 ${align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left"} max-w-3xl`}
    >
      {subtitle && (
        <span className={`block text-sm font-bold tracking-wider uppercase mb-3 ${light ? "text-accent" : "text-primary"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`mt-6 h-1 w-20 ${light ? "bg-accent" : "bg-primary"} ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`} />
    </motion.div>
  );
}
