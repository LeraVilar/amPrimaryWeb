<template>
  <p class="content" v-html="text"></p>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="scss" scoped>
.content {
  max-width: 555px;
  margin-top: 20px;
  p {
    font-size: 16px;
    line-height: 150%;
    color: #232323;

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
    
    a {
      color: #064848;
      font-size: inherit;
    }
  }
}
  
</style>
