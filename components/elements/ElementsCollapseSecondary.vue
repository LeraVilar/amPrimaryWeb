<template>
  <div class="collapse-block">
    <div
        :class="{
        'collapse-block__header': true,
        'collapse-block__header_opened': isCollapsed
      }"
        @click="switchState"
    >
      <h4 class="collapse-block__title">
        {{ title }}
      </h4>
      <div
          :class="{
          'collapse-block__close-cross-button': true,
          'collapse-block__close-cross-button_opened': isCollapsed
        }"
      />
    </div>
    <div class="collapse-block__content" v-if="isCollapsed">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },

  setup () {
    const isCollapsed = ref(false)

    function switchState () {
      isCollapsed.value = !isCollapsed.value
    }

    return {
      isCollapsed,
      switchState
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse-block {
  border-top: 1px solid #C5B1B2;

  &__header {
    position: relative;
    padding: 20px 60px 20px 0;
    cursor: pointer;
  }

  &__title {
    color: #78353E;
    font-size: 22px;
    margin: 0;

    @media screen and (max-width: 680px) {
      font-size: 18px;
    }
  }

  &__content {
    padding: 0 20px 20px 0;
    max-width: 70%;
    font-size: 16px;
    line-height: 150%;

    @media screen and (max-width: 1200px) {
      max-width: 100%;
    }
  }

  &__close-cross-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 25px;
    height: 30px;
    cursor: pointer;
    transform-origin: center;
    transition: transform .2s;

    &:after,
    &:before {
      position: absolute;
      top: 15px;
      width: 25px;
      height: 1px;
      background-color: #064848;
      content: '';
      transform-origin: center;
    }

    &:after {
      transform: rotate(90deg);
    }

    &_opened {
      transform: rotate(45deg);
    }
  }
}
</style>
