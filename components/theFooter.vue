<template>
  <footer class="academy-footer">
    <div class="academy-footer__top">
      <div class="academy-footer__logo-block">
        <nuxt-link to="/" class="academy-footer__logo-wrapper">
          <img
            class="academy-footer__logo"
            src="~assets/images/logo.png"
            alt=""
          />
        </nuxt-link>
        <div class="academy-footer__contacts-wrapper">
          <h4 class="academy-footer__mail">d0ctorelya@yandex.ru</h4>
          <h4 class="academy-footer__phone">+79015316670</h4>
          <h4 class="academy-footer__phone">рабочее время: 10:00-19:00</h4>
        </div>
      </div>
      <div class="academy-footer__navigation">
        <div class="academy-footer__column">
          <div class="academy-footer__column-title">Форматы работы</div>
          <router-link class="academy-footer__column-item" to="/projects">
            Персонализированные проекты
          </router-link>
          <router-link class="academy-footer__column-item disabled" to="#">
            Цикл вебинаров по беременности
          </router-link>
          <router-link class="academy-footer__column-item" to="/forMedWorkers">
            Специалистам
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
          <div class="academy-footer__column-title">Информация</div>
          <router-link class="academy-footer__column-item" to="/about">
            Об основательнице
          </router-link>
          <router-link class="academy-footer__column-item" to="/articles">
            Полезные материалы
          </router-link>
          <router-link
            class="academy-footer__column-item"
            to="/articles/#mediaArticles"
          >
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
      <a
        style="color: #644c5c; text-decoration: none; width: 100%"
        :href="
          link +
          '/uploads/Dogovor_oferty_PDF_redakt_77de520822.pdf?updated_at=2026-01-16T14:52:18.849Z'
        "
        target="_blank"
        class="academy-footer__bottom-column"
      >
        Публичная оферта
      </a>
      <a
        style="color: #644c5c; text-decoration: none; width: 100%"
        :href="
          link +
          '/uploads/Soglasie_na_obrabotku_dekabr_2025_1_redakt_15_01_2026_versiya_3_d27681c56b.pdf?updated_at=2026-01-16T14:53:05.180Z'
        "
        target="_blank"
        class="academy-footer__bottom-column"
      >
        Политика персональных данных
      </a>
      <a
        style="color: #644c5c; text-decoration: none; width: 100%"
        :href="
          link +
          '/uploads/Soglasie_na_rassylku_0f4b9f7a84.pdf?updated_at=2026-01-16T14:52:44.972Z'
        "
        target="_blank"
        class="academy-footer__bottom-column"
      >
        Согласие на рассылку
      </a>
      <a
        style="color: #644c5c; text-decoration: none; width: 100%"
        :href="
          link +
          '/uploads/Politika_konfediczialnosti_redakt_versiya_1_2dc4d76b62.pdf?updated_at=2026-01-16T14:53:16.555Z'
        "
        target="_blank"
        class="academy-footer__bottom-column"
      >
        Политика
      </a>
      <a
        href="https://minimasneva.com/?ysclid=ltr3ssungm820287069"
        style="width: 100%"
        class="academy-footer__bottom-column"
      >
        Разработка сайта
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const link = import.meta.env.VITE_URL_API;
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return {
      scrollToTop,
      link,
    };
  },
};
</script>

<style lang="scss" scoped>
.academy-footer {
  position: relative;
  background-color: #ece7e1;
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
    border-top: 1px solid #c5b1b2;
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
    color: #78353e;
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
    transition: color 0.2s;

    &:hover {
      color: #78353e;
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
    background-color: #fef8f2;
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
    width: calc((100% - 280px) / 2);

    @media screen and (max-width: 680px) {
      margin: 0 0 15px 0;
    }
  }

  &__contacts-wrapper {
    margin: auto 0 15px 0;
    text-align: center;
    @media screen and (max-width: 1200px) {
      display: flex;
      margin: 30px 0 60px 0;
    }

    @media screen and (max-width: 680px) {
      flex-direction: column;
    }
  }
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
  &:hover {
    color: unset;
    cursor: default;
  }
}
</style>
