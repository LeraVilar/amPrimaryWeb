<template>
  <div class="consultations-intro" id="consultations-intro">
    <h2 class="consultations-intro__title">Консультации</h2>
    <div class="consultations-intro__text">
      Индивидуальные консультации с Элисо Джобава и ее командой
    </div>
    <div class="consultations-intro__button-container">
      <nuxt-link to="/consultations#consultationSignIn">
        <elements-buttons-secondary title="Подробнее" />
      </nuxt-link>
    </div>
    <svg-oval-icon class="consultations-intro__oval" />
    <svg-cheese-icon class="consultations-intro__cheese" />
    <img
      class="consultations-intro__image"
      src="@/assets/images/consultationsIntroImage.png"
    />
    <svg-plus-icon class="consultations-intro__plus" />
    <svg-heart-icon class="consultations-intro__heart" />
  </div>
</template>

<style lang="scss" scoped>
.consultations-intro {
  position: relative;
  width: 100%;
  background: #78353e;
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
    color: #fef8f2;
    font-size: 38px;
    margin: 0 0 20px 0;

    @media screen and (max-width: 680px) {
      font-size: 30px;
    }
  }

  &__text {
    color: #fef8f2;
    font-size: 16px;
    line-height: 24px;
    max-width: 430px;
    text-align: center;
  }

  &__button {
    color: #644c5c;
    padding: 18px 45px;
    background: #fef8f2;
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
    fill: #fef8f2;
    right: 120px;
    bottom: 110px;
    transform: rotate(50deg);

    @media screen and (max-width: 1200px) {
      transform: rotate(50deg) scale(0.7);
      right: 50px;
      bottom: 50px;
    }

    @media screen and (max-width: 680px) {
      transform: rotate(50deg) scale(0.4);
      right: unset;
      left: 55px;
      bottom: unset;
      top: 5px;
    }
  }

  &__oval {
    position: absolute;
    fill: #c5b1b2;
    transform: scale(3);
    right: 25px;
    bottom: 35px;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__cheese {
    position: absolute;
    fill: #c99d7a;
    bottom: -25px;
    right: 100px;

    @media screen and (max-width: 1200px) {
      right: 50px;
    }

    @media screen and (max-width: 680px) {
      bottom: unset;
      top: -20px;
    }
  }

  &__image {
    position: absolute;
    left: -65px;
    top: calc((100% - 152px) / 2);

    @media screen and (max-width: 1200px) {
      top: -30px;
      left: -55px;
      width: 110px;
    }

    @media screen and (max-width: 680px) {
      width: 90px;
      left: 40px;
    }
  }

  &__plus {
    position: absolute;
    fill: #c99d7a;
    left: -5px;
    bottom: 60px;
    transform: scale(1.5);

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
