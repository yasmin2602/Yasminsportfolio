import './App.css';
import Header from './Header/Header';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
