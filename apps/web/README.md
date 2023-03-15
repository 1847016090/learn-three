# vite + react 模版搭建

## 下载基础模版

1. `pnpm create vite` 下载最新的 react 项目模版

## 配置别名

1. `vite.common.config.ts`里面配置路径

```typescript
{
  resolve: {
    // 配置别名
    alias: {
      "@": resolveAbsolutePath("./src/"),
      "~": resolveAbsolutePath("./node_modules/"),
    },
  },
}
```

2. `tsconfig.json` 里面别名引用时的提示

```json
{
  "compilerOptions": {
    // 解决应用时输入 @/ 之后能自动提示src下面的路径
    "baseUrl": ".",
    // 解决应用别名时不报错
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
