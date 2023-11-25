import { Suspense, useContext } from "react";
import Person from "./Person";
import Bedroom from "./Bedroom";
import Airplane from "./Airplane";
import { HeroContext } from "../../context/HeroContext";

function Hero() {
  const { heroOption } = useContext(HeroContext);

  

  const RenderBackground = () => {
    switch (heroOption) {
      case 1:
        return <Person />;
      case 2:
        return <Bedroom />;

      case 3:
        return <Airplane />;
    }
  };

  return (
    <Suspense fallback={null}>
      <RenderBackground />
    </Suspense>
  );
}

export default Hero;
