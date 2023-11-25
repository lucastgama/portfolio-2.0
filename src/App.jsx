import { SkillProvider } from "./context/SkillContext";
import { HeroProvider } from "./context/HeroContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SkillProvider>
        <Navbar />
        <HeroProvider>
          <Home />
        </HeroProvider>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </SkillProvider>
    </>
  );
}

export default App;
