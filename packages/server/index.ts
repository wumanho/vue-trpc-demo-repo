import { router, publicProcedure } from './trpc'
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { db } from './db'
import { z } from 'zod'

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany()
    return users
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts
    const user = await db.user.findById(input)
    return user
  }),
  userCreate: publicProcedure.input(z.object({ name: z.string() })).mutation(async (opts) => {
    const { input } = opts
    const user = await db.user.create(input)
    return user
  })
})

const server = createHTTPServer({
  router: appRouter
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter

server.listen(3721)
