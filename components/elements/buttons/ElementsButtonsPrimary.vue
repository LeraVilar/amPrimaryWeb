<template>
  <nuxt-link v-if="isLink === true" target="_blank" :to="link" class="button-primary">
    {{ title }}
  </nuxt-link>
  <button v-else class="button-primary">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    link: {
      type: String,
      default: '#'
    },
    isLink: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.button-primary {
  color: #FEF8F2;
  background-color: #064848;
  padding: 18px 45px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color .2s;
  display: inline-block;
  text-align: center;
  margin: 40px 0 0 0;

  @media screen and (max-width: 680px) {
    font-size: 16px;
    padding: 16px 40px;
  }

  &:hover {
    background-color: #053636;
  }
}
</style>
