import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useCallback } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";

var width = window.innerWidth;
var num_nb = width > 768
  ? Math.round(Math.sqrt(width * 1))
  : Math.round(Math.sqrt(width * 0.5));

const particlesOptions = {
  fpsLimit: 20,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
  },
  particles: {
    links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
    collisions: { enable: true },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 2,
      straight: false,
    },
    number: { value: num_nb },
    opacity: { value: 0.5 },
    shape: { type: "star" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

function App() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <ParticlesProvider init={init}>
        <Particles
          id="tsparticles"
          className="particles-canvas"
          options={particlesOptions}
        />
      </ParticlesProvider>
      <Navbar />
      <Header />
      <About />
      <Timeline />
      <Projects />
      <Research />
      <Contact />
    </>
  );
}

export default App;
