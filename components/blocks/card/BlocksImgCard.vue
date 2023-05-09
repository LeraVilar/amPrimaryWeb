<template>
      <img :src="'http://95.163.236.196:1337'+link" alt="Программа">
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
