<template>
      <img :src="'https://dzhobava.com/server'+link" alt="Программа">
</template>
<style scoped>
  img {
     max-width: 100%;
  }
</style>
<script>
 export default {
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      width: window.innerWidth,
    }
  },
}
</script>
