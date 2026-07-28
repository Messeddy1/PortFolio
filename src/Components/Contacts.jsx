import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contacts = () => {
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
          ◈ 07 · コンタクト
        </p>
        <h2
          className="font-anime font-bold"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.05em",
            color: "#f0f0ff",
          }}
        >
          Me{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ff2d78, #bf5fff, #00f5ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contacter
          </span>
        </h2>
        <div className="neon-divider mt-4 max-w-xs mx-auto" />
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="glass-card p-10 text-center relative overflow-hidden"
            style={{
              border: "1px solid rgba(255,45,120,0.15)",
              boxShadow: "0 0 60px rgba(255,45,120,0.05), 0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,45,120,0.05) 0%, transparent 70%)",
              }}
            />

            <p
              className="font-anime text-lg mb-10 relative z-10"
              style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.03em" }}
            >
              Intéressé par une collaboration? N&apos;hésitez pas à me contacter.
            </p>

            {/* Contact items */}
            <div className="space-y-5 relative z-10">
              {CONTACT.phoneNo && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center justify-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.2)" }}
                  >
                    <FaPhone size={15} color="#ffd700" />
                  </div>
                  <span className="font-anime text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {CONTACT.phoneNo}
                  </span>
                </motion.div>
              )}

              {CONTACT.email && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center justify-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.2)" }}
                  >
                    <FaEnvelope size={15} color="#ff2d78" />
                  </div>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.gmailLink}&su=Hello Mohamed&body=Bonjour, je souhaite vous contacter.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-anime text-base transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#ff2d78"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                    aria-label="Envoyer un email via Gmail"
                  >
                    {CONTACT.email}
                  </a>
                </motion.div>
              )}
            </div>

            {/* Divider */}
            <div className="neon-divider my-8 relative z-10" />

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center gap-5 relative z-10"
            >
              {[
                {
                  icon: <FaGithub size={22} />,
                  href: "https://github.com/Messeddy1",
                  label: "GitHub",
                  color: "#ff2d78",
                },
                {
                  icon: <FaLinkedin size={22} />,
                  href: "https://www.linkedin.com/in/mohamed-esseddyqy-640552246/",
                  label: "LinkedIn",
                  color: "#00f5ff",
                },
              ].map(({ icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.filter = `drop-shadow(0 0 8px ${color})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                    e.currentTarget.style.filter = "none";
                  }}
                  aria-label={label}
                >
                  {icon}
                  <span className="text-xs font-anime" style={{ letterSpacing: "0.1em" }}>{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 text-xs font-orbitron tracking-widest"
          style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em" }}
        >
          © 2025 MOHAMED ESSEDDYQY · BUILT WITH ♥ & REACT
        </motion.p>
      </div>
    </div>
  );
};

export default Contacts;
