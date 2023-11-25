import { Grid } from "@react-three/drei";

const Ground = (props) => {
  const gridConfig = {
    cellSize: 1,
    cellThickness: 0.2,
    cellColor: "#6f6f6f",
    sectionSize: 4,
    sectionThickness: 0.8,
    sectionColor: "#ffffff",
    fadeDistance: 25,
    fadeStrength: 1,
    followCamera: true,
    infiniteGrid: true,
  };
  return <Grid {...props} args={[8.5, 8.5]} {...gridConfig} />;
};

export default Ground;
