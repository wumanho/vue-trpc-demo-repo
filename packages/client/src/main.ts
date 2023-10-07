import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '@trpc-vue-demo/server'

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/trpc'
    })
  ]
})
export type AppTRPC = typeof trpc

createApp(App).provide('trpc', trpc).mount('#app')
