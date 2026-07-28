import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "About",      id: "about"       },
  { label: "Skills",     id: "technologies"},
  { label: "Experience", id: "experience"  },
  { label: "Projects",   id: "projects"    },
  { label: "App",        id: "mobileapp"   },
  { label: "Contact",    id: "contacts"    },
];

const NavBar = () => {
  const [isScrolled,       setIsScrolled      ] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection,    setActiveSection   ] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      let current = "";
      sections.forEach((el) => {
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = el.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl border-b border-white/5"
          : ""
      }`}
      style={{
        background: isScrolled
          ? "rgba(7, 7, 31, 0.9)"
          : "transparent",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span
              className="font-orbitron text-xl font-bold tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ff2d78, #bf5fff, #00f5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 10px rgba(255,45,120,0.4))",
              }}
            >
              MESSEDDY
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 font-anime font-500 text-sm tracking-widest uppercase transition-all duration-300 group"
                style={{
                  color: activeSection === item.id
                    ? "#00f5ff"
                    : "rgba(255,255,255,0.6)",
                  letterSpacing: "0.12em",
                }}
              >
                {item.label}
                {/* Active underline */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300"
                  style={{
                    width: activeSection === item.id ? "80%" : "0%",
                    background: "linear-gradient(90deg, transparent, #00f5ff, transparent)",
                    boxShadow: "0 0 8px #00f5ff",
                  }}
                />
                {/* Hover underline */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px group-hover:w-4/5 w-0 transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.6), transparent)",
                  }}
                />
              </button>
            ))}
          </motion.div>

          {/* Social Icons + Mobile Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://www.linkedin.com/in/mohamed-esseddyqy-640552246/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#00f5ff"; e.currentTarget.style.filter = "drop-shadow(0 0 8px #00f5ff)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.filter = "none"; }}
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/Messeddy1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ff2d78"; e.currentTarget.style.filter = "drop-shadow(0 0 8px #ff2d78)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.filter = "none"; }}
              aria-label="GitHub profile"
            >
              <FaGithub size={18} />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-card"
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block h-px transition-all duration-300"
                    style={{
                      background: isMobileMenuOpen ? "#ff2d78" : "rgba(255,255,255,0.7)",
                      width: i === 1 ? (isMobileMenuOpen ? "100%" : "70%") : "100%",
                      transform: isMobileMenuOpen
                        ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                          : i === 1 ? "scale(0)"
                          : "rotate(-45deg) translate(4px, -4px)"
                        : "none",
                    }}
                  />
                ))}
              </div>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div
                className="py-4 px-2 rounded-xl mb-4 flex flex-col gap-1"
                style={{
                  background: "rgba(7,7,31,0.95)",
                  border: "1px solid rgba(255,45,120,0.15)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-lg font-anime font-500 tracking-widest uppercase text-sm transition-all duration-200"
                    style={{
                      color: activeSection === item.id ? "#00f5ff" : "rgba(255,255,255,0.6)",
                      background: activeSection === item.id ? "rgba(0,245,255,0.05)" : "transparent",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
