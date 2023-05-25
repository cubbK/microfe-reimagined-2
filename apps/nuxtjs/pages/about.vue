<script>
export default {
  name: 'Index',
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<template>
  <button @click="count++">Count is: {{ count }} from nuxt</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
