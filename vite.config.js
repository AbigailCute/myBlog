import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, __dirname); // 根据 mode 来判断当前是何种环境
  // console.log(env);
  return {
    resolve: {
      alias: {
        // 第一种方式（最简洁）
        '@': path.resolve(__dirname, './src'),
        // 第二种方式
        '@style': fileURLToPath(new URL('./src/assets/style', import.meta.url)),
        '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      },
      // 导入时想要省略的扩展名列表。 vite官方不建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
    },
    plugins: [vue()],
    css: {
      devSourcemap: true, // 可以查看 CSS 的源码
    },
    server: {
      host: '0.0.0.0', // 指定服务器应该监听哪个 IP 地址，默认localhost，可设置为'0.0.0.0'或 true
      port: 9527,      // 端口号，默认5173
      open: true,	   // 开发服务器启动时，自动在浏览器中打开应用程序
      // 本地代理
      proxy: {
        // 简写（字符串）
        '/mock': env.VITE_BASE_API,
        // 带选项写法（对象）
        '/api': {
          target: env.VITE_BASE_API,                      // 从环境变量文件取值
          changeOrigin: true,                             // 支持跨域
          rewrite: (path) => path.replace(/^\/api/, ''),  // 路径重写
        },
        // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
        '/socket.io': {
          target: 'ws://localhost:5174',
          // 支持 websocket
          ws: true,
        },
      }
    },
    build: {
      outDir: "dist",      // 默认dist（可省略），打包后输出文件
      assetsDir: "assets", // 默认assets（可省略），指定静态资源存放路径
      sourcemap: false,    // 默认false（可省略），是否构建sourcemap文件（生产不需要）
      minify: 'esbuild',    // 客户端默认构建是esbuild，需安装terser：`npm i -D terser`
      // minify: 'terser',    // 客户端默认构建是esbuild，需安装terser：`npm i -D terser`
      // terserOptions: {
      //   // 生产环境移除console、debugger
      //   compress: {
      //     drop_console: true,   // 默认false
      //     drop_debugger: true,  // 默认true
      //   },
      // }
    },
  }
})
