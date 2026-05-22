<template>
  <div class="school-intro-block__container" id="school-intro-block__container">
    <svg-arrow class="school-intro-block__arrow" />
    <svg-star-nine class="school-intro-block__star" />
    <svg-heart-icon class="school-intro-block__heart" />
    <div class="school-intro-block__figures-block-left">
      <img
        src="@/assets/images/school/starImage.png"
        class="school-intro-block__figures-rectangle-image"
      />
    </div>
    <h1 class="school-intro-block__title">
      Цикл вебинаров по беременности — место, где будущие<br />
      мамы обретают спокойствие
    </h1>
    <div class="school-intro-block__text">
      Здесь вы получите новые знания и будете чувствовать себя уверенно в любой
      ситуации
    </div>
    <nuxt-link to="/school#schoolProgram">
      <elements-buttons-secondary title="Подробнее" />
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.school-intro-block {
  &__container {
    width: 100%;
    position: relative;
    padding: 80px 0;
    background-color: #c5b1b2;
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
      width: auto;
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
    max-width: 500px;
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

  &__figures-rectangle-image {
    position: absolute;
    top: 0;
    left: -50%;

    @media screen and (max-width: 680px) {
      transform: scale(0.8);
    }
  }

  &__figures-block-right {
    top: 30%;
    right: 30px;
  }

  &__arrow {
    position: absolute;
    fill: #644c5c;
    transform: rotate(40deg);
    top: 20px;
    left: -60px;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__heart {
    position: absolute;
    fill: #064848;
    bottom: 60px;
    right: 150px;
    transform: rotate(50deg);

    @media screen and (max-width: 1200px) {
      right: 0;
      transform: rotate(50deg) scale(0.5);
    }
  }

  &__star {
    position: absolute;
    fill: #fef8f2;
    bottom: 20px;
    right: 110px;
  }
}
</style>
