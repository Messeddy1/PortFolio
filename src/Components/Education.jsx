import { EDUCATIONS } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
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
          style={{ color: "#ffd700", letterSpacing: "0.35em" }}
        >
          ◈ 03 · 教育
        </p>
        <h2
          className="font-anime font-bold"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.05em",
            color: "#f0f0ff",
          }}
        >
          Parcours{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ffd700, #ff9500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Scolaire
          </span>
        </h2>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        {EDUCATIONS.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <div
              className="glass-card p-6 flex gap-5 items-start group hover:border-yellow-400/20 transition-all duration-300"
              style={{
                borderLeft: "3px solid rgba(255,215,0,0.4)",
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,215,0,0.1)",
                  border: "1px solid rgba(255,215,0,0.3)",
                }}
              >
                <FaGraduationCap size={18} color="#ffd700" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <span
                  className="font-orbitron text-xs tracking-widest uppercase mb-2 block"
                  style={{ color: "#ffd700", letterSpacing: "0.2em" }}
                >
                  {edu.year}
                </span>
                <h3
                  className="font-anime font-700 mb-1"
                  style={{ color: "#f0f0ff", fontSize: "1.05rem", letterSpacing: "0.02em" }}
                >
                  {edu.role}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  🎓 {edu.School}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
