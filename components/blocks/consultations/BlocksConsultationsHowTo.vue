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
            По телефону или написать в WhatsApp
          </div>
          <div class="how-to-block__media-box">
            <a href="https://wa.me/79869944798">
              <svg-media-phone class="how-to-block__media-icon" />
            </a>
            <svg-media-whats-app class="how-to-block__media-icon" />
          </div>
        </div>
      </div>
      <div class="how-to-block__step-item">
        <h4 class="how-to-block__step-item-title">
          2. Вам предложат заполнить анкету
        </h4>
        <div class="how-to-block__step-item-content">
          <div class="how-to-block__step-item-text">
            На основании ситуации, описанной в анкете, доктор Элисо примет вас лично или направит к одному из профильных
            врачей команды. Если вам нужен другой специалист (не гинеколог), то ассистенты предоставят вам контакты
          </div>
        </div>
      </div>
      <div class="how-to-block__step-item">
        <h4 class="how-to-block__step-item-title">
          3. Встреча со специалистом
        </h4>
        <div class="how-to-block__step-item-content">
          <div class="how-to-block__step-item-text">
            В назначенное время вы встретитесь со специалистом очно в клинике <b>Крэде Эксперто.</b>
            Информацию по онлайн консультации вам предоставит ассистент, когда уточнит все детали.
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
      color: #644C5C;
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
      background: #ECE7E1;
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
      color: #78353E;
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

    &__step-item-text {
      font-size: 16px;
      line-height: 24px;
      color: #232323;
    }

    &__media-box {
      margin: 10px 0 0 0;
    }

    &__media-icon {
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
