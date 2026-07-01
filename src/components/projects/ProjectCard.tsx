import { Project } from "../../types";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full  transition-transform duration-700 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>
      
      {/* <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block transform opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.industry}
        </span>
        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-6 line-clamp-2 transform opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
          {project.description}
        </p>
        
        <div className="w-12 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
      </div> */}
    </div>
  );
}
