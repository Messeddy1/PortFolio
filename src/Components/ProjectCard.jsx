import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncatedDescription =
    project.description.length > 100
      ? project.description.substring(0, 100) + "..."
      : project.description;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-xl overflow-hidden transition-colors duration-200 group cursor-pointer h-full flex flex-col"
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
            Voir les détails <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-display font-semibold text-secondary-100 mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-secondary-400 text-sm mb-4 flex-grow">
          {truncatedDescription}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 2).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-secondary-700/50 text-primary-400 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="px-2 py-1 text-xs font-medium bg-secondary-700/50 text-primary-400 rounded-full">
              +{project.technologies.length - 2} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;