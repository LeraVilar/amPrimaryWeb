<template>
  <div class="sign-up-block" id="sign-up-block">
    <h2 class="sign-up-block__title">
      Ученицы Школы беременных имеют приоритет в записи на прием к профессору
      Элисо Джобава и врачам ее команды в клинике
    </h2>
    <div class="sign-up-block__text">
      Укажите этот момент при заполнении анкеты
    </div>
    <!-- <div class="sign-up-block__button-container">
      <div class="sign-up-block__button">
        <a href="https://wa.me/79015316670">Записаться</a>
      </div>
    </div> -->
    <svg-almost-circle class="sign-up-block__almost-circle" />
    <svg-soft-icon class="sign-up-block__soft" />
    <svg-pine-icon class="sign-up-block__pine" />
    <svg-union class="sign-up-block__union" />
  </div>
</template>

<style lang="scss" scoped>
.sign-up-block {
  position: relative;
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 60px 0;
  }

  &__title {
    max-width: 520px;
    text-align: center;
    color: #fef8f2;
    font-size: 26px;
    line-height: 130%;
    margin: 0 0 20px 0;
  }

  &__text {
    color: #fef8f2;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
  }

  &__button-container {
    display: flex;
    justify-content: center;
    margin: 40px 0 0 0;
  }

  &__button {
    font-weight: 600;
    color: #644c5c;
    background: #fef8f2;
    border-radius: 5px;
    padding: 18px 45px;
    font-size: 18px;

    a {
      color: #644c5c;
      text-decoration: none;
    }

    @media screen and (max-width: 680px) {
      font-size: 16px;
    }
  }

  &__almost-circle {
    position: absolute;
    transform: scale(1.2);
    left: 0;
    top: 50%;
    fill: #839389;

    @media screen and (max-width: 1200px) {
      top: unset;
      left: 20px;
      bottom: 10%;
    }

    @media screen and (max-width: 680px) {
      transform: scale(1);
      bottom: -20px;
    }
  }

  &__soft {
    position: absolute;
    transform: scale(1.2);
    left: 8%;
    top: 60%;
    fill: #fef8f2;

    @media screen and (max-width: 1200px) {
      left: -40px;
      top: unset;
      bottom: 30%;
    }

    @media screen and (max-width: 680px) {
      display: none;
    }
  }

  &__pine {
    position: absolute;
    transform: scale(1.2);
    right: 5%;
    top: 20%;
    fill: #fef8f2;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__union {
    position: absolute;
    transform: rotate(50deg) scale(3);
    right: 0;
    top: -20px;
    fill: #c5b1b2;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
