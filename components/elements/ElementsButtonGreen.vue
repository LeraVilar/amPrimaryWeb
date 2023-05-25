<template>
  <a v-if="isLink" :href="link" class="button-primary"><slot></slot></a>
  <div v-else :href="link" class="button-primary"><slot></slot></div>
</template>
<script>
  export default {
    props: {
      link: {
        type: String,
        default: '#'
      },
      isLink: {
        type: Boolean,
        default: 'true'
      }
    }
  }
</script>
<style lang="scss" scoped>
.button-primary {
  text-decoration: none;
  padding: 18px 45px;
  color: white;
  background: rgba(6, 72, 72, 1);
  font-size: 18px;
  cursor: pointer;

  @media screen and (max-width: 680px) {
    font-size: 16px;
    padding: 17px 40px;
  }
}

.btnFull {
  text-align: center;
  max-width: 300px;
  width: 100%;
  margin: 30px auto 0;
}
</style>