import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    ViteEjsPlugin({
      title: 'Битва стилистов | ТРЦ «Планета» Красноярск',
    }),
    tailwindcss(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
         additionalData: `@use "@/css/mixins/screens.scss" as *;`
      },
    },
  },
});
