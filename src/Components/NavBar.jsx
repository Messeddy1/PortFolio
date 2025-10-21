import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary-900/95 backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-shrink-0 items-center">
            <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Messeddy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="nav-link"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="nav-link"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="nav-link"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/mohamed-esseddyqy-640552246/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-primary-400 transition-colors"
              aria-label="Visit Mohamed Esseddyqy LinkedIn profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Messeddy1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-primary-400 transition-colors"
              aria-label="Visit Mohamed Esseddyqy GitHub profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              aria-label="Mobile Menu Button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-secondary-400 hover:text-primary-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("about")}
              className="mobile-nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="mobile-nav-link"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="mobile-nav-link"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="mobile-nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="mobile-nav-link"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
