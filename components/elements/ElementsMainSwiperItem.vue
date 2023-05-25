<template>
  <div class="swiper-item">
    <div>
      <div class="swiper-item__image-box">
        <img class="swiper-item__image" :src="photo" />
      </div>
      <div class="swiper-item__title">
        {{ title }}
      </div>
      <div class="swiper-item__text">
        {{ text }}
      </div>
    </div>
    <div class="swiper-item__link" @click="$emit('openModal', {modalHeading, modalTitle})">
      Подробнее
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      photo: {
        type: String,
        default: ''
      },
      modalHeading: {
        type: String,
        default: ''
      },
      modalTitle: {
        type: String,
        default: ''
      },
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-item {
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__image-box {
      position: relative;
      width: 100%;
      height: 0;
      padding: 0 0 80% 0;
    }

    &__image {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 15px;
      object-fit: cover;
    }

    &__title {
      color: #78353E;
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;
      margin: 20px 0 0 0;
    }

    &__text {
      font-size: 16px;
      line-height: 24px;
      color: #232323;
      margin: 15px 0 0 0;
    }

    &__link {
      margin: 30px 0 0 0;
      text-decoration: underline;
      color: #064848;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
  }
</style>