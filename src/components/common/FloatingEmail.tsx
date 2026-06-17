import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { companyInfo } from "../../data/companyInfo";

export function FloatingEmail() {
  return (
    <motion.a
      href={`mailto:${companyInfo.email}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
      style={{
        background: "hsl(var(--primary))",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
      }}
      aria-label="Email Us"
      data-testid="button-floating-email"
    >
      <Mail size={20} className="text-white" />
    </motion.a>
  );
}
