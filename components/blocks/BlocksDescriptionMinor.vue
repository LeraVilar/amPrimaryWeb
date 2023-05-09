<template>
  <div  class="minor-description">
    <div class="minor-description__main-block">
      <div class="minor-description__left-column">
        <div class="minor-description__position">
          {{ label }}
        </div>
        <h2 class="minor-description__title">
          {{ title }}
        </h2>
        <ul class="minor-description__list">
          <li v-for="(item, i) in listItems" :key="i" class="minor-description__list-item">
            {{ item }}
          </li>
        </ul>
        <div class="minor-description__button-container">
          <router-link class="minor-description__button" to="/about">
            Подробнее об Элисо
          </router-link>
        </div>
      </div>
      <div class="minor-description__right-column">
        <img class="minor-description__image" src="@/assets/images/MainPageDescriptionImageMinor.png" alt="" />
        <svg-half-circle class="minor-description__image-circle-figure" />
        <svg-heart-icon class="minor-description__image-heart-figure" />
        <svg-arrow  class="minor-description__image-arrow-figure" />
        <svg-gex class="minor-description__image-gex-figure" />
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      label: {
        type: String,
        default: 'ОСНОВАТЕЛЬНИЦА АКАДЕМИИ'
      },
      title: {
        type: String,
        default: 'Элисо Джобава — врач-акушер высшей категории, профессор, доктор медицинских наук'
      },
      listItems: {
        type: Array,
        default: () => [
          'Международный эксперт по ведению осложнённой беременности',
          'Специалист по невынашиванию беременности, патологии системы гемостаза и тромбофилиям',
          'Специалист по подготовке и ведению «зрелой» беременности (35+)'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.minor-description {

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
    color: #644C5C;
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    margin: 20px 0 0 0;
    max-width: 480px;
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
      background-image: url("assets/images/arrow-right.png");
      background-repeat: no-repeat;
    }
  }

  &__image {
    width: 466px;

    @media screen and (max-width: 550px) {
      width: 100%;
    }

  }

  &__image-circle-figure {
    fill: #C5B1B2;
    position: absolute;
    transform: scale(3);
    right: 40px;
    bottom: 10px;

    @media screen and (max-width: 1200px) {
      right: -30%;
    }

    @media screen and (max-width: 680px) {
      right: 40px;
      bottom: 80%;
      transform: scale(2);
    }
  }

  &__image-heart-figure {
    fill: #C99D7A;
    position: absolute;
    transform: rotate(70deg);
    right: 0;
    bottom: 20%;

    @media screen and (max-width: 1200px) {
      bottom: 30%;
      right: -50%;
    }

    @media screen and (max-width: 680px) {
      right: 0;
      transform: scale(0.5);
    }
  }

  &__image-arrow-figure {
    fill: #064848;
    position: absolute;
    transform: rotate(80deg);
    left: -50px;
    top: 0;

    @media screen and (max-width: 1200px) {
      left: unset;
      right: -30px;
    }

    @media screen and (max-width: 680px) {
      display: none;
    }
  }

  &__image-gex-figure {
    fill: #644C5C;
    position: absolute;
    right: -40px;
    bottom: 12%;
    transform: scale(1.5);

    @media screen and (max-width: 1200px) {
      right: -65%;
      bottom: 15%;
    }

    @media screen and (max-width: 680px) {
      right: unset;
      left: 30px;
    }
  }

  &__button {
    font-size: 18px;
    font-weight: 600;
    color: #FEF8F2;
    padding: 18px 45px;
    background: #064848;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    @media screen and (max-width: 680px) {
      font-size: 16px;
    }
  }

  &__button-container {
    display: flex;
    margin: 50px 0 0 0;
  }
}
</style>
