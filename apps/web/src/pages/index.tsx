import { basicObjectLists } from "@three/engine";
import { useEffect } from "react";
import { getSdkInstance } from "./utils";

/** @name threejs学习 */
const ThreeDemo = () => {
  useEffect(() => {
    getSdkInstance().addObjects(...basicObjectLists);
  });
  return (
    <div
      className="three-canvas"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default ThreeDemo;
