import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { services } from "../data/services";
import { pageTransition, fadeInUp, staggerContainer } from "../utils/animations";
import { Button } from "../components/ui/button";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">The service you're looking for does not exist.</p>
        <Button asChild>
          <Link href="/services">RETURN TO SERVICES</Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20"
    >
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services">
            <span className="inline-flex items-center text-accent hover:text-white transition-colors mb-6 cursor-pointer text-sm font-bold tracking-wider uppercase">
              <ArrowLeft size={16} className="mr-2" /> Back to Services
            </span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Service Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  {service.description}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 bg-muted p-4 rounded border border-border">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-sidebar p-8 rounded-lg shadow-xl text-sidebar-foreground border-t-4 border-primary sticky top-32">
                <h3 className="text-xl font-heading font-bold text-white mb-4">Need This Service?</h3>
                <p className="text-sidebar-accent-foreground mb-6">
                  Our industrial experts are ready to discuss how we can integrate this service into your operations.
                </p>
                <Button size="lg" className="w-full font-bold tracking-widest mb-4" asChild>
                  <Link href="/contact">CONTACT US NOW</Link>
                </Button>
                <div className="w-full h-px bg-sidebar-border my-6" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Other Services</h4>
                <ul className="space-y-3">
                  {services.filter(s => s.id !== service.id).map(s => (
                    <li key={s.id}>
                      <Link href={`/services/${s.id}`}>
                        <span className="text-sidebar-accent-foreground hover:text-white transition-colors flex items-center text-sm cursor-pointer group">
                          <ArrowRight size={14} className="mr-2 text-primary group-hover:text-accent" />
                          {s.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
