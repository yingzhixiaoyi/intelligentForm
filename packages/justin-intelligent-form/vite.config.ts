import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
import UnoCSS from "unocss/vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    dts({
      entryRoot: "../",
      outDir: "dist",
    }),
    (monacoEditorPlugin as any).default({})
  ],
  resolve: {
    alias: {
      "@justin-intelligent-form/core": path.resolve(__dirname, "../core"),
      "@justin-intelligent-form/ui": path.resolve(__dirname, "../ui"),
      "@justin-intelligent-form/utils": path.resolve(__dirname, "../utils"),
    },
    dedupe: ["vue"],
  },
  // 单元测试配置
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   transformMode: {
  //     web: [/.[tj]sx$/]
  //   }
  // },
  // rollup打包配置
  build: {
    outDir: "dist", // 输出文件名称
    lib: {
      entry: {
        index: path.resolve(__dirname, "./index.ts"),
      },
      // 指定组件编译入口文件
      name: "justin-intelligent-form",
      // formats: ["es"],
      // fileName: (ModuleFormat) => {
      //   const extension = ModuleFormat === 'es' ? 'js' : ModuleFormat
      //   // 区分默认入口文件和UI注册文件
      //   const path = `justin-intelligent-form.${extension}`
      //   return path
      // }
    },
    // 库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue", "monaco-editor"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    commonjsOptions: {
      esmExternals: true,
    },
  },
});
