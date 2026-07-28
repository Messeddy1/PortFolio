import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount,    setVisibleCount   ] = useState(3);

  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const hasMore         = visibleCount < PROJECTS.length;

  return (
    <div className="relative py-8">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p
          className="font-orbitron text-xs tracking-widest uppercase mb-3"
          style={{ color: "#00f5ff", letterSpacing: "0.35em" }}
        >
          ◈ 05 · プロジェクト
        </p>
        <h2
          className="font-anime font-bold"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.05em",
            color: "#f0f0ff",
          }}
        >
          Projets{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00f5ff, #bf5fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            en Vedette
          </span>
        </h2>
        <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
          Découvrez mes travaux les plus récents et projets personnels
        </p>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setVisibleCount((c) => c + 3)}
            className="btn-neon-pink"
          >
            Voir plus de projets
          </motion.button>
        </motion.div>
      )}

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
