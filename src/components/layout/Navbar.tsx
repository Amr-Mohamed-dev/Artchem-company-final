import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { navigation } from "../../data/navigation";
import aramchemLogo from "../../assets/images/mainlogo.png";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../../data/companyInfo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const isTransparent = isHome && !isScrolled;

  const navBg = isTransparent
    ? "bg-transparent"
    : "bg-white shadow-[0_1px_12px_rgba(0,0,0,0.07)]";

  return (
    <>
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${navBg}`}>
        <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo — clean transparent PNG, no borders, no background */}
          <Link href="/">
            <div className="cursor-pointer flex-shrink-0 leading-none">
              <img
                src={aramchemLogo}
                alt={companyInfo.name}
                className="h-[60px] md:h-[100px] w-auto object-contain block"
                style={{ imageRendering: "auto" }}
              />
            </div>
          </Link>

          {/* Desktop nav — vertically centered, same baseline as logo */}
          <nav className="hidden md:flex items-center gap-0">
            {navigation.map((item) => {
              const isActive = location === item.route;
              return (
                <Link key={item.route} href={item.route}>
                  <span
                    className={`relative inline-flex items-center px-4 h-[72px] text-[11.5px] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 cursor-pointer
                      ${isActive
                        ? "text-primary"
                        : isTransparent
                          ? "text-white/80 hover:text-white"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary transition-all duration-250 origin-left
                        ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`}
                    />
                  </span>
                </Link>
              );
            })}
            <Button
              asChild
              size="sm"
              className="ml-5 px-6 h-9 text-[11px] font-bold tracking-[0.1em] uppercase rounded-none bg-primary text-white hover:bg-primary/90 transition-colors duration-200 shadow-none"
            >
              <Link href="/contact">GET A QUOTE</Link>
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded transition-colors ${isTransparent ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"}`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-[78%] max-w-[320px] bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <img
                  src={aramchemLogo}
                  alt={companyInfo.name}
                  className="h-[36px] w-auto object-contain block"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-2">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.route}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link href={item.route}>
                      <span
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-6 py-3.5 text-[11.5px] font-semibold uppercase tracking-wider cursor-pointer transition-colors border-b border-gray-50
                          ${location === item.route ? "text-primary bg-primary/5" : "text-foreground/70 hover:bg-muted hover:text-primary"}`}
                      >
                        {item.label}
                        <ChevronRight size={14} className="text-muted-foreground" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                <div className="space-y-1 mb-4">
                  <p className="text-xs text-muted-foreground">{companyInfo.phone}</p>
                  <p className="text-xs text-muted-foreground">{companyInfo.email}</p>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-wider text-xs uppercase rounded-none h-10 shadow-none"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    GET A QUOTE
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
