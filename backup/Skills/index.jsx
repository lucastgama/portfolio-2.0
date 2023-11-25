import { useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { SkillContext } from "../../context/SkillContext";
import * as S from "./styles";
import ProgressBar from "../ProgressBar";
import Upgrade from "../Upgrade";
import Downgrade from "../Downgrade";
import Ground from "../Meshes/Ground";
import { Person } from "../Meshes/Person";
import * as V from "../../Variables";

const Skills = () => {
  const [skills, setSkills] = useState(V.skills);
  const [upgrades, setUpgrades] = useState(V.upgrade);
  const { downgradeValue } = useContext(SkillContext);

  useEffect(() => {
    if (downgradeValue >= 4) {
      setSkills(V.nullSkills);
      setUpgrades(V.fakeUpgrade);
    } else {
      setSkills(V.skills);
      setUpgrades(V.upgrade);
    }
  }, [downgradeValue]);

  return (
    <S.Section id="skills">
      <S.Title>Habilidades</S.Title>
      <S.Container className="mx-width">
        <S.SkillTree>
          <S.Skills>
            {skills.map((skill, index) => (
              <ProgressBar
                key={index}
                title={skill.title}
                value={skill.value}
              />
            ))}
          </S.Skills>
          <S.ContainerUpgrade>
            <S.Upgrades>
              <S.SubTitle>Fortalecimento</S.SubTitle>
              <S.UpgradesTemplate>
                {upgrades.map((up, index) => (
                  <Upgrade
                    key={index}
                    title={up.title}
                    description={up.description}
                    icon={up.icon}
                    value={up.value}
                  />
                ))}
              </S.UpgradesTemplate>
            </S.Upgrades>
            <S.Upgrades>
              <S.SubTitle>Enfraquecimento</S.SubTitle>
              <S.UpgradesTemplate>
                {V.downgrade.map((down, index) => (
                  <Downgrade
                    key={index}
                    title={down.title}
                    description={down.description}
                    icon={down.icon}
                    isDowngrade={down.isDowngrade}
                    value={down.value}
                  />
                ))}
              </S.UpgradesTemplate>
            </S.Upgrades>
          </S.ContainerUpgrade>
        </S.SkillTree>
        <S.ContainerModel>
          <Canvas shadows camera={{ fov: 25 }}>
            <OrbitControls
              makeDefault
              minAzimuthAngle={5}
              maxAzimuthAngle={Math.PI / 2}
              enableZoom={false}
              minPolarAngle={0.8}
              maxPolarAngle={1.5}
            />
            <Person position={[0, -1, 0]} />
            <Ground receiveShadow position={[0, -1, 0]} />
            <Environment resolution={256} preset="city" />
          </Canvas>
        </S.ContainerModel>
      </S.Container>
    </S.Section>
  );
};

export default Skills;
