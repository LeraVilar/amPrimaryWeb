<template>
  <div class="consultations-about" id="consultations-about">
    <div class="consultations-about__main-block">
      <div class="consultations-about__left-column">
        <h2 class="consultations-about__title">
          Я, Элисо Джобава, и моя команда проводим консультации в клинике Кредэ
          Эксперто, г. Москва
        </h2>
        <ul class="consultations-about__list">
          <li class="consultations-about__list-item">
            Каждый врач гинеколог команды — это мой ученик и профессионал
            высокого уровня. Каждый имеет свою специализацию и любимые темы,
            обладает всеми необходимыми навыками и собственными “фишками”. Всё
            лечение мы строим совместно под моим контролем.
          </li>
          <li class="consultations-about__list-item">
            В команде
            <b>5 врачей гинекологов и 5 врачей других специальностей</b> —
            остеопат, ЛОР, эндокринолог, уролог-андролог, флеболог.
          </li>
        </ul>
      </div>
      <div class="consultations-about__right-column">
        <img
          class="consultations-about__image"
          src="@/assets/images/ConsultationsPageDescPhoto.png"
          alt=""
        />
        <svg-arrow class="consultations-about__image-arrow-figure" />
        <svg-soft-icon class="consultations-about__image-soft-figure" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.consultations-about {
  display: flex;
  flex-direction: column;

  &__main-block {
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

  &__position {
    color: #232323;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.03em;
  }

  &__title {
    color: #644c5c;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    margin: 20px 0 0 0;
    max-width: 579px;

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
      content: "";
      background-image: url("assets/images/arrow-right.png");
      background-repeat: no-repeat;
    }
  }

  &__image {
    width: 100%;
    max-width: 400px;

    @media screen and (max-width: 680px) {
      max-width: 100%;
    }
  }

  &__image-arrow-figure {
    fill: #c99d7a;
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(50deg);

    @media screen and (max-width: 1200px) {
      transform: rotate(50deg) scale(0.7);
      left: -60px;
    }

    @media screen and (max-width: 680px) {
      transform: rotate(50deg) scale(1);
      left: 0;
    }
  }

  &__image-soft-figure {
    fill: #839389;
    position: absolute;
    right: 0;
    bottom: 15%;
    transform: scale(2);

    @media screen and (max-width: 1200px) {
      transform: scale(1);
    }

    @media screen and (max-width: 680px) {
      transform: scale(2);
    }
  }
}
</style>
