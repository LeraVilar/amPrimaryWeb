<template>
  <div class="how-to-block">
    <h2 class="how-to-block__title" id="consultationSignIn">
      Как записаться на консультацию
    </h2>
    <div class="how-to-block__steps-list">
      <div class="how-to-block__step-item">
        <h4 class="how-to-block__step-item-title">
          1. Свяжитесь с ассистентами удобным способом
        </h4>
        <div class="how-to-block__step-item-content">
          <div class="how-to-block__step-item-text">
            <a href="https://t.me/AssistentDzhobava" target="_blank"
              >Телеграмм: @AssistentDzhobava</a
            >
            <br />
            <a href="tel:+79869944798">Телефон: +79869944798</a> <br />
            <a href="mailto:dzhobava@c-experto.ru"
              >Почта: dzhobava@c-experto.ru</a
            >
          </div>
          <div class="how-to-block__media-box">
            <nuxt-link to="https://t.me/AssistentDzhobava" target="_blank">
              <svg-media-telegram class="how-to-block__media-icon" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="how-to-block__step-item">
        <h4 class="how-to-block__step-item-title">
          2. Встреча со специалистом
        </h4>
        <div class="how-to-block__step-item-content">
          <div class="how-to-block__step-item-text">
            В назначенное время вы встретитесь со специалистом в клинике
            <b>Крэде Эксперто.</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.how-to-block {
  width: 100%;

  @media screen and (max-width: 1200px) {
    margin: 120px 0;
  }

  @media screen and (max-width: 680px) {
    margin: 90px 0;
  }

  &__title {
    color: #644c5c;
    font-size: 38px;
    line-height: 130%;
    margin: 0 0 40px 0;

    @media screen and (max-width: 1200px) {
      font-size: 36px;
    }

    @media screen and (max-width: 680px) {
      font-size: 28px;
    }
  }

  &__step-item {
    background: #ece7e1;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin: 0 0 15px 0;
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }

  &__step-item-title {
    color: #78353e;
    font-size: 22px;
    line-height: 130%;
    margin: 0;

    @media screen and (max-width: 1200px) {
      margin: 0 0 15px 0;
    }
  }

  &__step-item-content {
    width: 50%;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }

  &__step-item-text a {
    font-size: 16px;
    line-height: 24px;
    color: #232323;
    text-decoration: none;
  }

  &__media-box {
    margin: 10px 0 0 0;
  }

  &__media-icon {
    fill: #644c5c;
    cursor: pointer;

    &:not(:last-child) {
      margin: 0 10px 0 0;
    }

    @media screen and (max-width: 680px) {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
