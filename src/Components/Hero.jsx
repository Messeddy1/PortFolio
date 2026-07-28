import { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me.jpeg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaChevronDown } from "react-icons/fa";
import { SiReact, SiLaravel } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const ROLES = [
  "Full Stack Developer",
  "React Native Dev",
  "Laravel API Expert",
  // "ERP Engineer",
];

const Typewriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
        if (charIndex === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      }, 55);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }, 28);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span
      className="font-anime"
      style={{
        background: "linear-gradient(135deg, #ff2d78, #bf5fff, #00f5ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontSize: "inherit",
        fontWeight: 700,
      }}
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1.1em",
          background: "#ff2d78",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }`}</style>
    </span>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center" style={{ paddingTop: "80px" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* ── Left: Text Content ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Company badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-500 tracking-widest uppercase"
              style={{
                background: "rgba(255,215,0,0.08)",
                border: "1px solid rgba(255,215,0,0.25)",
                color: "#ffd700",
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#00ff9f",
                  boxShadow: "0 0 6px #00ff9f",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              Currently @ IntegralTech · Marrakech
            </span>
          </motion.div>

          {/* Greeting + Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="font-anime text-sm tracking-widest uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.25em" }}
            >
              ✦ Hello, I&apos;m
            </p>
            <h1
              className="font-anime font-bold mb-3"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                color: "#f0f0ff",
              }}
            >
              Mohamed
              <br />
              <span style={{ color: "rgba(255,255,255,0.85)" }}>Esseddyqy</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6"
            style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", minHeight: "2.5rem" }}
          >
            <Typewriter />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-lg mb-8 leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Développeur Full Stack passionné chez{" "}
            <span style={{ color: "#ffd700", fontWeight: 600 }}>IntegralTech</span>.
            Spécialisé en React, React Native, TypeScript & Laravel API.
            Je construis des systèmes ERP performants et des apps mobiles cross-platform.
          </motion.p>

          {/* Tech mini badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex gap-2 mb-8 flex-wrap justify-center lg:justify-start"
          >
            {[
              { icon: <SiReact size={14} color="#38BDF8" />, label: "React" },
              { icon: <TbBrandReactNative size={14} color="#61DAFB" />, label: "React Native" },
              { icon: <SiLaravel size={14} color="#F53003" />, label: "Laravel" },
            ].map(({ icon, label }) => (
              <span key={label} className="tech-badge flex items-center gap-1.5">
                {icon} {label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a href="/cv.pdf" download className="btn-neon-pink">
              <FaDownload size={14} />
              Télécharger CV
            </a>
            <a
              href="https://github.com/Messeddy1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <FaGithub size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-esseddyqy-640552246/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* ── Right: Profile Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 80 }}
          className="flex justify-center items-center"
        >
          <div className="relative" style={{ width: "320px", height: "360px" }}>
            {/* Outer glow rings */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(255,45,120,0.15) 0%, transparent 70%)",
                animation: "pulse 3s ease-in-out infinite",
              }}
            />

            {/* Animated border ring */}
            <div
              className="absolute"
              style={{
                inset: "-3px",
                borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
                background: "linear-gradient(135deg, #ff2d78, #bf5fff, #00f5ff, #ff2d78)",
                backgroundSize: "300% 300%",
                animation: "gradientShift 4s linear infinite",
                padding: "3px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  background: "#07071f",
                }}
              />
            </div>

            {/* Profile image */}
            <div
              className="absolute"
              style={{
                inset: "8px",
                borderRadius: "38% 62% 54% 46% / 44% 40% 60% 56%",
                overflow: "hidden",
              }}
            >
              <img
                src={profilePic}
                alt="Mohamed Esseddyqy — Full Stack Developer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              {/* Overlay tint */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 60%, rgba(7,7,31,0.4) 100%)",
                }}
              />
            </div>

            {/* Floating skill orbs */}
            {[
              { label: "React", color: "#38BDF8", top: "5%", left: "-15%", delay: 0 },
              { label: "Laravel", color: "#F53003", top: "5%", right: "-15%", delay: 0.3 },
              { label: "RN", color: "#61DAFB", bottom: "15%", left: "-18%", delay: 0.6 },
            ].map(({ label, color, delay, ...pos }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
                className="absolute flex items-center justify-center rounded-full text-xs font-bold"
                style={{
                  ...pos,
                  width: "44px",
                  height: "44px",
                  background: "rgba(7,7,31,0.9)",
                  border: `1px solid ${color}40`,
                  color,
                  fontSize: "0.65rem",
                  boxShadow: `0 0 12px ${color}30`,
                  fontFamily: "Orbitron, monospace",
                  zIndex: 10,
                }}
              >
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        <span className="text-xs font-anime tracking-widest uppercase" style={{ letterSpacing: "0.2em", fontSize: "0.65rem" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={14} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
