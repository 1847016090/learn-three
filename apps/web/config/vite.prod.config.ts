import commonConfig from "./vite.common.config";
import { defineConfig, mergeConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import browserslist from "browserslist";

// 获取兼容浏览器的配置
const browserslistConfig = browserslist.loadConfig({ path: "." });
console.log("browserslistConfig", browserslistConfig);
/** @name 生产环境配置 */
const prodConfig = defineConfig({
  mode: "production",
  //todo 需要优化，需要根据浏览器版本来将polyfill打入包里，不然包的体积可能会很大
  plugins: [
    legacy({
      renderLegacyChunks: true,
      targets: browserslistConfig,
    }),
  ],
  build: {
    // esnext-假设有原生动态导入支持，并且将会转译得尽可能小 modules- 支持原生 ES 模块、原生 ESM 动态导入 和 import.meta 的浏览器
    target: "esnext", // 指定为某个ES版本，兼容低版本浏览器
  },
});

export default mergeConfig(commonConfig, prodConfig);
