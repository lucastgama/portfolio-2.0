import { SkillProvider } from "./context/SkillContext";
import { HeroProvider } from "./context/HeroContext";
import Home from "./components/Home";
import About from "./components/About";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <SkillProvider>
        <Navbar />
        <HeroProvider>
          <Home />
        </HeroProvider>
        <About />
      </SkillProvider>
    </>
  );
}

export default App;
