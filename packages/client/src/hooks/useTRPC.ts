import type { AppRouter } from '@trpc-vue-demo/server'
import { httpLink, createTRPCProxyClient, httpBatchLink } from '@trpc/client'

type URL = Parameters<typeof httpLink>[0]['url']

export function useTRPC(url: URL) {
  const trpc = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: url
      })
    ]
  })
  return { trpc }
}
