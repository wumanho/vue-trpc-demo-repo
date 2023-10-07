import { httpLink, createTRPCProxyClient } from '@trpc/client'
import { AnyRouter } from '@trpc/server'

export function useTRPC<Router extends AnyRouter>(
  url: string,
  headers?: Parameters<typeof httpLink>[0]['headers'],
  transformer?: Parameters<typeof createTRPCProxyClient>[0]['transformer']
) {
  const httpLinkConfig = httpLink({ url: url, headers })
  const trpc = createTRPCProxyClient<Router>({
    transformer,
    links: [httpLinkConfig]
  })
  return { trpc }
}
