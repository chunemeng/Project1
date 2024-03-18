import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// 配置别名
// 1.按需导入 join函数
import {join} from 'node:path'
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    // 2.配置路径别名
    resolve: {
        alias: {
            '@': join(__dirname, './src/')
        }
    },server: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: 'http://127.0.0.1',
                changeOrigin: true, // 开启跨域
                rewrite: (path) => path.replace(/^\/api/, ''), // 将请求地址中的/api前缀替换为空,
            },
        },
    },
})
