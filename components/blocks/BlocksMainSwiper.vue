<template>
  <div class="main-swiper">
    <svg-heart-icon class="main-swiper__heart" />
    <svg-star class="main-swiper__star" />
    <h1 class="main-swiper__title">
      {{ headingSlider }}
    </h1>
    <div class="main-swiper__text">
      {{ titleSlider }}
    </div>
    <div class="main-swiper__swiper-block">
      <swiper
        :modules="modules"
        :navigation="{
          prevEl: prevT,
          nextEl: nextT,
        }"
        :space-between="40"
        :breakpoints="{ 1200:{ slidesPerView: 4}, 610:{ slidesPerView: 2 }, 0:{ slidesPerView: 1 } }"
        class="swiper"
      >
        <swiper-slide v-for="(item, index) in store.getSliderComand" :key="index">
          <elements-main-swiper-item
            :title="item.fullName"
            :text="item.title"
            :photo="'http://95.163.236.196:1337' + item.avatar.data.attributes.url"
            :modalHeading="item.popupComand.title"
            :modalTitle="item.popupComand.About"
            @openModal="openModal"
          />
        </swiper-slide>
      </swiper>
      <div ref="prevT" class="swiper-button-prev nav-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="yellow">
          <path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff"/>
        </svg>
      </div>
      <div ref="nextT" class="swiper-button-next nav-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="red">
          <path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff"/>
        </svg>
      </div>
    </div>
    
  </div>
  <div v-if="isModalOpened" class="main-swiper__modal">
    <div class="main-swiper__modal-window">
      <div class="main-swiper__close-cross-button" @click="switchModal" />
      <h3 class="main-swiper__modal-title">
        {{ modalInfo.modalHeading}}
      </h3>
      <ul class="main-swiper__modal-list">
        <li class="main-swiper__modal-item" v-html="modalInfo?.modalTitle" :key="i"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Navigation } from 'swiper';
import { useSliderComand  } from '~~/stores/sliderComand'

// Import Swiper Vue.js components
import  { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      headingSlider: {
        type: String,
        default: ''
      },
      titleSlider: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        modalInfo: {},
        isModalOpened: false
      }
    },
    setup() {
      const store = useSliderComand()
      store.fetchDataSliderComand();

      const prevT = ref(null);
      const nextT = ref(null);
      
      return {
        prevT,
        nextT,
        store,
        modules: [Navigation],
      };
    },
    methods: {
      openModal (params) {
        this.modalInfo = { ...params }
        this.switchModal()
      },
      switchModal () {
        this.isModalOpened = !this.isModalOpened
      }
    },
  }
</script>

<style lang="scss" scoped>
  .main-swiper {
    width: 100%;
    margin: 150px 0 0 0;
    position: relative;

    @media screen and (max-width: 1200px) {
      margin: 90px 0 0 0;
    }

    .swiper {
      @media screen and (max-width: 610px) {
        width: 300px;
        overflow: visible;
      }
    }
    
    
    

    &__title {
      color: #644C5C;
      font-size: 38px;
      text-align: left;
      margin: 0 0 30px 0;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__text {
      max-width: 400px;
      color: #232323;
      font-size: 16px;
      line-height: 24px;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
      }

      @media screen and (max-width: 680px) {
        font-size: 15px;
      }
    }

    &__swiper-block {
      margin: 40px 0 0 0;
    }

    &__heart {
      position: absolute;
      fill: #78353E;
      transform: rotate(50deg);
      top: 30px;
      right: 60px;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__star {
      position: absolute;
      fill: #644C5C;
      top: 120px;
      right: 10px;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.34);
      z-index: 4;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__modal-window {
      width: 760px;
      padding: 60px;
      background-color: #ECE7E1;
      position: relative;
    }

    &__close-cross-button {
      position: absolute;
      top: 23px;
      right: 23px;
      width: 25px;
      height: 25px;
      cursor: pointer;

      &:after,
      &:before {
        position: absolute;
        top: 15px;
        width: 25px;
        height: 1px;
        background-color: #000;
        content: '';
        transform-origin: center;
      }

      &:after {
        transform: rotate(45deg);
      }

      &:before {
        transform: rotate(-45deg);
      }
    }

    &__modal-title {
      color: #644C5C;
      font-size: 26px;
      margin: 0 0 20px 0;
    }

    &__modal-list {
      list-style: none;
      padding: 0;
    }

    &__modal-item {
      &::v-deep(p) {
        font-size: 14px;
        color: #232323;
        margin: 0 0 5px 0;
      }
    }
  }
</style>
