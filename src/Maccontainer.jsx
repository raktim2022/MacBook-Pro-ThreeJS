import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
const Maccontainer = () => {
  let model = useGLTF("./mac.glb");
  let tex = useTexture("./red.jpg");
  let mesh = {};

  model.scene.traverse((e) => {
    mesh[e.name] = e;
  });

  mesh.screen.rotation.x = THREE.MathUtils.degToRad(180);
  mesh.matte.material.map = tex;
  mesh.matte.material.emissiveIntensity = 0;
  mesh.matte.material.metalness = 0;
  mesh.matte.material.roughness = 1;

  let data = useScroll();

  useFrame((state, delta) => {
    mesh.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default Maccontainer;
