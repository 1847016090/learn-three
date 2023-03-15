import commonConfig from "./vite.common.config";
import { defineConfig, mergeConfig } from "vite";

/** @name 开发环境配置 */
const devConfig = defineConfig({
  mode: "development",
  css: {
    // css开始sourceMap
    devSourcemap: true,
  },
  server: {
    // 指定开发服务器端口，如果被占用，会自动切换其他端口
    port: 8888,
    open: true,
    // 设置代理
    proxy: {
      "/api": {
        target: "http://xxxxx", // 接口部署环境
        secure: false,
        changeOrigin: true,
      },
    },
    // 设置响应头信息
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": true,
      // "Access-Control-Allow-Methods": "*",
      // "Access-Control-Allow-Headers": "*",
      // "Access-Control-Expose-Headers": "*",
      // "Cross-Origin-Opener-Policy": "same-origin",
      // "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});

export default mergeConfig(commonConfig, devConfig);
