<template>
  <div class="school-video">
    <div class="school-video__left-column">
      <h2 class="school-video__title" id="school-video__title">
        Посмотрите ознакомительное видео о вебинарах для беременных
      </h2>
      <div class="school-video__text">
        В нём вы найдете подробное описание программы, а также познакомитесь со
        специалистами, которые будут сопровождать вас во время изучения
        материалов
      </div>
    </div>
    <div class="school-video__right-column">
      <div
        class="school-video__video"
        style="position: relative; padding-top: 56.25%; width: 100%"
      >
        <iframe
          src="https://kinescope.io/embed/202321099"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          frameborder="0"
          allowfullscreen
          style="position: absolute; width: 100%; height: 100%; top: 0; left: 0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.school-video {
  padding: 80px 0;
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  &__left-column,
  &__right-column {
    width: 40%;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }

  &__left-column {
    margin: 0 20% 0 0;

    @media screen and (max-width: 1200px) {
      margin: 50px 0 0 0;
    }
  }

  &__title {
    font-size: 26px;
    line-height: 130%;
    color: #fef8f2;
    margin: 0;
  }

  &__text {
    margin: 20px 0 0 0;
    font-size: 16px;
    line-height: 150%;
    color: #fef8f2;

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  &__video {
    border-radius: 15px;
    overflow: hidden;
    height: 260px;
  }
}
</style>
