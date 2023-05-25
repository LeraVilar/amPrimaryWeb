<template>
  <div :class="'message-us' +  clazz">
    <svg-union class="message-us__union" />
    <svg-arrow class="message-us__arrow" />
    <svg-pine-icon class="message-us__pine" />
    <svg-cheese-icon class="message-us__cheese" />
    <svg-oval-icon class="message-us__oval" />
    <!-- <svg-star-nine class="message-us__star-nine" /> -->
    <div class="message-us__message-us-title">
      <h3 class="message-us__message-us-title" v-html="label" />
      <div class="message-us__message-us-button-container">
        <elements-buttons-secondary link="https://t.me/academ_mom_bot" title="Написать в Telegram" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: `Остались вопросы?<br> Напишите нам — мы поможем`
      },
      clazz: {
        type: String,
        default: '__message-us-block'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .message-us {
    &__message-us-secondary {
      background-color: #C5B1B2;  
      width: 100%;
      position: relative;
      padding: 80px 20px;
      border-radius: 15px;
      display: flex;
      justify-content: center;
    }

    &__message-us-block {
      width: 100%;
      position: relative;
      padding: 80px 20px;
      background-color: #064848;
      border-radius: 15px;
      display: flex;
      justify-content: center;
    }

    &__message-us-title {
      color: #FEF8F2;
      max-width: 650px;
      text-align: center;
      font-size: 26px;
      line-height: 34px;
      margin: 0;
    }

    &__message-us-button-container {
      display: flex;
      justify-content: center;
      margin: 40px 0 0 0;
    }

    &__message-us-button {
      padding: 18px 45px;
      background-color: #FEF8F2;
      border-radius: 5px;
      color: #644C5C;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
    }

    &__union {
      position: absolute;
      fill: #C5B1B2;
      right: 100px;
      bottom: 100px;
      transform: scale(2);

      @media screen and (max-width: 1200px) {
        right: -20px;
        bottom: 60px;
      }

      @media screen and (max-width: 1260px) {
        transform: scale(1);
        bottom: -20px;
        right: 30px;
      }
    }

    &__arrow {
      position: absolute;
      fill: #C99D7A;
      transform: rotate(75deg);
      left: 90px;
      top: -10px;

      @media screen and (max-width: 1200px) {
        top: -30px;
        left: 50px;
        transform: rotate(75deg) scale(0.7);
      }

      @media screen and (max-width: 1260px) {
        left: 30px;
      }
    }

    &__pine {
      position: absolute;
      fill: #839389;
      top: 80px;
      left: 100px;
      transform: scale(1.2) rotate(-20deg);

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__cheese {
      position: absolute;
      fill: #C99D7A;
      right: -25px;
      bottom: 50px;
      transform: rotate(-30deg);

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__oval {
      position: absolute;
      fill: #839389;
      right: -25px;
      bottom: 120px;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__star-nine {
      position: absolute;
      fill: #FEF8F2;
      top: 110px;
      left: 220px;

      @media screen and (max-width: 1200px) {
        top: 30px;
        left: 30px;
      }

      @media screen and (max-width: 680px) {
        display: none;
      }
    }
  }
</style>
