<template>
  <header class="academy-header">
    <nuxt-link
      to="/"
      class="academy-header__logo-wrapper"
    >
      <img class="academy-header__logo" src="~assets/images/logo.svg" alt="" />
    </nuxt-link>
    <div class="academy-header__nav-menu">
      <nuxt-link
        to="/about"
        class="academy-header__nav-link"
      >
        Об Элисо
      </nuxt-link>
      <nuxt-link
        to="/#workFormats"
        class="academy-header__nav-link"
      >
        Форматы работы
      </nuxt-link>
      <nuxt-link
        to="/articles"
        class="academy-header__nav-link"
      >
        Статьи
      </nuxt-link>
      <nuxt-link
        to="/#reviews"
        class="academy-header__nav-link"
      >
        Отзывы
      </nuxt-link>
    </div>
    <div class="academy-header__mobile-menu-button" @click="switchMenu">
      <div class="academy-header__mobile-menu-button-part" />
      <div class="academy-header__mobile-menu-button-part" />
      <div class="academy-header__mobile-menu-button-part" />
    </div>
    <div
      :class="{
        'academy-header__mobile-nav-menu': true,
        'academy-header__mobile-nav-menu_opened': isMobileMenuOpened,
      }"
      @click="switchMenu"
    >
      <div class="academy-header__mobile-menu-close-button" />
      <nuxt-link
          to="/about"
          class="academy-header__nav-link"
      >
        Об Элисо
      </nuxt-link>
      <nuxt-link
          to="/#workFormats"
          class="academy-header__nav-link"
      >
        Форматы работы
      </nuxt-link>
      <nuxt-link
          to="/articles"
          class="academy-header__nav-link"
      >
        Статьи
      </nuxt-link>
      <nuxt-link
          to="/"
          class="academy-header__nav-link"
      >
        Отзывы
      </nuxt-link>
    </div>
  </header>
</template>

<script>

  export default {

    setup () {
      const isMobileMenuOpened = ref(false)

      function switchMenu () {
        isMobileMenuOpened.value = !isMobileMenuOpened.value
      }

      return {
        isMobileMenuOpened,
        switchMenu
      }
    }
  }
</script>

<style lang="scss" scoped>
  .academy-header {
    height: 85px;
    border-bottom: 1px solid #C5B1B2;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 680px) {
      height: 70px;
      padding: 20px;
    }

    &__logo-wrapper {
      width: 140px;
      height: 60px;

      @media screen and (max-width: 680px) {
        width: 100px;
        height: 40px;
      }
    }

    &__nav-menu {
      @media screen and (max-width: 680px) {
        display: none;
      }
    }

    &__logo {
      width: 140px;
      height: 58px;

      @media screen and (max-width: 1200px) {
        width: 120px;
        height: 50px;
      }

      @media screen and (max-width: 680px) {
        width: 105px;
        height: 44px;
      }
    }

    &__nav-link {
      font-size: 16px;
      color: #232323;
      text-decoration: none;
      &:not(:last-child) {
        margin: 0 30px 0 0;
      }
    }

    &__mobile-menu-button {
      width: 30px;
      height: 12px;

      @media screen and (min-width: 681px) {
        display: none;
      }
    }

    &__mobile-menu-button-part {
      width: 100%;
      height: 2px;
      content: '';
      background-color: #839389;
      border-radius: 4px;

      &:not(:last-child) {
        margin: 0 0 4px 0;
      }
    }

    &__mobile-nav-menu {
      position: fixed;
      top: 0;
      right: -100%;
      z-index: 10;
      width: 100vw;
      height: 100vh;
      background-color: #FEF8F2;
      transition: right .3s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 50px 0;

      @media screen and (min-width: 681px) {
        display: none;
      }

      .academy-header__nav-link {
        margin: 0 0 30px 0;
      }

      &_opened {
        right: 0;
      }
    }

    &__mobile-menu-close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 25px;
      height: 25px;

      &:before,
      &:after {
        top: 10px;
        position: absolute;
        width: 25px;
        height: 2px;
        content: '';
        background-color: #839389;
        border-radius: 4px;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }
</style>
