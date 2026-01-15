import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectCard from "./ProjectCard";



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;

  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projets en vedette
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-2 max-w-xl py-6 text-center mx-auto"
        >
          Découvrez mes travaux les plus récents et mes projets personnels
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {
            visibleProjects.length > 0 && visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))
          }
        </div>
        {hasMore && (
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={showMore}
              className="primary-button flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Voir plus
            </motion.button>
          </div>
        )}
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

