import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import SectionTransition from "./Components/SectionTransition";
export default function App() {
  return (
    <div className="text-secondary-100 overflow-x-hidden antialiased selection:bg-primary-200 selection:text-primary-900 font-sans">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-secondary-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <NavBar />
        <div className="pt-20">
          {" "}
          {/* Add padding to account for fixed navbar */}
          <section id="hero" className="min-h-screen flex items-center">
            <Hero />
          </section>
          <section id="about" className="py-20">
            <SectionTransition>
              <About />
            </SectionTransition>
          </section>
          <section id="technologies" className="py-20">
            <SectionTransition>
              <Technologies />
            </SectionTransition>
          </section>
          <section id="education" className="py-20">
            <SectionTransition>
              <Education />
            </SectionTransition>
          </section>
          <section id="experience" className="py-20">
            <SectionTransition>
              <Experience />
            </SectionTransition>
          </section>
          <section id="projects" className="py-20">
            <SectionTransition>
              <Projects />
            </SectionTransition>
          </section>
          <section id="contacts" className="py-20">
            <SectionTransition>
              <Contacts />
            </SectionTransition>
          </section>
        </div>
      </div>
    </div>
  );
}
