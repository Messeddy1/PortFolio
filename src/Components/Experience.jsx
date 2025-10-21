import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";
export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Expériences professionnelles
      </motion.h3>
      <div>
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="text-sm text-neutral-400 mb-2">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h4 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <a
                  aria-label={`Go to ${experience.company} website`}
                  target="_blank"
                  href={experience.companyUrl}
                  className="text-lg text-purple-100 hover:underline hover:text-primary-600 transition-all duration-300"
                >
                  {experience.company}
                </a>
              </h4>
              <p className="mb-4 text-neutral-400">{experience.tasks}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
