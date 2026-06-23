import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/navigation";
import artchemLogo from "../../assets/images/mainlogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../../data/companyInfo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/96 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.07)] border-b border-gray-100/80"
        }`}
      >
        <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer flex-shrink-0 leading-none flex items-center">
              <img
                src={artchemLogo}
                alt={companyInfo.name}
                className="h-[48px] md:h-[58px] w-auto object-contain block"
                style={{ imageRendering: "auto" }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {navigation.map((item) => {
              const isActive =
                location === item.route ||
                (item.route !== "/" && location.startsWith(item.route));
              return (
                <Link key={item.route} href={item.route}>
                  <span
                    className={`group relative inline-flex items-center px-4 h-[72px] text-[11px] font-bold tracking-[0.1em] uppercase transition-colors duration-200 cursor-pointer select-none
                      ${
                        isActive
                          ? "text-primary"
                          : isTransparent
                          ? "text-white/75 hover:text-white"
                          : "text-foreground/50 hover:text-foreground"
                      }`}
                  >
                    {item.label}

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveBar"
                        className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-primary rounded-t"
                        transition={{ type: "spring", stiffness: 350, damping: 32 }}
                      />
                    )}

                    {/* Hover indicator (only when not active) */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-primary/40 rounded-t scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-250" />
                    )}
                  </span>
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link href="/contact">
              <span className="group ml-5 inline-flex items-center gap-1.5 px-5 h-[34px] text-[10px] font-bold tracking-[0.14em] uppercase rounded-sm cursor-pointer select-none transition-all duration-250
                bg-primary text-white hover:shadow-[0_4px_20px_rgba(201,151,44,0.45)] hover:bg-primary/92
                border border-primary/80
              ">
                Get a Quote
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-muted"
            }`}
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
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm md:hidden"
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
                  src={artchemLogo}
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
                {navigation.map((item, i) => {
                  const isActive =
                    location === item.route ||
                    (item.route !== "/" && location.startsWith(item.route));
                  return (
                    <motion.div
                      key={item.route}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link href={item.route}>
                        <span
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider cursor-pointer transition-colors border-b border-gray-50
                            ${
                              isActive
                                ? "text-primary bg-primary/5 border-l-2 border-l-primary"
                                : "text-foreground/70 hover:bg-muted hover:text-primary"
                            }`}
                        >
                          {item.label}
                          <ChevronRight size={13} className="text-muted-foreground" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                <div className="space-y-0.5 mb-4">
                  <p className="text-xs text-muted-foreground">{companyInfo.phone}</p>
                  <p className="text-xs text-muted-foreground">{companyInfo.email}</p>
                </div>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/92 text-white font-bold tracking-wider text-[10px] uppercase rounded-sm h-10 cursor-pointer transition-colors">
                    Get a Quote <ArrowUpRight size={13} />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
