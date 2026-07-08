/* MARKER-MAKE-KIT-INVOKED */
/* MARKER-MAKE-KIT-DISCOVERY-READ */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { CurrentFocus } from "./components/CurrentFocus";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CaseStudy } from "./components/CaseStudy";

function MainPage({ isDark, onToggleDark }: { isDark: boolean; onToggleDark: () => void }) {
  return (
    <>
      <Nav isDark={isDark} onToggleDark={onToggleDark} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function CaseStudyPage({ isDark, onToggleDark }: { isDark: boolean; onToggleDark: () => void }) {
  return (
    <>
      <Nav isDark={isDark} onToggleDark={onToggleDark} />
      <CaseStudy />
      <Footer />
    </>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggle = () => setIsDark((d) => !d);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage isDark={isDark} onToggleDark={toggle} />} />
        <Route path="/case-study" element={<CaseStudyPage isDark={isDark} onToggleDark={toggle} />} />
      </Routes>
    </BrowserRouter>
  );
}
