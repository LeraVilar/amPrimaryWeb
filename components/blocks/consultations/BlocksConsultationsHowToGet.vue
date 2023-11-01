<template>
  <div class="consultations-map__address-box" id="consultations-map__address-box">
    <h2 class="consultations-map__title">
      Как добраться до клиники
    </h2>
    <div class="consultations-map__address">
      г. Москва, Товарищеский переулок, 10, стр. 2
    </div>
  </div>
  <div class="consultations-map__container">
    <yandex-map
      class="consultations-map__map"
      v-if="isShowMap"
      :coordinates="[55.742185, 37.662577]"
    >
      <yandex-marker
        :marker-id="1"
        :icon="iconSettings"
        :coordinates="[55.742185, 37.662577]"
      ></yandex-marker>
    </yandex-map>
  </div>
</template>

<script>
  export default {

    setup () {
      const isShowMap = ref(false)

      const iconSettings = {
        layout: 'default#image', // 'default#imageWithContent' для использования с контентом
        imageHref: '@/assets/images/arrow-right.png', // адрес изображения или data:image/svg+xml;base64
        imageSize: [43, 55], // размер иконки в px
        imageOffset: [-22, -55], // смещение иконки в px,
        /* Следующие поля актуальны для layout: 'default#imageWithContent' */
        content: 'some content here', // содержимое контента
        contentOffset: [-22, -55], // смещение контента в px,
        contentLayout: '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>' // строковый HTML шаблон для контента
      }

      onMounted(() => {
        isShowMap.value = true
      })

      return {
        isShowMap,
        iconSettings
      }
    }
  }
</script>

<style lang="scss" scoped>
  .consultations-map {

    &__container {
      width: 100%;
      height: 470px;

      @media screen and (max-width: 1200px) {
        height: 600px;
      }

      @media screen and (max-width: 1200px) {
        height: 500px;
      }
    }

    &__map {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      overflow: hidden;
    }

    &__address-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 150px 0 40px 0;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: normal;
      }
    }

    &__title {
      color: #644C5C;
      margin: 0;
      font-size: 38px;

      @media screen and (max-width: 1200px) {
        margin: 0 0 20px 0;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__address {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      color: #232323;
    }

  }

  :deep(.ymaps-2-1-79-controls__toolbar) {
    display: none;
  }

  :deep(.ymaps-2-1-79-controls-pane) {
    display: none;
  }

  :deep(.ymaps-2-1-79-copyrights-pane) {
    display: none;
  }
</style>
