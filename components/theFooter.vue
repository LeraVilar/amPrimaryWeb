<template>
  <footer class="academy-footer">
    <div class="academy-footer__top">
      <div class="academy-footer__logo-block">
        <nuxt-link
          to="/"
          class="academy-footer__logo-wrapper"
        >
          <img class="academy-footer__logo" src="~assets/images/logo.svg" alt="" />
        </nuxt-link>
        <div class="academy-footer__contacts-wrapper">
          <div>
            <h4 class="academy-footer__mail">
              info@dzhobava.com
            </h4>
            <h4 class="academy-footer__phone">
              +7 910 416-89-91
            </h4>
          </div>
          <div class="academy-footer__media-container">
            <svg-media-telegram class="academy-footer__media-icon" />
            <svg-media-you-tube class="academy-footer__media-icon" />
            <svg-media-whats-app class="academy-footer__media-icon" />
          </div>
        </div>
      </div>
      <div class="academy-footer__navigation">
        <div class="academy-footer__column">
          <div class="academy-footer__column-title">
            Форматы работы
          </div>
          <router-link class="academy-footer__column-item" to="/projects">
            Персонализированные проекты
          </router-link>
          <router-link class="academy-footer__column-item" to="/school">
            Школа беременных и мам
          </router-link>
          <router-link class="academy-footer__column-item" to="/forMedWorkers">
            Специалистам и медработникам
          </router-link>
          <router-link class="academy-footer__column-item" to="/consultations">
            Консультации
          </router-link>
          <router-link class="academy-footer__column-item" to="/guides">
            Гайды и методички
          </router-link>
          <router-link class="academy-footer__column-item" to="/webinars">
            Вебинары
          </router-link>
        </div>
        <div class="academy-footer__column">
          <div class="academy-footer__column-title">
            Информация
          </div>
          <router-link class="academy-footer__column-item" to="/about">
            Об основательнице
          </router-link>
          <router-link class="academy-footer__column-item" to="/articles">
            Полезные материалы
          </router-link>
          <router-link class="academy-footer__column-item" to="/articles/#mediaArticles">
            Публикации в СМИ
          </router-link>
          <router-link class="academy-footer__column-item" to="/articles">
            Статьи
          </router-link>
        </div>
      </div>
      <div class="academy-footer__arrow-to-top-button" @click="scrollToTop()">
        <svg-arrow-right class="academy-footer__arrow-icon" />
      </div>
    </div>
    <div class="academy-footer__bottom">
      <a style="color: #644c5c; text-decoration: none" :href="this.link + '/uploads/PUBLI_Ch_NA_Ya_OFERTA_0d52dc1276.pdf'" target="_blank" class="academy-footer__bottom-column">
        Публичная оферта
      </a>
      <a style="color: #644c5c; text-decoration: none" :href="this.link + '/uploads/Politika_obrabotki_personalnyh_dannyh_IP_Dzhobava_E_M_7e09d3b087.pdf'" target="_blank" class="academy-footer__bottom-column">
        Политика персональных данных
      </a>
      <div class="academy-footer__bottom-column">
        Разработка сайта
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        link: import.meta.env.VITE_URL_API
      }
    },
    setup () {
      function scrollToTop () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      return {
        scrollToTop
      }
    }

  }
</script>

<style lang="scss" scoped>
  .academy-footer {
    position: relative;
    background-color: #ECE7E1;
    padding: 72px 140px 40px 140px;

    @media screen and (max-width: 1200px) {
      padding: 60px 70px;
    }

    @media screen and (max-width: 680px) {
      padding: 60px 30px;
    }

    &__top {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__bottom {
      margin: 60px 0 0 0;
      padding: 30px 45px 0 0;
      border-top: 1px solid #C5B1B2;
      display: flex;
      justify-content: right;

      @media screen and (max-width: 1200px) {
        justify-content: left;
        padding: 30px 0 0 0;
      }

      @media screen and (max-width: 680px) {
        flex-direction: column;
      }
    }

    &__logo-block {
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 1200px) {
        align-items: normal;
        width: auto;
      }
    }

    &__logo-wrapper {
      width: 180px;
      height: 74px;
      margin: 0 0 30px 0;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__logo {
      width: 100%;
      height: 100%;
    }

    &__mail,
    &__phone {
      font-size: 22px;
      color: #78353E;
      margin: 0;
      text-align: left;
    }

    &__media-container {
      width: 100%;
      margin: 40px 0 0 0;

      @media screen and (max-width: 1200px) {
        order: -1;
        margin: 0;
        width: 50%;
      }

      @media screen and (max-width: 680px) {
        order: 1;
        margin: 20px 0 0 0;
      }
    }

    &__media-icon {
      fill: #644C5C;
      cursor: pointer;

      &:not(:last-child) {
        margin: 0 10px 0 0;
      }
    }

    &__navigation {
      max-width: calc(100% - 280px);
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 45px 0 0;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
        padding: 0;
      }

      @media screen and (max-width: 680px) {
        flex-direction: column;
      }
    }

    &__column {
      display: flex;
      flex-direction: column;
      //margin: 0 120px 0 0;
      width: 260px;

      @media screen and (max-width: 1200px) {
        width: 50%;
      }

      @media screen and (max-width: 680px) {
        &:not(:last-child) {
          margin: 0 0 40px 0;
        }
        width: 100%;
      }
    }

    &__column-title {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      color: #064848;
      margin: 0 0 15px 0;
    }

    &__column-item {
      text-decoration: none;
      color: #232323;
      font-size: 16px;
      margin: 0 0 15px 0;
      transition: color .2s;

      &:hover {
        color: #78353E;
      }
    }

    &__arrow-to-top-button {
      position: absolute;
      right: 140px;
      top: 72px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FEF8F2;
      border-radius: 50px;
      cursor: pointer;

      @media screen and (max-width: 1200px) {
        top: 60px;
        right: 70px;
      }

      @media screen and (max-width: 680px) {
        right: 30px;
      }
    }

    &__arrow-icon {
      fill: #064848;
      transform: rotate(-90deg);
    }

    &__bottom-column {
      //margin: 0 120px 0 0;
      //width: 260px;
      color: #575757;
      width: calc((100% - 280px)/2);

      @media screen and (max-width: 680px) {
        margin: 0 0 15px 0;
      }
    }

    &__contacts-wrapper {

      @media screen and (max-width: 1200px) {
        display: flex;
        margin: 30px 0 60px 0;
      }

      @media screen and (max-width: 680px) {
        flex-direction: column;
      }
    }
  }
</style>
