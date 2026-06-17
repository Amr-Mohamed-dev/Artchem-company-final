import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { companyInfo } from "../../data/companyInfo";

export function FloatingWhatsApp() {
  const openWhatsApp = () => {
    const clean = companyInfo.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${clean}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center" data-testid="button-floating-whatsapp">
      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2"
        style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.45)" }}
      >
        {/* Outer pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "#25D366" }}
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
        {/* Inner pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "#25D366" }}
          animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        />
        <SiWhatsapp size={26} className="relative z-10 text-white" />
      </motion.button>
    </div>
  );
}
