<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@trpc-vue-demo/server/types'
import { useTRPC } from './hooks/useTRPC'
const { trpc } = useTRPC('/trpc')

const addUser = async () => {
  await trpc.userCreate.mutate({
    name: new Date().toISOString() + '用户'
  })
  await initPage()
}

const users = ref<User[]>([])
async function initPage() {
  users.value = await trpc.userList.query()
}
initPage()
</script>

<template>
  <ul>
    <li v-for="item in users" :key="item.id">{{ item.name }}</li>
  </ul>
  <button @click="addUser">添加用户</button>
</template>

<style lang="scss" scoped></style>
