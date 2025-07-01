import "./index.css";
import "./App.scss";
import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Routes, Route, useLocation } from "react-router-dom";


import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Navbar from "./components/nav-bar";

function App() {
  const [init, setInit] = useState(false);
  const location = useLocation()


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#1d1d1d" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ff4d4d" },
        links: {
          color: "#ff4d4d",
          distance: 320,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          speed: 6,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 }},
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="app">
    
      {/* ✅ Show particles only after engine is initialized */}

      {location.pathname === "/" && init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none", // prevent blocking interaction
          }}
        />
        
      )}

      {/* Main content */}
      <div className="app-main-content" style={{position: "relative", zIndex: 0}}>
      <div style={{zIndex: 100}}>
        < Navbar />
      </div>
      
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
    
  );
}

export default App;