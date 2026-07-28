import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
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
          style={{ color: "#bf5fff", letterSpacing: "0.35em" }}
        >
          ◈ 04 · 経験
        </p>
        <h2
          className="font-anime font-bold"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.05em",
            color: "#f0f0ff",
          }}
        >
          Expériences{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #bf5fff, #ff2d78)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Professionnelles
          </span>
        </h2>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical connector line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px md:left-8"
          style={{
            background: "linear-gradient(180deg, rgba(255,45,120,0.6), rgba(191,95,255,0.4), rgba(0,245,255,0.4), transparent)",
          }}
        />

        <div className="space-y-8 pl-14 md:pl-20">
          {EXPERIENCE.map((exp, index) => {
            const isCurrent = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-9 md:-left-12 top-6 flex items-center justify-center rounded-full"
                  style={{
                    width: "18px",
                    height: "18px",
                    background: isCurrent ? "#ff2d78" : "rgba(191,95,255,0.6)",
                    boxShadow: isCurrent
                      ? "0 0 0 4px rgba(255,45,120,0.15), 0 0 15px rgba(255,45,120,0.5)"
                      : "0 0 0 3px rgba(191,95,255,0.1)",
                    border: "2px solid #07071f",
                    zIndex: 2,
                  }}
                >
                  {isCurrent && (
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(255,45,120,0.4)",
                        animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite",
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="glass-card p-6 group hover:border-purple-400/20 transition-all duration-400"
                  style={{
                    borderLeft: `3px solid ${isCurrent ? "rgba(255,45,120,0.5)" : "rgba(191,95,255,0.3)"}`,
                    boxShadow: isCurrent
                      ? "0 0 30px rgba(255,45,120,0.05), 0 8px 30px rgba(0,0,0,0.4)"
                      : "0 8px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isCurrent ? "rgba(255,45,120,0.1)" : "rgba(191,95,255,0.1)",
                          border: `1px solid ${isCurrent ? "rgba(255,45,120,0.2)" : "rgba(191,95,255,0.2)"}`,
                        }}
                      >
                        <FaBriefcase size={14} color={isCurrent ? "#ff2d78" : "#bf5fff"} />
                      </div>
                      <div>
                        <h3
                          className="font-anime font-700"
                          style={{ color: "#f0f0ff", fontSize: "1.1rem", letterSpacing: "0.02em" }}
                        >
                          {exp.role}
                        </h3>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm transition-colors duration-200"
                          style={{ color: isCurrent ? "#ff2d78" : "#bf5fff" }}
                          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                          aria-label={`Visiter le site de ${exp.company}`}
                        >
                          {exp.company}
                          <FaExternalLinkAlt size={9} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCurrent && (
                        <span
                          className="px-3 py-1 rounded-full text-xs font-anime font-600 flex items-center gap-1.5"
                          style={{
                            background: "rgba(0,255,159,0.1)",
                            border: "1px solid rgba(0,255,159,0.3)",
                            color: "#00ff9f",
                            letterSpacing: "0.1em",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              background: "#00ff9f",
                              animation: "pulse 2s ease-in-out infinite",
                            }}
                          />
                          ACTUEL
                        </span>
                      )}
                      <span
                        className="text-xs font-orbitron tracking-wider"
                        style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}
                      >
                        {exp.year}
                      </span>
                    </div>
                  </div>

                  {/* Tasks */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.8,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {exp.tasks}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Experience;
