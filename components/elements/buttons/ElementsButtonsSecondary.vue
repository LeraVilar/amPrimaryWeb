<template>
  <div class="button-secondary" :style="calculateStyles">
    <div v-if="!link">{{ title }}</div>
    <a v-else :href="link">{{ title }}</a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    hoverBackground: {
      type: String,
      default: '#644C5C'
    },
    link: {
      type: String,
      default: ''
    }
  },

  computed: {
    calculateStyles() {
      return {
        '--color-hover': this.hoverBackground
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-secondary {
    color: #644C5C;
    background-color: #FEF8F2;
    padding: 18px 45px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    margin: 20px 0 0 0;

    a {
      text-decoration: none;
      color: #644C5C;
    }

    @media screen and (max-width: 680px) {
      font-size: 16px;
      padding: 16px 40px;
    }
  }
</style>
