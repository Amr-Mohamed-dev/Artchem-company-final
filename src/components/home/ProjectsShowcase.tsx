import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { SectionHeading } from "../common/SectionHeading";
import { ProjectCard } from "../projects/ProjectCard";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function ProjectsShowcase() {
  const featured = projects.slice(0, 2);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            title="Global Execution" 
            subtitle="Featured Projects"
            align="left"
          />
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="pb-4"
          >
            <Button variant="outline" asChild>
              <Link href="/projects">VIEW ALL PROJECTS <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
