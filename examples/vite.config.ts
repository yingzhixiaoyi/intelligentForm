import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    (monacoEditorPlugin as any).default({
      languageWorkers:['editorWorkerService', 'css', 'html', 'json', 'typescript']
    })
  ],
})
