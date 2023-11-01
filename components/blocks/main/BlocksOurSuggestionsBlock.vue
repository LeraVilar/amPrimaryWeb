<template>
  <div class="suggestions">
    <h1 class="suggestions__title" id="suggestions__title">
      Что мы предлагаем?
    </h1>
    <div class="suggestions__cards-block">
      <svg-almost-circle class="suggestions__almost-circle" />
      <div class="suggestions__card">
        <h4 class="suggestions__card-title">
          Уникальную информацию
        </h4>
        <div class="suggestions__card-text">
          От врачей и экспертов по вопросам женского здоровья.
          Все, чем мы делимся, проверено опытом, актуально, научно доказано и соответствует принципам функциональной медицины.
        </div>
        <svg-union class="suggestions__union-icon" />
      </div>
      <div class="suggestions__card">
        <h4 class="suggestions__card-title">
          Широкую линейку продуктов и услуг
        </h4>
        <div class="suggestions__card-text">
          От гайдов и инструкций до вебинаров, курсов и очных консультаций. Вы можете выбрать тот формат, который подходит именно вам.
        </div>
      </div>
      <div class="suggestions__card">
        <h4 class="suggestions__card-title">
          Возможность получить независимое «второе мнение»
        </h4>
        <div class="suggestions__card-text">
          Вы можете обратиться к специалистам Академии осознанного материнства за консультацией
          либо получить помощь по вашей ситуации в чатах обратной связи.
        </div>
      </div>
      <div class="suggestions__card">
        <h4 class="suggestions__card-title">
          Подробный разбор нетривиальных и спорных тем
        </h4>
        <div class="suggestions__card-text">
          о состоянии женского организма. Вы получите максимум объективных данных и будете знать,
          как грамотно поступить в любой ситуации.
        </div>
      </div>
      <div class="suggestions__card">
        <svg-arrow class="suggestions__arrow-icon" />
        <h4 class="suggestions__card-title">
          Обучающие программы для специалистов
        </h4>
        <div class="suggestions__card-text">
          Медицинской практики с авторским подходом. Мы помогаем коллегам и делимся прикладными советами.
        </div>
      </div>
      <div class="suggestions__card">
        <h4 class="suggestions__card-title">
          Прочную опору и безусловную поддержку
        </h4>
        <div class="suggestions__card-text">
          Академия осознанного материнства — это сообщество осознанных мам и грамотных профессионалов, которые всегда будут на вашей стороне.
        </div>
        <svg-soft-icon class="suggestions__soft-icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .suggestions {
    width: 100%;

    &__title {
      color: #644C5C;
      font-size: 38px;
      text-align: left;
      font-weight: 700;
      margin: 0 0 40px 0;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
        margin: 0 0 30px 0;
      }
    }

    &__cards-block {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
      }
    }

    &__card {
      position: relative;
      background: #ECE7E1;
      border-radius: 15px;
      padding: 40px 160px 50px 40px;
      height: 240px;

      @media screen and (max-width: 1200px) {
        padding: 40px;
      }

      @media screen and (max-width: 680px) {
        height: 360px;
        padding: 20px;
      }
    }

    &__card-title {
      font-size: 22px;
      color: #644C5C;
      margin: 0 0 20px 0;
    }

    &__card-text {
      font-size: 16px;
      line-height: 24px;
      color: #232323;

      @media screen and (max-width: 680px) {
        font-size: 15px;
      }
    }

    &__union-icon {
      position: absolute;
      bottom: -35px;
      right: 125px;
      fill: #839389;
      transform: scale(2);
    }

    &__almost-circle {
      position: absolute;
      fill: #C5B1B2;
      right: -25px;
      top: 240px;
      transform: rotate(60deg) scale(2.5);

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__arrow-icon {
      position: absolute;
      top: -20px;
      right: 40px;
      fill: #064848;
      transform: rotate(40deg);

      @media screen and (max-width: 680px) {
        top: -30px;
        transform: rotate(40deg) scale(0.5);
      }
    }

    &__soft-icon {
      position: absolute;
      fill: #78353E;
      bottom: -30px;
      right: 100px;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>
