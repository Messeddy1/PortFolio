import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const truncated =
    project.description.length > 110
      ? project.description.substring(0, 110) + "…"
      : project.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="relative group cursor-pointer h-full flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div
        className="glass-card h-full flex flex-col overflow-hidden transition-all duration-400"
        style={{
          border: hovered ? "1px solid rgba(255,45,120,0.35)" : "1px solid rgba(255,255,255,0.07)",
          boxShadow: hovered
            ? "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,45,120,0.12)"
            : "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(7,7,31,0.85), rgba(255,45,120,0.15))",
              opacity: hovered ? 1 : 0,
            }}
          >
            <span
              className="flex items-center gap-2 font-anime font-600 text-sm px-5 py-2.5 rounded-lg"
              style={{
                background: "rgba(255,45,120,0.2)",
                border: "1px solid rgba(255,45,120,0.5)",
                color: "#ff2d78",
                backdropFilter: "blur(10px)",
                letterSpacing: "0.08em",
              }}
            >
              Voir les détails <FaArrowRight size={12} />
            </span>
          </div>

          {/* Neon top bar on hover */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #ff2d78, #bf5fff, #00f5ff)",
              opacity: hovered ? 1 : 0,
              boxShadow: "0 0 8px rgba(255,45,120,0.6)",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3
            className="font-anime font-700 mb-2 transition-colors duration-300"
            style={{
              color: hovered ? "#ff2d78" : "#f0f0ff",
              fontSize: "1.1rem",
              letterSpacing: "0.03em",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm flex-1 mb-4"
            style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}
          >
            {truncated}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="tech-badge text-xs">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-badge text-xs" style={{ color: "#ff2d78", borderColor: "rgba(255,45,120,0.25)" }}>
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links row */}
          <div
            className="flex items-center justify-between pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span
              className="text-xs font-anime tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em" }}
            >
              {project.role || "Full Stack"}
            </span>
            <div className="flex gap-2">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg transition-all duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#ff2d78"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
                  aria-label={`GitHub — ${project.title}`}
                >
                  <FaGithub size={15} />
                </a>
              )}
              {project.url && project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg transition-all duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#00f5ff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
                  aria-label={`Demo — ${project.title}`}
                >
                  <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;