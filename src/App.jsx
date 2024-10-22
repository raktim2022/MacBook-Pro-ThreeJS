import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  SpotLight,
} from "@react-three/drei";
import Maccontainer from "./Maccontainer";

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="navbar flex gap-5 pt-10 pb-3 line absolute top-0 left-1/2 -translate-x-1/2">
          {[
            "ipad",
            "iphone",
            "service",
            "mac",
            "products",
            "ipad",
            "iphone",
            "service",
            "mac",
            "products",
          ].map((e,index) => (
            <a key={index} href="" className="text-white font-[500] text-sm capitalize">
              {e}
            </a>
          ))}
        </div>
        <div className=" flex flex-col justify-center items-center absolute font-[font1] text-white top-28 left-1/2 -translate-x-1/2">
          <h1 className="masked text-8xl tracking-tighter font-[700]">
            macbook pro.
          </h1>
          <p className="text-lg font-[400]">Ohh its great</p>
          <p className="text-center">
            The MacBook Pro, a flagship product from Apple, is a
            high-performance laptop known for its premium design, powerful
            hardware, and innovative features, catering.
          </p>
        </div>
        <Canvas camera={{ fov: 12, position: [0, -10, 230] }}>
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />
          <ScrollControls pages={3}>
            <Maccontainer />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
};

export default App;
