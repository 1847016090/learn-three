import { defineConfig } from "vite";
import useReact from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import cssNano from "cssnano";
import path from "path";
import fs from "fs";
import process from "process";

const appDirectory = fs.realpathSync(process.cwd());

/** @name 根据项目路径获取绝对路径 */
const resolveAbsolutePath = (relativePath: string) => {
  return path.resolve(appDirectory, relativePath);
};

// https://vitejs.dev/config/
export default defineConfig({
  // !配置环境变量
  // .env环境默认加载路径
  envDir: "./",
  // .env中配置的环境变量开头必须以envPrefix开头才会暴露到import.meta.env里面
  envPrefix: "ROKID",
  //! 配置插件
  plugins: [useReact()],
  //! 配置CSS模块
  css: {
    modules: {
      // 作用于当前页面,默认local
      scopeBehaviour: "local",
      // https://github.com/madyankin/postcss-modules
      // dashes-引入的模块里面会包含原始的类名以及转化后的类名，dashesOnly-引入的模块只会有转化后的破折号的形式的类名
      localsConvention: "dashes",
      // 自定义类名的名字，防止类名污染
      generateScopedName: "[local]____[hash:base64:8]",
    },
    postcss: {
      // 配置处理类名前缀，兼容不同内核的浏览器
      plugins: [autoprefixer, cssNano],
    },
    preprocessorOptions: {
      less: {
        // less文件注入公用的变量以及类名
        modifyVars: {
          hack: `true; @import (reference) "${resolveAbsolutePath(
            "./src/assets/style/index.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  // ! 配置 resolve
  resolve: {
    // 配置别名
    alias: {
      "@": resolveAbsolutePath("./src/"),
      "~": resolveAbsolutePath("./node_modules/"),
    },
    // vite 内置了一下类型
    // extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  // ! 配置项目的JSON数据引用
  json: {
    // 是否支持从 .json 文件中进行按名导入
    namedExports: true,
    // 导入的 JSON 会被转换为 export default JSON.parse("...")，这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候
    // 开启此项，则会禁用按名导入。
    stringify: false,
  },
  // ! 静态资源处理，内置了
  // images
  // 'png',
  // 'jpe?g',
  // 'jfif',
  // 'pjpeg',
  // 'pjp',
  // 'gif',
  // 'svg',
  // 'ico',
  // 'webp',
  // 'avif',

  // // media
  // 'mp4',
  // 'webm',
  // 'ogg',
  // 'mp3',
  // 'wav',
  // 'flac',
  // 'aac',

  // // fonts
  // 'woff2?',
  // 'eot',
  // 'ttf',
  // 'otf',

  // // other
  // 'webmanifest',
  // 'pdf',
  // 'txt'
  // assetsInclude: [],
  // !配置静态资源服务的路径，默认的路径wei 'public'
  publicDir: "public",
  // !关闭日志清屏开关
  clearScreen: false,
});
