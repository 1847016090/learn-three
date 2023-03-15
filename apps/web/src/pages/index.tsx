import TEngine from "@three/engine";
import { useEffect } from "react";

/** @name threejs学习 */
const ThreeDemo = () => {
  useEffect(() => {
    const sdk = new TEngine(document.querySelector(".three-canvas"));
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
