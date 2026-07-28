import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../constants";

const getIconComponent = (iconName) => {
  if (iconName.startsWith("Ri")) return RiIcons[iconName];
  if (iconName.startsWith("Si")) return SiIcons[iconName];
  if (iconName.startsWith("Tb")) return TbIcons[iconName];
  return null;
};

const TechCard = ({ tech, index }) => {
  const Icon = getIconComponent(tech.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -8, scale: 1.04 }}
      className="relative group cursor-default"
    >
      <div
        className="glass-card p-5 flex flex-col items-center gap-3 transition-all duration-400"
        style={{
          minWidth: "120px",
          border: "1px solid rgba(255,255,255,0.07)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = tech.color + "50";
          e.currentTarget.style.boxShadow   = `0 0 25px ${tech.color}25, 0 8px 30px rgba(0,0,0,0.4)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
          e.currentTarget.style.boxShadow   = "none";
        }}
      >
        {/* Floating icon */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2.5 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Icon && (
            <Icon
              style={{
                fontSize: "3rem",
                color: tech.color,
                filter: `drop-shadow(0 0 8px ${tech.color}60)`,
              }}
            />
          )}
        </motion.div>

        {/* Name */}
        <span
          className="font-anime font-600 text-sm tracking-wide text-center"
          style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.06em" }}
        >
          {tech.name}
        </span>

        {/* Subtle glow bottom line */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 transition-all duration-400 rounded-full"
          style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
        />
      </div>
    </motion.div>
  );
};

const Technologies = () => {
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
          style={{ color: "#ff2d78", letterSpacing: "0.35em" }}
        >
          ◈ 02 · スキル
        </p>
        <h2
          className="font-anime font-bold"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.05em",
            color: "#f0f0ff",
          }}
        >
          Compétences{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ff2d78, #00f5ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Techniques
          </span>
        </h2>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {TECHNOLOGIES.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
