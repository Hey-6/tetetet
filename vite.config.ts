import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";//这个path用到了上面安装的@types/node
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/quasar-variables.scss'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src') // @代替src
    }
  },
  server: {
    host: '0.0.0.0',
   port: 9999
  }
})
