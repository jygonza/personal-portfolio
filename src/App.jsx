import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import CurrentFocus from './components/CurrentFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleDark = () => setIsDark((d) => !d);

  return (
    <div className="app">
      <Navbar isDark={isDark} onToggleDark={toggleDark} />
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
    </div>
  );
}

export default App;
