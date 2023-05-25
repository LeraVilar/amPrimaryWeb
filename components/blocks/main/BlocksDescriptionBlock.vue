<template>
  <div  class="main-description">
    <div class="main-description__main-block">
      <div class="main-description__left-column">
        <div class="main-description__position">
          ОСНОВАТЕЛЬНИЦА АКАДЕМИИ
        </div>
        <h2 class="main-description__title">
          Привет! Я Элисо Джобава, профессор, доктор медицинских наук, акушер-гинеколог высшей категории
        </h2>
        <ul class="main-description__list">
          <li class="main-description__list-item">
            Более 20 лет я помогаю женщинам разных возрастов найти общий
            язык со своим организмом и решить даже самые сложные проблемы. Моя глобальная цель — сделать жизнь каждой
            женщины более гармоничной и счастливой.
          </li>
          <li class="main-description__list-item">
            Академия осознанного материнства — мой флагманский проект, который объединил компетентных специалистов
            и экспертов в области женского здоровья.
          </li>
        </ul>
      </div>
      <div class="main-description__right-column">
        <img class="main-description__image" src="@/assets/images/MainPageDescriptionImage.png" alt="" />
        <svg-almost-circle class="main-description__image-circle-figure" />
        <svg-heart-icon class="main-description__image-heart-figure" />
        <svg-arrow  class="main-description__image-arrow-figure" />
        <svg-union class="main-description__image-union-figure" />
      </div>
    </div>
    <div class="main-description__sub-block">
      <div class="main-description__sub-left-column">
        <h2 class="main-description__sub-block-title">
          Мы полностью раскрываем тему женского здоровья и открыто говорим о том, что вас волнует
        </h2>
      </div>
      <div class="main-description__sub-right-column">
        <span class="main-description__sub-block-text">
          Мы исходим из принципов доказательной и интегративной медицины, относимся ко всему женскому организму,
          как к единому целому, доступно объясняем сложные моменты и поддерживаем вас в самые ответственные периоды жизни.
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main-description {
    width: 100%;
    display: flex;
    flex-direction: column;

    &__main-block,
    &__sub-block {
      display: flex;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__left-column {
      max-width: 55%;
      margin: 0 80px 0 0;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
        margin: 50px 0 0 0;
      }
    }

    &__right-column {
      position: relative;
      max-width: calc(45% - 80px);

      @media screen and (max-width: 1200px) {
        order: -1;
        max-width: 50%;
      }

      @media screen and (max-width: 680px) {
        max-width: 100%;
      }
    }

    &__sub-left-column {
      max-width: 55%;
      margin: 0 80px 0 0;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
        margin: 0;
      }
    }

    &__sub-right-column {
      position: relative;
      max-width: calc(45% - 80px);

      @media screen and (max-width: 1200px) {
        max-width: 100%;
        margin: 20px 0 0 0;
      }
    }

    &__position {
      color: #232323;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0.03em;
    }

    &__title {
      color: #644C5C;
      font-weight: 700;
      font-size: 32px;
      line-height: 130%;
      margin: 20px 0 0 0;

      @media screen and (max-width: 1200px) {
        font-size: 30px;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__list-item {
      position: relative;
      font-size: 16px;
      line-height: 150%;
      color: #232323;
      list-style: none;
      margin: 20px 0 0 0;

      &:first-child {
        margin: 40px 0 0 0;
      }

      &::marker {
        display: none;
      }

      &:before {
        position: absolute;
        left: -35px;
        top: 5px;
        width: 25px;
        height: 15px;
        content: '';
        background-image: url("../../../assets/images/arrow-right.png");
        background-repeat: no-repeat;
      }

      @media screen and (max-width: 680px) {
        font-size: 15px;
      }
    }

    &__image {
      width: 100%;
    }

    &__image-circle-figure {
      fill: #C99D7A;
      position: absolute;
      left: 0;
      top: 0;
    }

    &__image-heart-figure {
      fill: #78353E;
      position: absolute;
      right: 0;
      top: 0;
    }

    &__image-arrow-figure {
      fill: #644C5C;
      position: absolute;
      transform: rotate(-30deg);
      right: -110px;
      top: 30%;

      @media screen and (max-width: 680px) {
        display: none;
      }
    }

    &__image-union-figure {
      fill: #C5B1B2;
      position: absolute;
      right: 0;
      bottom: 15%;
    }

    &__sub-block {
      margin: 65px 0 0 0;
    }

    &__sub-block-title {
      color: #644C5C;
      font-weight: 700;
      font-size: 32px;
      line-height: 130%;
      margin: 0;

      @media screen and (max-width: 1200px) {
        font-size: 30px;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__sub-block-text {
      font-size: 16px;
      line-height: 150%;
      color: #232323;

      @media screen and (max-width: 680px) {
        font-size: 15px;
      }
    }
  }
</style>
