import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncatedDescription =
    project.description.length > 100
      ? project.description.substring(0, 100) + "..."
      : project.description;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-xl overflow-hidden transition-colors duration-200 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-primary-900/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2 hover:bg-primary-700 transition-colors">
            View Details <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-secondary-100 mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-secondary-400 text-sm mb-4">
          {truncatedDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-secondary-700/50 text-primary-400 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-secondary-700/50 text-primary-400 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <div className="py-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore my latest work and personal projects
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
