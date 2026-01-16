<template>
  <div class="intro-block__container" id="intro-block__container">
    <div class="intro-block__figures-block-left">
      <svg-star class="intro-block__figures-star" />
      <svg-union class="intro-block__figures-union" />
      <img
        src="~assets/images/photo-rectangle.png"
        class="intro-block__figures-rectangle-image"
      />
    </div>
    <div class="intro-block__figures-block-right">
      <svg-cheese-icon class="intro-block__figures-ellipse" />
      <lazy-svg-half-circle class="intro-block__figures-half-circle" />
      <img
        src="~assets/images/photo-octagon.png"
        class="intro-block__figures-octagon-image"
      />
    </div>
    <svg-arrow class="intro-block__figures-arrow" />
    <h1 class="intro-block__title">Доктор Эля: территория здоровья</h1>
    <div class="intro-block__text">
      Научитесь правильно заботиться о себе вместе со специалистами
      международного уровня
    </div>
    <elements-buttons-secondary
      title="Выбрать формат работы"
      @click="$router.push('/#workFormats')"
    />
  </div>
</template>

<style lang="scss" scoped>
.intro-block {
  &__container {
    width: 100%;
    position: relative;
    padding: 80px 0;
    background-color: #839389;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px) {
      width: 680px;
      height: auto;
      padding: 60px 50px;
    }

    @media screen and (max-width: 680px) {
      width: 100%;
      padding: 100px 30px 60px 30px;
    }
  }

  &__title {
    color: #fef8f2;
    font-size: 38px;
    line-height: 138%;
    text-align: center;

    @media screen and (max-width: 680px) {
      font-size: 30px;
    }
  }

  &__text {
    max-width: 400px;
    text-align: center;
    color: #fef8f2;
    font-size: 16px;
    line-height: 24px;
  }

  &__figures-block-left,
  &__figures-block-right {
    position: absolute;
    width: 100px;
    height: 100px;
  }

  &__figures-block-left {
    top: 35%;
    left: 0;

    @media screen and (max-width: 1200px) {
      top: unset;
      bottom: 15%;
    }

    @media screen and (max-width: 680px) {
      bottom: unset;
      top: -50px;
      left: 30%;
    }
  }

  &__figures-block-right {
    @media screen and (max-width: 680px) {
      display: none;
    }
  }

  &__figures-star {
    position: absolute;
    top: -30%;
    right: -50%;
    fill: #c99d7a;

    @media screen and (max-width: 1200px) {
      right: -10%;
    }

    @media screen and (max-width: 680px) {
      transform: scale(0.5);
      top: 0;
      right: -10%;
    }
  }

  &__figures-union {
    position: absolute;
    bottom: 0;
    right: -50%;
    fill: #fef8f2;

    @media screen and (max-width: 1200px) {
      right: -20%;
    }

    @media screen and (max-width: 680px) {
      transform: scale(0.5);
    }
  }

  &__figures-rectangle-image {
    position: absolute;
    top: 0;
    left: -50%;
  }

  &__figures-block-right {
    top: 30%;
    right: 30px;
  }

  &__figures-ellipse {
    position: absolute;
    left: 0;
    top: 0;
    fill: #064848;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__figures-half-circle {
    position: absolute;
    bottom: 0;
    right: 0;
    fill: #c5b1b2;
  }

  &__figures-octagon-image {
    position: absolute;
    right: -80%;
    top: -70%;
  }

  &__figures-arrow {
    position: absolute;
    bottom: -35px;
    left: 15%;
    fill: #78353e;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
