import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ProjectDetails = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Use gallery images from project data or fallback to main image
  const galleryImages =
    project.galleryImages?.length > 0
      ? [project.image, ...project.galleryImages]
      : [project.image];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-secondary-800 rounded-xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-secondary-400 hover:text-primary-400 transition-colors"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Project header */}
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-secondary-100 mb-2">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-secondary-700/50 text-primary-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Image gallery */}
        <div className="mb-8">
          <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
            <motion.img
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[activeImage]}
              alt={`Project preview ${activeImage + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                  activeImage === index
                    ? "ring-2 ring-primary-400"
                    : "ring-1 ring-secondary-700"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-secondary-100 mb-2">
              Project Overview
            </h3>
            <p className="text-secondary-300 leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-secondary-100 mb-2">
              Technologies Used
            </h3>
            <ul className="list-disc list-inside space-y-2 text-secondary-300">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Project links */}
          <div className="flex flex-wrap gap-4 pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary-700 hover:bg-secondary-600 text-secondary-100 rounded-lg transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                View Source
              </a>
            )}
            {project.url && project.url !== "#" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
