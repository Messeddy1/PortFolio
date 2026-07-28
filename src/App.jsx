import About        from "./Components/About";
import Contacts      from "./Components/Contacts";
import Education     from "./Components/Education";
import Experience    from "./Components/Experience";
import Hero          from "./Components/Hero";
import NavBar        from "./Components/NavBar";
import Projects      from "./Components/Projects";
import Technologies  from "./Components/Technologies";
import MobileApp     from "./Components/MobileApp";
import ReservationApp from "./Components/ReservationApp";
import AnimeBackground from "./Components/AnimeBackground";

export default function App() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #07071f 0%, #0d0d2a 50%, #07071f 100%)",
        color: "#f0f0ff",
        overflowX: "hidden",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      {/* Animated sakura + grid canvas */}
      <AnimeBackground />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <NavBar />

        <div className="container mx-auto px-4 max-w-7xl" style={{ paddingTop: "80px" }}>

          {/* Hero */}
          <section id="hero">
            <Hero />
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.2), transparent)", margin: "0" }} />

          {/* About */}
          <section id="about" className="py-24">
            <About />
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.15), transparent)" }} />

          {/* Technologies */}
          <section id="technologies" className="py-24">
            <Technologies />
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.15), transparent)" }} />

          {/* Education */}
          <section id="education" className="py-24">
            <Education />
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(191,95,255,0.15), transparent)" }} />

          {/* Experience */}
          <section id="experience" className="py-24">
            <Experience />
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.15), transparent)" }} />

          {/* Projects */}
          <section id="projects" className="py-24">
            <Projects />
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.3), transparent)" }} />

          {/* Mobile Apps — Showcase */}
          <section id="mobileapp" className="py-24">
            <MobileApp />
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.2), transparent)" }} />

          <section id="reservationapp" className="py-24">
            <ReservationApp />
          </section>

          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.15), transparent)" }} />

          {/* Contacts */}
          <section id="contacts" className="py-24 pb-32">
            <Contacts />
          </section>

        </div>
      </div>
    </div>
  );
}
