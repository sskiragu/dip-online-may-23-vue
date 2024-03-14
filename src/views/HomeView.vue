<!-- Composition API -->
<script setup>
import { computed, onBeforeUpdate, ref, watch } from 'vue';
import { useUserStore } from '@/stores/user';

const count = ref(0)

function increment(){
  count.value++
}
function decrement(){
  count.value--
}

const doubleCount = computed(() => count.value * 2)

watch(count, (newCount, oldCount) => {
  if (newCount == 10) {
          alert("You max count is reached!")
        }
})

onBeforeUpdate(() => {
  // alert('Are you sure you want to update?')
})

const user = useUserStore()
</script>

<!-- Options -->
<!-- <script>
export default {
  data(){
    return {
      count: 0
    }
  },
  methods: {
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  },
  computed: {
    doubleCount(){
      return this.count * 2
    }
  },
  watch: {
    count(newCount, oldCount){
        if (newCount == 10) {
          alert("You max count is reached!")
        }
    }
  },
  beforeUpdate(){
    alert('Are you sure you want to update?')
  },
  beforeUnmount(){
    confirm('Are you sure you want the leave the page?')
  }
}
</script> -->

<template>
  <h1>Welcome Home</h1>
  <!-- <h1>{{user.username}}</h1> -->
  <h1>Counter App</h1>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <p>{{count}}</p>
  <p>Double count: {{doubleCount}}</p>
</template>

<style scoped>
button{
  border-radius: 10px;
}
</style>
