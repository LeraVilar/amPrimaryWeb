<template>
  <div id="reviews" class="reviews-block">
    <h3 class="reviews-block__title">
      {{ heading }}
    </h3>
    <div class="wrappernavSel">
      <elements-custom-select v-if="reviewsIsShow"
      class="reviews-block__select"
      :label="currSelected"
      :items="optionsArray"
      @updateFilters="update"
      />
      <div class="wrapperNav">
        <div ref="prevRev" class="swiper-button-prev nav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="yellow">
            <path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff"/>
          </svg>
        </div>
        <div ref="nextRev" class="swiper-button-next nav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="red">
            <path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff"/>
          </svg>
        </div>
      </div>
    </div>
    <div ref="wrapperSlider" class="swiper">
      <swiper
        :modules="modules"
        :navigation="{
          prevEl: prevRev,
          nextEl: nextRev,
        }"
        :breakpoints="{
      1281: {
        slidesPerView: 2,       
        spaceBetween: 40
      },
      500: {
        slidesPerView: 1,       
        spaceBetween: 20
      },
      0: {
        slidesPerView: 2,       
        spaceBetween: 20
      },
    }"
        class="slider"
      >
      <swiper-slide 
      v-for="(item, index) in store.getReviewsSlider"
      :key="index"
      :class="{itemSlider: true, active: item.isShow}"
      >
      
        <p v-html="item.content" ref="heightDetails">   
        </p>        
        <div @click="showDetails($event, window)" class="details">
          <div></div>
          <div></div>
          <div></div>
        </div>
      
      </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {useReviewsSlider} from '~/stores/reviewsSlider';

import 'swiper/css'
const optionsArray = [
  {
    key: '',
    label: 'Все отзывы'
  },
  {
    key: 'school',
    label: 'Отзывы Школа беременных'
  },
  {
    key: 'repro',
    label: 'Проект «Репро»'
  },
  {
    key: 'meno',
    label: 'Проект «Мено»'
  },
  {
    key: 'guide',
    label: 'Гайд по питанию'
  },
  {
    key: 'webinarsPreparation',
    label: 'Вебинары по подготовке'
  },
  {
    key: 'webinarsanalise',
    label: 'Вебинар «Анализы и обследования во время беременности»'
  },
  {
    key: 'authorsProgram',
    label: 'Авторская программа восстановления после беременности'
  },
  {
    key: 'venera',
    label: 'Проект «Рождение Венеры»'
  }
]
import { ref, onUpdated } from 'vue'
let el = ref(null)
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      reviewsIsShow: {
        type: Boolean,
        default: false
      },
      heading: {
        type: String,
        default: ""
      }
    },
    methods: {
      showDetails(e) {
        if (e.currentTarget.parentNode?.classList.contains('active')) {
          window.scrollTo(0, this.posScroll)
          e.currentTarget.parentNode?.classList.remove('active')
          return
        }
        if (el.value) {
          el.value?.classList.remove('active')
        }
        el.value = e.currentTarget.parentNode
        e.currentTarget.parentNode?.classList.add('active')
        this.posScroll = window.scrollY
      },
    },
    setup () {
      const store = useReviewsSlider()
      const currSelected = ref(optionsArray[0])
      const heightDetails = ref(null)
      const wrapperSlider = ref(null)
      
      let posScroll = 0;
      
      heightDetails.value = [...store.getReviewsSlider]
      
      watch(() => heightDetails.value.length, () => {
        heightDetails.value.forEach((element) => {
          element.nextSibling?.classList.remove('_active')
          if(element.offsetHeight > 254) {
            element.nextSibling?.classList.add('_active')
          }
        })
      })

      onMounted(() => {
        store.fetchDataReviewsSlider()
      })
      onUpdated(() => {
        wrapperSlider.value.childNodes[0].children[0].style.transform = ''
        if(heightDetails?.value) {
          heightDetails?.value.forEach((element, i) => {
            element.nextSibling?.classList.remove('_active')
          if(element.offsetHeight > 254) {
            element.nextSibling?.classList.add('_active')
          }
          }) 
        }
      })
      function update (value) {
        store.fetchDataReviewsSlider(value?.key)
      }

      const prevRev = ref(null);
      const nextRev = ref(null);
      return {
        heightDetails,
        optionsArray,
        update,
        posScroll,
        store,
        currSelected,
        wrapperSlider,
        modules: [Navigation],
        prevRev,
        nextRev
      }
    }
  }
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  position: relative;
  overflow: visible;
  min-height: 380px;
}
.slider {
  margin-top: 40px;
  max-width: 100%;
  // position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;  
   @media screen and (max-width: 1200px) {
      max-width: 560px;
   }
}

.wrappernavSel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 0 0;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  .wrapperNav {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100px;

    @media screen and (max-width: 700px) {
      margin-top: 40px;
      align-self: self-start;
    }
    

    div {
      left: auto!important;
      right: auto;
      position: static;
      margin-top: 0;
      transform: translate(0);
    }

    .swiper-button-prev {
      left: -40px;
      transform: rotate(180deg)
    }

    .swiper-button-next {
      left: 40px;
    }
  }
}


.itemSlider {
  max-width: 560px;
  width: 100%!important;
  padding: 40px 40px 0px 40px;
  background: #ECE7E1;
  height: 354px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 1111;
  transition: .3s;
  &.active {
    height: auto;
    padding-bottom: 70px;
  }
  .details {
    display: none;
    gap: 3px;
    position: absolute;
    bottom: 20px;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    left: 50%;
    transform: translate(-50%, -50%);
    &._active {
      display: flex;
    }
    div {
      width: 5px;
      height: 5px;
      background: #644C5C;
      border-radius: 50%;
    }
  }
  p {
    margin: 0;
    color: #232323;
    line-height: 24px;
  }
  &::before {
    content: "";
    height: 30px;
    width: 100%;
    height: 70px;
    background: rgba(236, 231, 225, .3);
    position: absolute;
    bottom: 0px;
    left: 0;
    border-radius: 15px;
    -webkit-box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
    -moz-box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
    box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
  }
  &::after {
    content: "";
    height: 30px;
    width: 100%;
    background: rgba(236, 231, 225, 1);
    position: absolute;
    bottom: 0px;
    left: 0;
    border-radius: 15px;
    border-bottom: 1px solid rgba(236, 231, 225, 1);
  }
}
  .reviews-block {
    margin: 150px 0 0 0;
    width: 100%;
    &__title {
      color: #644C5C;
      font-size: 38px;
      margin: 0;
      text-align: left;
    }
    &__select {
      max-width: 410px;
    }
  }
</style>
