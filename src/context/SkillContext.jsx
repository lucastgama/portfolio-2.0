import { createContext, useState } from "react";

export const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
  const [bonusValue, setBonusValue] = useState(0);
  const [downgradeValue, setDowngradeValue] = useState(0);

  const Upgrade = (value) => {
    setBonusValue(bonusValue + value);
  };
  const Downgrade = (value) => {
    setDowngradeValue(downgradeValue + value);
  };

  return (
    <SkillContext.Provider
      value={{ setBonusValue, bonusValue, downgradeValue, Upgrade, Downgrade }}
    >
      {children}
    </SkillContext.Provider>
  );
};
