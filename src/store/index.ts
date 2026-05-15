import { createPinia } from 'pinia'
import type { App } from 'vue'
// src/store/index.ts

const store = createPinia()
// 注册 Pinia
export function setupStore(app: App<Element>) {
  app.use(store) // 全局注册 Pinia
}

export { store }
