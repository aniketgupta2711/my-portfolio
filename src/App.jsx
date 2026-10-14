import { useRef } from "react";
import "./styles/portfolio.css";
import useScrollEffects from "./hooks/useScrollEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const root = useRef(null);
  const { active, pct } = useScrollEffects(root);

  return (
    <div className="pf" ref={root}>
      {/* Background effects */}
      <div className="aur" aria-hidden="true"><i /><i /><i /></div>
      <div className="prog" style={{ width: pct + "%" }} />

      <Navbar active={active} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
