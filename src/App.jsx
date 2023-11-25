import { SkillProvider } from "./context/SkillContext";
import { HeroProvider } from "./context/HeroContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

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
      </SkillProvider>
    </>
  );
}

export default App;
