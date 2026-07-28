import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectDetails = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages =
    project.galleryImages?.length > 0
      ? [project.image, ...project.galleryImages]
      : [project.image];

  const prev = () => setActiveImage((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setActiveImage((i) => (i + 1) % galleryImages.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(12px)", background: "rgba(3,3,16,0.85)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.97 }}
        animate={{ y: 0,  opacity: 1, scale: 1 }}
        exit={{ y: 40,   opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(17,17,53,0.98) 0%, rgba(7,7,31,0.98) 100%)",
          border: "1px solid rgba(255,45,120,0.2)",
          boxShadow: "0 0 60px rgba(255,45,120,0.1), 0 40px 80px rgba(0,0,0,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Neon top bar */}
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #ff2d78, #bf5fff, #00f5ff)",
            borderRadius: "2px 2px 0 0",
          }}
        />

        <div className="p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#ff2d78"; e.currentTarget.style.background = "rgba(255,45,120,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            aria-label="Fermer"
          >
            <FaTimes size={18} />
          </button>

          {/* Header */}
          <div className="mb-8 pr-10">
            <h2
              className="font-anime font-bold mb-4"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                background: "linear-gradient(135deg, #f0f0ff, #ff2d78)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.03em",
              }}
            >
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image gallery */}
          <div className="mb-8">
            <div
              className="relative rounded-xl overflow-hidden mb-4"
              style={{ aspectRatio: "16/9" }}
            >
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                src={galleryImages[activeImage]}
                alt={`${project.title} — screenshot ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "30%",
                  background: "linear-gradient(transparent, rgba(7,7,31,0.6))",
                }}
              />

              {/* Nav arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200"
                    style={{ background: "rgba(7,7,31,0.7)", color: "#f0f0ff", border: "1px solid rgba(255,255,255,0.1)" }}
                    aria-label="Image précédente"
                  >
                    <FaChevronLeft size={14} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200"
                    style={{ background: "rgba(7,7,31,0.7)", color: "#f0f0ff", border: "1px solid rgba(255,255,255,0.1)" }}
                    aria-label="Image suivante"
                  >
                    <FaChevronRight size={14} />
                  </button>

                  {/* Counter */}
                  <span
                    className="absolute bottom-3 right-3 font-orbitron text-xs"
                    style={{ color: "rgba(255,255,255,0.5)", background: "rgba(7,7,31,0.7)", padding: "3px 8px", borderRadius: "99px" }}
                  >
                    {activeImage + 1} / {galleryImages.length}
                  </span>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className="relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                    style={{
                      width: "72px",
                      height: "48px",
                      border: i === activeImage
                        ? "2px solid #ff2d78"
                        : "1px solid rgba(255,255,255,0.1)",
                      boxShadow: i === activeImage ? "0 0 10px rgba(255,45,120,0.4)" : "none",
                    }}
                    aria-label={`Miniature ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                      style={{ opacity: i === activeImage ? 1 : 0.5 }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3
                className="font-anime font-700 mb-3"
                style={{ color: "#f0f0ff", fontSize: "1.15rem", letterSpacing: "0.03em" }}
              >
                Vue d&apos;ensemble
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85, whiteSpace: "pre-line" }}
              >
                {project.longDescription}
              </p>
            </div>

            {/* Links */}
            <div
              className="flex flex-wrap gap-3 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {project.github && (
                <a
                  href={project.github !== "#" ? project.github : undefined}
                  onClick={(e) => project.github === "#" && e.preventDefault()}
                  target={project.github !== "#" ? "_blank" : undefined}
                  rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-anime font-600 text-sm transition-all duration-200 ${
                    project.github === "#" ? "opacity-40 cursor-not-allowed" : "btn-glass"
                  }`}
                  aria-label={`GitHub — ${project.title}`}
                >
                  <FaGithub size={16} />
                  {project.github !== "#" ? "Voir le code" : "Projet Privé"}
                </a>
              )}
              {project.url && project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-pink flex items-center gap-2"
                  aria-label={`Demo — ${project.title}`}
                >
                  <FaExternalLinkAlt size={13} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
