import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aramchemLogo from "../../assets/images/mainlogo.webp";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "#0D2D49" }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={aramchemLogo}
              alt="ARTCHEM"
              style={{ width: "220px", height: "auto", display: "block" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
