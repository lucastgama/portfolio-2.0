import { SkillProvider } from "./context/SkillContext";
import { HeroProvider } from "./context/HeroContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <SkillProvider>
        <Navbar />
        <HeroProvider>
          <Home />
        </HeroProvider>
      </SkillProvider>
    </>
  );
}

export default App;
