<template>
  <div class="test-block">
    <h3 class="test-block__title">
      Ответьте на несколько вопросов, и мы подберем для вас подходящий продукт
    </h3>
    <elements-buttons-secondary title="Пройти тест" hover-background="#C99D7A" @click="isOpened=true" />
    <svg-star class="test-block__star" />
    <svg-half-circle class="test-block__half-circle" />
    <svg-pine-icon class="test-block__pine-icon" />
    <svg-diamond-icon class="test-block__diamond" />
    <svg-soft-icon class="test-block__soft" />
    <blocks-test @close="isOpened = false" :isOpened="isOpened"/>
  </div>
</template>

<script>
import { ref } from 'vue'
  export default {
    setup () {
      const isOpened = ref(false)
      return {
        isOpened
      }
    },
  }
</script>

<style lang="scss" scoped>
  .test-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
    position: relative;
    @media screen and (max-width: 1200px) {
      //order: -1;
    }
    &__title {
      color: #FEF8F2;
      max-width: 550px;
      text-align: center;
      font-size: 26px;
      line-height: 34px;
    }
    &__test-button {
      margin: 40px 0 0 0;
      color: #644C5C;
      padding: 18px 45px;
      background-color: #FEF8F2;
      font-weight: 600;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      @media screen and (max-width: 680px) {
        font-size: 16px;
      }
    }
    &__star {
      fill: #839389;
      position: absolute;
      top: -20px;
      right: 60px;
      transform: scale(1.2);
      @media screen and (max-width: 1200px) {
        top: -40px;
        right: 30px;
      }
    }
    &__half-circle {
      position: absolute;
      top: 30px;
      right: 0;
      fill: #C99D7A;
    }
    &__pine-icon {
      position: absolute;
      top: 60px;
      right: 40px;
      fill: #FEF8F2;
      transform: scale(0.8);
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
    &__diamond {
      position: absolute;
      bottom: 60px;
      left: 110px;
      fill: #C5B1B2;
      @media screen and (max-width: 1200px) {
        bottom: -20px;
        left: 0px;
      }
      @media screen and (max-width: 680px) {
        display: none;
      }
    }
    &__soft {
      position: absolute;
      bottom: 30px;
      left: 220px;
      fill: #FEF8F2;
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>