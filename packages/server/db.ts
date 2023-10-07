import type { User } from './types'

// Imaginary database
const users: User[] = []
export const db = {
  user: {
    findMany: async () => users,
    findById: async (id: string) => users.find((user) => user.id === id),
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data }
      users.push(user)
      console.log(users, 'usrs')
      return user
    }
  }
}
