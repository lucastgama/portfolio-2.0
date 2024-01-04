import { Suspense } from "react";
import Person from "./Person";

function Hero() {
  return (
    <Suspense fallback={null}>
      <Person />
    </Suspense>
  );
}

export default Hero;
