section-container
<template>
  <div class="section-container">
    <blocks-intro-main />
    <div class="work-format__message-us-block">
      <svg-almost-circle class="work-format__almost-circle" />
      <svg-union class="work-format__union" />
      <svg-arrow class="work-format__arrow" />
      <svg-plus-icon class="work-format__plus" />
      <h2 class="work-format__message-us-title">Полезно для каждой женщины</h2>
      <p class="work-format__message-us-text">
        Разбираю женское здоровье простым языком. <br />
        Подписывайтесь на мой канал — там больше полезной информации.
      </p>
      <div class="work-format__message-us-button-container">
        <elements-buttons-secondary
          link="https://t.me/dzhobavaeliso"
          title="Перейти в канал"
        />
      </div>
    </div>
    <blocks-description-block class="section-block" />
  </div>
  <!-- <div class="background-violet section-block">
    <div class="section-container">
      <blocks-test-block />
    </div>
  </div> -->
  <div class="section-container">
    <blocks-our-suggestions-block class="section-block" />
    <blocks-if-you-block class="section-block" />
    <blocks-work-format class="section-block" id="workFormat" />
    <!-- <blocks-main-swiper
      headingSlider="Команда"
      titleSlider="Команда Академии осознанного материнства — это вовлеченные специалисты, обладающие необходимыми знаниями и навыками"
    /> -->
    <blocks-description-minor class="section-block" />
  </div>
  <!-- <div class="background-violet section-block">
    <div class="section-container">
      <blocks-command-description />
    </div>
  </div> -->
  <div class="section-block section-container">
    <blocks-reviews-block
      :reviewsIsShow="true"
      heading="Мы уже помогли многим женщинам"
    />
    <blocks-useful-articles-main />
    <blocks-media-articles :isMain="true" />
    <blocks-message-us class="section-block" />
  </div>
</template>
<style lang="scss">
.work-format {
  width: 100%;

  &__message-us-block {
    position: relative;
    padding: 80px 0;
    background: #c5b1b2;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;

    @media screen and (max-width: 1200px) {
      width: 680px;
      padding: 60px 40px;
    }

    @media screen and (max-width: 680px) {
      width: 100%;
      padding: 60px 30px;
    }
  }

  &__message-us-title {
    color: #fef8f2;
    max-width: 650px;
    text-align: center;
    font-size: 38px;
    line-height: 138%;
  }

  &__message-us-text {
    max-width: 600px;
    text-align: center;
    color: #fef8f2;
    font-size: 16px;
    line-height: 24px;
  }

  &__message-us-button-container {
    display: flex;
    justify-content: center;
  }

  &__message-us-button {
    padding: 18px 45px;
    background-color: #fef8f2;
    border-radius: 5px;
    color: #644c5c;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    @media screen and (max-width: 680px) {
      font-size: 16px;
    }
  }

  &__almost-circle {
    position: absolute;
    fill: #78353e;
    right: 145px;
    top: -5px;
    transform: scale(1.4) rotate(120deg);

    @media screen and (max-width: 1200px) {
      top: unset;
      bottom: 100px;
      right: -40px;
    }

    @media screen and (max-width: 1200px) {
      bottom: unset;
      top: -30px;
      right: unset;
      left: 20px;
      transform: scale(1) rotate(120deg);
    }
  }

  &__union {
    position: absolute;
    fill: #644c5c;
    right: 65px;
    top: 70px;
    transform: rotate(45deg);

    @media screen and (max-width: 1200px) {
      top: unset;
      right: 40px;
      bottom: 30px;
    }

    @media screen and (max-width: 1200px) {
      bottom: unset;
      top: -30px;
    }
  }

  &__arrow {
    position: absolute;
    fill: #c99d7a;
    transform: rotate(45deg);
    left: 140px;
    top: 50%;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__plus {
    position: absolute;
    fill: #fef8f2;
    left: 100px;
    top: 65%;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
}

.nav-btn {
  overflow: initial;
  opacity: 1;
  background-color: rgba(6, 72, 72, 1);
  background-image: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  // left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%);

  &::after {
    content: "";
  }

  @media screen and (max-width: 680px) {
    top: -30px;
  }
}

.swiper-button-prev {
  transform: rotate(180deg);
  z-index: 111;
  left: -60px;

  @media screen and (max-width: 680px) {
    left: 0px;
  }
}

.swiper-button-next {
  right: -80px;

  @media screen and (max-width: 680px) {
    right: calc(100% - 120px);
  }
}
</style>
