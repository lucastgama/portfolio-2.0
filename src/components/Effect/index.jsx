import { useLoader } from "@react-three/fiber";
import { EffectComposer, Bloom, LUT } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";

export function Effects() {
  const texture = useLoader(LUTCubeLoader, "/effect/F-6800-STD.cube");

  return (
    <EffectComposer disableNormalPass>
      <Bloom
        luminanceThreshold={0.2}
        mipmapBlur
        luminanceSmoothing={1}
        intensity={2.75}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
}
