<template>
  <h2 class="heading">Научные статьи</h2>
  <div class="swiper-container">
    <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="3"
    :space-between="40"
    :navigation="{
      prevEl: prev,
      nextEl: next,
    }"
    :breakpoints="{
      1281: {
        slidesPerView: 3,       
        spaceBetween: 30
      },
      500: {
        slidesPerView: 2,       
        spaceBetween: 20
      },
      0: {
        slidesPerView: 1,       
        spaceBetween: 20
      },
    }"
  >
    <swiper-slide class="slide" v-for="(item,i) in store.dataSwiper" :key="i"> 
      <div class="slide-card">
        <p class="year">{{ item.year }}</p>
        <h2>{{ item.heading }}</h2>
        <p class="title">{{ item.author }}</p>
        <elements-read-articles :href="item.link" class="btnRead" />
      </div>
    </swiper-slide>
  </swiper>
  <div ref="prev" class="swiper-button-prev nav-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="yellow">
      <path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff"/>
    </svg>
  </div>
  <div ref="next" class="swiper-button-next nav-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="red">
      <path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff"/>
    </svg>
  </div>
</div>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation } from 'swiper';
  import {useSwiperArticlesStore} from '~~/stores/articles/swiperArticlesStore';

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
    setup() {
      const store = useSwiperArticlesStore()
      store.fetchSliderData()

      const prev = ref(null);
      const next = ref(null);
      
      return {
        prev,
        next,
        store,
        modules: [Navigation],
      };
    },
  };
</script>
<style lang="scss" scoped>

.heading {
  margin-top: 150px;
  margin-bottom: 40px;
  width: 100%;
  font-family: Oswald;
  font-size: 32px;
  line-height: 36px;
  color: #644C5C;

  @media screen and (max-width: 680px) {
    font-size: 28px;
    margin-bottom: 80px;
    margin-top: 50px;
  }
}
.swiper-container {
  max-height: 100vh;
  min-height: 0;
  min-width: 0;
  position: relative;
  // min-width: 1250px;
  width: 100%;

  .swiper {
    max-width: 1160px;
    width: 100%;

    @media screen and (max-width: 500px) {
      overflow: visible;
      max-width: 240px;
    }
  }
}

.slide-card {
  padding: 40px;
  padding-right: 10px;
  padding-bottom: 60px;
  background: #839389;
  border-radius: 15px;
  height: 423px;
  position: relative;

  @media screen and (max-width: 1280px) {
    height: 452px;
  }

  @media screen and (max-width: 680px) {
    padding: 30px;
    padding-right: 10px;
  }

  .year {
    font-size: 16px;
    color: #FEF8F2;
    margin-bottom: 10px;

    @media screen and (max-width: 680px) {
      font-size: 14px;
    }
  }

  h2 {
    font-family: 'Oswald';
    font-size: 22px;
    line-height: 130%;
    color: #FEF8F2;
    margin-bottom: 10px;

    @media screen and (max-width: 680px) {
      font-size: 18px;
    }
  }

  .title {
    font-size: 16px;
    color: #FEF8F2;
    line-height: 150%;

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  .btnRead {
    position: absolute;
    bottom: 40px;
  }
}
</style>