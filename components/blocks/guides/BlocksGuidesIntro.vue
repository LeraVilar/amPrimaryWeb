<template>
  <div class="guides-intro">
    <svg-heart-icon class="heartIcon" />
    <svg-plus-icon class="plusIcon"/>
    <img src="~assets/images/fotocircle.png" class="fotoCircle" alt="" />
    <h2 class="guides-intro__title">
      Гайды и методички
    </h2>
    <div class="guides-intro__text">
      Подробные гайды и методички, которые помогут разобраться беременным и мамам в важных вопросах
    </div>
    <div class="guides-intro__button-wrapper">
      <div class="guides-intro__button" @click="isOpened=true">
        Выбрать материал
      </div>
    </div>
    <blocks-test :is-opened="isOpened" @close="isOpened=false" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const isOpened = ref(false)

    return {
      isOpened,
    }
  }
}
</script>

<style lang="scss" scoped>

  .fotoCircle {
    position: absolute;
    left: -80px;
    bottom: 40px;

    @media screen and (max-width: 1200px) {
      width: 92px;
      height: 89px;
      top: 40px;
      left: -50px;
    }

    @media screen and (max-width: 680px) {
      width: 110px;
      height: 106px;
      top: -20px;
      left: 10%;
    }
  }
  .heartIcon {
    position: absolute;
    fill: #78353E;
    width: 62px;
    height: 65px;
    right: -30px;
    transform: rotate(60deg);
    top: 40%;

    @media screen and (max-width: 680px) {
      display: none;
    }
  }

  .plusIcon {
    position: absolute;
    fill: #C5B1B2;
    width: 100px;
    height: 100px;
    right: -30px;
    top: 40px;
    transform: rotate(-30deg);

    @media screen and (max-width: 1200px) {
      width: 70px;
      height: 70px;
      top: 80px;
    }

    @media screen and (max-width: 680px) {
      top: -20px;
      right: 10%;
    }
  }
  .guides-intro {
    background-color: #C99D7A;
    border-radius: 15px;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 90px 0 0 0;
    position: relative;
    &__title {
      font-size: 38px;
      color: #FEF8F2;
      margin: 0;
    }
    &__text {
      margin: 20px 0 0 0;
      max-width: 500px;
      text-align: center;
      color: #FEF8F2;
      font-size: 16px;
      line-height: 150%;
    }
    &__button-wrapper {
      margin: 40px 0 0 0;
      display: flex;
    }
    &__button {
      background-color: #FEF8F2;
      border-radius: 5px;
      font-size: 18px;
      font-weight: 600;
      color: #644C5C;
      padding: 18px 45px;
      cursor: pointer;
    }
  }
</style>