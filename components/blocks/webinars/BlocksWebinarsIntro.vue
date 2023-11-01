<template>
  <div class="webinars-intro">
    <h2 class="webinars-intro__title" id="webinars-intro__title">
      Вебинары для девушек и женщин
    </h2>
    <div class="webinars-intro__text">
      Структурированные материалы, которые дадут максимум информации по важным вопросам
    </div>
    <div class="webinars-intro__button-container">
      <div class="webinars-intro__button" @click="isOpened=true">
        Выбрать вебинар
      </div>
    </div>
    <svg-arrow class="webinars-intro__figures-arrow" />
    <svg-heart-icon class="webinars-intro__heart" />
    <svg-star-nine class="webinars-intro__star-nine" />
    <svg-half-circle class="webinars-intro__half-circle" />
    <svg-pine-icon class="webinars-intro__pine-icon" />
    <blocks-test :is-opened="isOpened" @close="isOpened=false" />
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
  }
}
</script>

<style lang="scss" scoped>
  .webinars-intro {
    position: relative;
    width: 100%;
    background: rgba(131, 147, 137, 1);
    border-radius: 15px;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1200px) {
      padding: 60px 0;
    }
    @media screen and (max-width: 680px) {
      padding: 110px 30px;
    }
    &__title {
      color: #FEF8F2;
      font-size: 38px;
      margin: 0 0 20px 0;
      @media screen and (max-width: 1200px) {
        font-size: 36px;
        line-height: 43px;
        width: 355px;
        text-align: center;
      }
      @media screen and (max-width: 680px) {
        font-size: 30px;
        line-height: 36px;
      }
    }
    &__text {
      color: #FEF8F2;
      font-size: 16px;
      line-height: 24px;
      max-width: 430px;
      text-align: center;
      @media screen and (max-width: 680px) {
        width: 284px;
      }
    }
    &__button {
      color: #644C5C;
      padding: 18px 45px;
      background: #FEF8F2;
      border-radius: 5px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      @media screen and (max-width: 680px) {
        font-size: 16px;
      }
    }
    &__button-container {
      display: flex;
      margin: 40px 0 0 0;
    }
    &__heart {
      position: absolute;
      width: 65px;
      height: 65px;
      fill: rgba(201, 157, 122, 1);
      right: 83px;
      bottom: 24px;
      transform: rotate(50deg);
      @media screen and (max-width: 1200px) {
        display: none;
      }
      @media screen and (max-width: 680px) {
        transform: rotate(50deg) scale(0.4);
        right: unset;
        left: 55px;
        bottom: unset;
        top: 5px;
      }
    }
    &__figures-arrow {
      position: absolute;
      fill: #644C5C;
      transform: rotate(50deg);
      left: -80px;
      top: 50px;
      @media screen and (max-width: 1200px) {
        width: 144px;
        height: 111px;
      }
      @media screen and (max-width: 680px) {
        display: none;
      }
    }
    &__star-nine {
      position: absolute;
      fill: rgba(254, 248, 242, 1);
      width: 58px;
      height: 58px;
      bottom: 171px;
      left: 32px;
      transform: rotate(-15deg);
      @media screen and (max-width: 1200px) {
        left: 8px;
      }
      @media screen and (max-width: 680px) {
        display: none;
      }
    }
    &__pine-icon {
      position: absolute;
      fill: #064848;
      width: 86px;
      height: 86px;
      bottom: -30px;
      right: 144px;
      transform: rotate(-65deg);
      @media screen and (max-width: 1200px) {
        display: none;
      }
      @media screen and (max-width: 680px) {
        display: none;
      }
    }
    &__half-circle {
      position: absolute;
      width: 145px;
      height: 82px;
      transform: rotate(15deg);
      fill: rgba(197, 177, 178, 1);
      right: 101px;
      bottom: 77px;
      @media screen and (max-width: 1200px) {
        right: -60px;
        bottom: -30px;
      }
      @media screen and (max-width: 680px) {
        width: 105px;
        height: 60px;
        right: 20px;
        top: -15px;
      }
    }
    &__plus {
      position: absolute;
      fill: #C99D7A;
      left: -5px;
      bottom: 60px;
      transform: scale(1.5);
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>