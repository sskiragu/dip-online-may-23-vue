<script setup>
import { ref } from 'vue';

const count = ref(0)

function increment(){
  count.value++
}
function decrement(){
  count.value--
}
</script>

<template>
  <h1>Welcome Home</h1>
  <h1>Counter App</h1>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <p>{{count}}</p>
</template>

<style scoped>
button{
  border-radius: 10px;
}
</style>
