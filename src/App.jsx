import { SkillProvider } from "./context/SkillContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { useProgress } from "@react-three/drei";

function App() {
  function Loader() {
    let { progress } = useProgress();
    return (
      <div className="loading-screen">
        <div className="loading-logo"></div>
        <p>{progress.toFixed(0)}</p>
      </div>
    );
  }
  return (
    <Suspense fallback={<Loader />}>
      <SkillProvider>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </SkillProvider>
    </Suspense>
  );
}

export default App;
