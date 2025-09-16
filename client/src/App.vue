<script setup>
import { ref } from 'vue'

const users = ref([])

fetch('/users/').then(response => response.json())
.then((response) => {
  users.value = response
}).catch((e) => {
  console.error(e)
})
</script>

<template>
  <h1>List of Users</h1>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.username }}</li>
  </ul>
</template>

<style scoped></style>