import { useContext, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkillContext } from "../../context/SkillContext";

export function Person(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./meshes/person/newPerson.glb"
  );
  const { actions } = useAnimations(animations, group);

  // change movimento
  const { downgradeValue } = useContext(SkillContext);
  useEffect(() => {
    switch (downgradeValue) {
      case 0:
        actions.idle.play();
        actions.no.stop();
        actions.look.stop();
        actions.coffee.stop();
        actions.run.stop();
        break;
      case 1:
        actions.idle.stop();
        actions.no.play();
        actions.look.stop();
        actions.coffee.stop();
        actions.run.stop();
        break;
      case 2:
        actions.idle.stop();
        actions.no.stop();
        actions.coffee.play();
        actions.look.stop();
        actions.run.stop();
        break;
      case 3:
        actions.idle.stop();
        actions.no.stop();
        actions.coffee.stop();
        actions.look.play();
        actions.run.stop();
        break;
      default:
        actions.idle.stop();
        actions.no.stop();
        actions.coffee.stop();
        actions.look.stop();
        actions.run.play();
        break;
    }
  }, [
    downgradeValue,
    actions.idle,
    actions.no,
    actions.look,
    actions.coffee,
    actions.run,
  ]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.001"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials["Wolf3D_Glasses.001"]}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.001"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.001"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.001"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
        </group>
        <group name="cs_grp">
          <group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.82} />
          <group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.82} />
          <group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.21} />
          <group name="cs_circle001" position={[0.5, 4.5, 0]} scale={0.21} />
          <group name="cs_circle_025" position={[2.5, 4.5, 0]} scale={0.21} />
          <group
            name="cs_foot"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.31}
          />
          <group
            name="cs_foot001"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.31}
          />
          <group
            name="cs_foot002"
            position={[0.5, 10.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.31}
          />
          <group
            name="cs_foot_01"
            position={[0.5, 18.5, 0]}
            rotation={[0, 1.57, 0]}
            scale={2.19}
          />
          <group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.59} />
          <group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.82} />
          <group
            name="cs_hand"
            position={[0.5, 19.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.31}
          />
          <group name="cs_head" position={[0.5, 13.5, 0]} scale={0.21} />
          <group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.21} />
          <group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} />
          <group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.21} />
          <group
            name="cs_shoulder_left"
            position={[0.5, 15.5, 0]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={1.04}
          />
          <group
            name="cs_shoulder_right"
            position={[0.5, 16.5, 0]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={1.04}
          />
          <group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.21} />
          <group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.21} />
          <group
            name="cs_square"
            position={[1.5, 1.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.15}
          />
          <group
            name="cs_square_2"
            position={[0.5, 1.5, 0]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.15}
          />
          <group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.82} />
          <group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.43} />
        </group>
        <skinnedMesh
          name="Wolf3D_Outfit_Bottom"
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Footwear"
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./meshes/person/newPerson.glb");
