import { motion } from "framer-motion";
import { Link } from "wouter";
import { productCategories } from "../data/categories";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { ArrowRight, FlaskConical, Package, ShieldCheck, Globe, Truck } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  epoxy: <FlaskConical size={28} className="text-primary" />,
  powder: <Package size={28} className="text-primary" />,
};

const trustPoints = [
  { icon: <ShieldCheck size={16} />, text: "100% Quality Tested" },
  { icon: <Globe size={16} />, text: "Global Supply Chain" },
  { icon: <Truck size={16} />, text: "Fast Logistics" },
  { icon: <FlaskConical size={16} />, text: "15+ Years Expertise" },
];

export default function Products() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-[72px] min-h-screen bg-white"
    >
      {/* ─── Split Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[46vh] items-center gap-10 py-14">

            {/* Left — headline + trust points */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                <Link href="/"><span className="hover:text-primary cursor-pointer transition-colors">Home</span></Link>
                <span className="text-muted-foreground/40">/</span>
                <span className="text-primary">Products</span>
              </motion.nav>

              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Product Catalog
              </motion.span>

              <motion.h1 variants={fadeInUp} className="text-[40px] md:text-[54px] font-heading font-extrabold text-foreground leading-tight tracking-tight mb-5">
                Premium Chemical<br />
                <span className="text-primary">Product Lines</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-[16px] text-muted-foreground leading-relaxed mb-8 max-w-md">
                High-performance epoxy systems and industrial powder products — engineered to perform in the world's most demanding environments.
              </motion.p>

              {/* Trust grid */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 max-w-sm">
                {trustPoints.map((tp, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200">
                    <span className="text-primary shrink-0">{tp.icon}</span>
                    <span className="text-[12px] font-semibold text-foreground/70 leading-tight">{tp.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — stacked category cards (mini preview) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col gap-4"
            >
              {productCategories.map((cat, i) => (
                <Link key={cat.id} href={`/products/category/${cat.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-primary/40 bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-5 p-4">
                    <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="shrink-0">{categoryIcons[cat.id]}</span>
                        <h3 className="text-[16px] font-heading font-bold text-foreground group-hover:text-primary transition-colors truncate">{cat.name}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{cat.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {cat.subcategories.slice(0, 3).map(sub => (
                          <span key={sub.id} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-muted rounded-full text-muted-foreground">{sub.name}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary shrink-0 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Category Cards (full browse) ───────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Browse by Category
            </span>
            <h2 className="text-[30px] md:text-[38px] font-heading font-extrabold text-foreground tracking-tight">
              Choose Your Product Line
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl"
          >
            {productCategories.map((cat) => (
              <motion.div key={cat.id} variants={fadeInUp}>
                <Link href={`/products/category/${cat.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-primary/40 bg-white shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer h-full">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            {categoryIcons[cat.id]}
                          </div>
                          <h2 className="text-[22px] font-heading font-extrabold text-white tracking-tight">{cat.name}</h2>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{cat.description}</p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cat.subcategories.map((sub) => (
                          <span key={sub.id} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-muted rounded-full text-muted-foreground">
                            {sub.name}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm font-bold text-foreground">{cat.subcategories.length} Subcategories</span>
                        <span className="flex items-center gap-1.5 text-primary text-sm font-bold group-hover:gap-3 transition-all duration-300">
                          Explore <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
