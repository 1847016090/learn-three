import { basicObjectLists, TCanvasTexturedEditor } from "@three/engine";
import { useEffect } from "react";
import { getSdkInstance } from "./utils";

/** @name threejs学习 */
const ThreeDemo = () => {
  useEffect(() => {
    getSdkInstance().addObjects(...basicObjectLists);
    const testCanvas = new TCanvasTexturedEditor(200, 200);
    testCanvas
      .draw((ctx) => {
        ctx.beginPath();
        // 画一个矩形路径
        ctx.rect(10, 10, 20, 20);
        // 设置笔的描边颜色
        ctx.strokeStyle = "red";
        // 通知笔进行描边
        ctx.stroke();
        ctx.closePath();
      })
      .preview();
  }, []);
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
