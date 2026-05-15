import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import { type ConfigEnv, defineConfig, loadEnv, type UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }: ConfigEnv): Promise<UserConfig> => {
  console.log('mode:', mode)
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      uni(),
      AutoImport({
        imports: ['vue', 'uni-app'],
        dts: 'src/types/auto-import.d.ts',
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json' // ESLint 配置文件路径
        }
      })
    ],

    server: {
      host: '0.0.0.0',
      open: true,
      port: +env.VITE_PORT,
      // 反向代理配置
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_API_URL, // 目标服务器
          changeOrigin: true, // 支持跨域
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '') // 去掉前缀
        }
      }
    }
  }
})
