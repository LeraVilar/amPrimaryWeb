<template>
  <header class="academy-header">
    <nuxt-link to="/" class="academy-header__logo-wrapper">
      <img class="academy-header__logo" src="~assets/images/logo.png" alt="" />
    </nuxt-link>
    <div class="academy-header__nav-menu">
      <nuxt-link to="/about" class="academy-header__nav-link">
        Об Элисо
      </nuxt-link>
      <nuxt-link to="/#workFormats" class="academy-header__nav-link">
        Форматы работы
      </nuxt-link>
      <nuxt-link to="/articles" class="academy-header__nav-link">
        Статьи
      </nuxt-link>
      <nuxt-link to="/#reviews" class="academy-header__nav-link">
        Отзывы
      </nuxt-link>
      <a
        href="/account"
        style="text-decoration: none; color: unset"
        class="lk-login"
      >
        <svg
          style="margin-right: 10px"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00039 7.30525C9.06571 7.30525 10.74 5.66991 10.74 3.65262C10.74 1.63534 9.06571 0 7.00039 0C4.93507 0 3.2608 1.63534 3.2608 3.65262C3.2608 5.66991 4.93507 7.30525 7.00039 7.30525Z"
            fill="#064848"
          />
          <path
            d="M14 13.9998H0V13.3497C0 10.208 2.60748 7.66113 5.82398 7.66113H8.17601C11.3925 7.66113 14 10.208 14 13.3497V13.9998Z"
            fill="#064848"
          />
        </svg>
        <span>Личный кабинет</span>
      </a>
    </div>
    <div class="lk-login-mobile">
      <a href="/account">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#064848" />
          <path
            d="M20.0003 20.3052C22.0656 20.3052 23.7399 18.6699 23.7399 16.6526C23.7399 14.6353 22.0656 13 20.0003 13C17.935 13 16.2607 14.6353 16.2607 16.6526C16.2607 18.6699 17.935 20.3052 20.0003 20.3052Z"
            fill="#FEF8F2"
          />
          <path
            d="M27 26.9998H13V26.3497C13 23.208 15.6075 20.6611 18.824 20.6611H21.176C24.3925 20.6611 27 23.208 27 26.3497V26.9998Z"
            fill="#FEF8F2"
          />
        </svg>
      </a>
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
        <nuxt-link to="/about" class="academy-header__nav-link">
          Об Элисо
        </nuxt-link>
        <nuxt-link to="/#workFormats" class="academy-header__nav-link">
          Форматы работы
        </nuxt-link>
        <nuxt-link to="/articles" class="academy-header__nav-link">
          Статьи
        </nuxt-link>
        <nuxt-link to="/" class="academy-header__nav-link"> Отзывы </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    const isMobileMenuOpened = ref(false);

    function switchMenu() {
      isMobileMenuOpened.value = !isMobileMenuOpened.value;
    }

    return {
      isMobileMenuOpened,
      switchMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.lk-login-mobile {
  display: none;
  @media screen and (max-width: 681px) {
    display: flex;
    gap: 20px;
    align-items: center;
  }
}
.academy-header {
  height: 85px;
  border-bottom: 1px solid #c5b1b2;
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
    content: "";
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
    background-color: #fef8f2;
    transition: right 0.3s;
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
      content: "";
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
