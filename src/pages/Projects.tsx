import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/projects/ProjectCard";
import { pageTransition, staggerContainer, fadeInUp } from "../utils/animations";
import { SectionHeading } from "../components/common/SectionHeading";

export default function Projects() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20 min-h-screen bg-background"
    >
      <section className="bg-sidebar py-24 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Featured Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Demonstrating precise execution and global reach across massive industrial undertakings.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Track Record" 
            subtitle="Proven Capability"
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
