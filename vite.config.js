import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//配置elementPlus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'  // 图片压缩
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
    visualizer({
      open: true, //在默认用户代理中打开生成的文件
      gzipSize: true, // 收集 gzip 大小并将其显示
      brotliSize: true, // 收集 brotli 大小并将其显示
      filename: "stats.html", // 分析图生成的文件名
    }),
    // gzip 压缩
    compression({
      algorithm: "gzip", // 指定压缩算法为gzip,[ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: ".gz", // 指定压缩后的文件扩展名为.gz
      threshold: 10240, // 仅对文件大小大于threshold的文件进行压缩，默认为10KB
      deleteOriginFile: false, // 是否删除原始文件，默认为false
      filter: /\.(js|css|json|html|ico|svg)(\?.*)?$/i, // 匹配要压缩的文件的正则表达式，默认为匹配.js、.css、.json、.html、.ico和.svg文件
      compressionOptions: { level: 9 }, // 指定gzip压缩级别，默认为9（最高级别）
      verbose: true, //是否在控制台输出压缩结果
      disable: false, //是否禁用插件
    }),
    // 第三方库CDN引入

    // 图片压缩
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    // sitemap
    // 'sitemap': {
    //   hostname: 'https://www.nimotion.cn'
    // }

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `,
      }
    }
  },
  build: {  
    minify: 'terser', // 启用 terser 压缩  
    terserOptions: {  
        compress: {  
            pure_funcs: ['console.log'], // 只删除 console.log 
            //drop_console: true, // 删除所有 console
            drop_debugger: true, // 删除 debugger  
        }  
    },
    rollupOptions: {
      output: {
        manualChunks: id => {
          // 将 node_modules 中的代码单独打包成一个 JS 文件
          if(id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }  
})
