import { motion } from "framer-motion";
import { pageTransition, staggerContainer, fadeInUp } from "../utils/animations";
import { companyInfo } from "../data/companyInfo";
import { timeline } from "../data/timeline";
import { SectionHeading } from "../components/common/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    { title: "Precision", desc: "Exacting standards in every formulation and logistical maneuver." },
    { title: "Authority", desc: "Industry-leading expertise guiding major contracting and supply decisions." },
    { title: "Integrity", desc: "Transparent, reliable, and compliant operations globally." }
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20"
    >
      {/* Page Header */}
      <section className="bg-sidebar py-24 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">About {companyInfo.name}</h1>
            <p className="text-xl text-gray-300">Commanding Authority in Global Chemical Supply and Contracting.</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Company Facility" className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeading title="Our Legacy" align="left" />
              <motion.div variants={fadeInUp} className="prose max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Established with a vision to streamline complex industrial supply chains, ARTCHEM has grown into a formidable presence in the global market. We specialize in providing uncompromising quality in chemical supply, rigorous precision in contracting, and seamless execution in import/export logistics.
                </p>
                <p className="text-lg leading-relaxed">
                  Our operations are driven by a commitment to safety, compliance, and environmental stewardship. By partnering with leading manufacturers and employing top-tier engineering talent, we deliver solutions that form the backbone of modern industry.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MVV Cards */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-sm border border-border border-t-4 border-t-accent hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Corporate Evolution" subtitle="Our Journey" />
          
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-1/2">
            {timeline.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-10 ml-8 relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <span className="text-accent font-bold tracking-wider mb-1 block">{event.year}</span>
                <h4 className="text-xl font-heading font-bold text-foreground mb-2">{event.title}</h4>
                <p className="text-muted-foreground">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
