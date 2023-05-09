<template>
  <div class="section-container">
    <blocks-intro-main />
    <blocks-description-block class="section-block" />
  </div>
  <div class="background-violet section-block">
    <div class="section-container">
      <blocks-test-block />
    </div>
  </div>
  <div class="section-container">
    <blocks-our-suggestions-block class="section-block" />
    <blocks-if-you-block class="section-block" />
    <blocks-work-format class="section-block" id="workFormat" />
    <blocks-main-swiper headingSlider="Команда" titleSlider='Команда Академии осознанного материнства — это вовлеченные специалисты, обладающие необходимыми знаниями и навыками'/>
    <blocks-description-minor class="section-block" />
  </div>
  <div class="background-violet section-block">
    <div class="section-container">
      <blocks-command-description />
    </div>
  </div>
  <div class="section-block section-container">
    <blocks-reviews-block :reviewsIsShow="true" heading="Мы уже помогли многим женщинам"/>
    <blocks-useful-articles-main />
    <blocks-media-articles :isMain="true" />
    <blocks-message-us class="section-block" />
  </div>
</template>
<style lang="scss">
  .nav-btn {
    overflow: initial;
    opacity: 1;
    background-color: rgba(6, 72, 72, 1);
    background-image: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    // left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%); 

    &::after {
      content: '';
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