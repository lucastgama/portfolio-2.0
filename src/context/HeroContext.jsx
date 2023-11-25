import { createContext, useState } from "react";

export const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [heroOption, setHeroOption] = useState(1);

  const OptionValue = (value) => {
    setHeroOption(value);
  };

  return (
    <HeroContext.Provider value={{  heroOption, OptionValue }}>
      {children}
    </HeroContext.Provider>
  );
};
