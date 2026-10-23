import { ABOUT_TEXT } from "../constants";
import about from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
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
          ◈ 01 · アバウト
        </p>
        <h2
          className="font-anime font-bold"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.05em",
            color: "#f0f0ff",
          }}
        >
          À propos{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ff2d78, #bf5fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            de Moi
          </span>
        </h2>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative" style={{ maxWidth: "380px", width: "100%" }}>
            {/* Glow behind */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "radial-gradient(ellipse, rgba(255,45,120,0.2) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.1)",
              }}
            />
            {/* Decorative border */}
            <div
              className="absolute"
              style={{
                inset: 0,
                borderRadius: "16px",
                padding: "2px",
                background: "linear-gradient(135deg, rgba(255,45,120,0.5), rgba(191,95,255,0.2), rgba(0,245,255,0.3))",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px",
                  background: "#07071f",
                }}
              />
            </div>
            <img
              src={about}
              alt="Mohamed Esseddyqy — About"
              className="rounded-2xl relative z-10"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "brightness(0.9) contrast(1.05)",
              }}
            />
            {/* Corner accent */}
            <div
              className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 rounded-tl-md"
              style={{ borderColor: "#ff2d78" }}
            />
            <div
              className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 rounded-br-md"
              style={{ borderColor: "#00f5ff" }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full lg:w-1/2"
        >
          <div
            className="glass-card p-8 relative"
            style={{
              borderLeft: "3px solid rgba(255,45,120,0.5)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 0 30px rgba(255,45,120,0.03)",
            }}
          >
            {/* Quote mark */}
            <span
              className="absolute top-4 right-6 font-anime"
              style={{
                fontSize: "5rem",
                lineHeight: 1,
                color: "rgba(255,45,120,0.06)",
                fontWeight: 900,
                userSelect: "none",
              }}
            >
              &quot;
            </span>

            <p
              className="leading-relaxed relative z-10"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                whiteSpace: "pre-line",
              }}
            >
              {ABOUT_TEXT}
            </p>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-4 mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { val: `${new Date().getFullYear() - 2025}+`, label: "Years Exp." },
                { val: "10+", label: "Projects" },
                { val: "ERP", label: "Specialist" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="font-anime font-bold"
                    style={{
                      fontSize: "1.5rem",
                      background: "linear-gradient(135deg, #ff2d78, #00f5ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {val}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
