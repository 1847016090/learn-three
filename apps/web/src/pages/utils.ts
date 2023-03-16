import TEngine from "@three/engine";

/** @name sdk实例 */
export const getSdkInstance: any & {
  mesh: any;
} = () => {
  if (!getSdkInstance.mesh) {
    getSdkInstance.mesh = new TEngine(document.querySelector(".three-canvas"));
  }
  return getSdkInstance.mesh;
};
