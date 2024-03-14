<script setup>
  import { useCounterStore } from '@/stores/counter';
  import { useUserStore } from '@/stores/user';

  const counter = useCounterStore()
  const user = useUserStore()
</script>

<template>
  <h1>About us</h1>
  <button @click="counter.increment">Increment</button>
  <h1>{{counter.count}}</h1>
  <h1>{{user.username}}</h1>
  <button @click="user.user_credentials">Get User Credentials</button>
</template>

<style>

</style>
