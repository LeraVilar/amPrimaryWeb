<template>
  <div @click.self="isOpenPopup = false" class="overlay__popup-webinars" :class="{active: isOpenPopup}">
    <div class="popup">
      <lazy-svg-close-popup class="close-popup" @click.native="isOpenPopup = false" />
      <div style="margin-bottom: 80px;" v-for="(item, i) in webinars?.getDataWebinars[indexPopup]?.attributes?.popupInfo" :key="i">
        <h2>{{ item?.title }}</h2>
        <p class="for-who">{{item?.subTitle }}</p>
        <h3 style="margin-bottom: 20px;" v-if="item?.About?.length">О чем поговорим?</h3>
        <ul class="list-about">
          <li class="about-webinars" v-html="item?.About"></li>
        </ul>
      </div>
      <div class="block-author">
        <img :src="'https://dzhobava.com/server' + webinars?.getDataWebinars[indexPopup]?.attributes?.imageAuthor?.data[0].attributes?.url" alt="">
        <div>
          <p>Автор вебинара</p>
          <p>{{webinars?.getDataWebinars[indexPopup]?.attributes?.author}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="webinars-list" id="webinars-list">
    <div :id="linkTransform.methods.linkTransform(item.attributes.heading)" v-for="(item, index) in webinars.getDataWebinars" :key="index" class="webinars-list__card">
      <div class="webinars-list__card-wrapper-img">
        <div class="discount" v-if="item.attributes.discount"><span>На {{ item.attributes.discount }}% выгоднее</span></div>
        <img :src="'https://dzhobava.com/server' + item?.attributes?.image?.data?.attributes?.url" alt="Вебинар">
      </div>
      <div class="webinars-list__card-wrapper-text">
        <p class="who-be">{{ item.attributes.whoBe }}</p>
        <h2>{{ item.attributes.heading }}</h2>
        <p v-html="item.attributes.description" class="how-can-help"></p>
        <button @click.native="setIsOpen(index)" class="details">
          <span>Подробнее</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <line x1="1" y1="12.1582" x2="24" y2="12.1582" stroke="#064848" stroke-width="2" stroke-linecap="round"/>
            <line x1="12.8418" y1="1" x2="12.8418" y2="24" stroke="#064848" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="wraper-price">
          <div>
            <p>СТОИМОСТЬ ПРОГРАММЫ</p>
            <p>{{ item.attributes.price }} руб.</p>
          </div>
          <a
            :href="item.attributes.linkBtnFlows"
            class="project-block__additional-button-container"
            target="_blank"
          >
            <button>Купить программу</button>
          </a>  
        </div>
        <elements-special-offer v-if="item.attributes.specOffer" :text="item.attributes.specOffer" />
      </div>
      <section></section>
    </div>
  </div>
</template>
<script> 
import { onBeforeMount } from 'vue';
import { useWebinarsStore } from '~/stores/webinarsStore'
import linkTransform from '~~/components/scripts/ConvertsAnchor';

  export default {
    data() {
      return {
        width: window.innerWidth,
        str: '',
        isOpenPopup: false,
        indexPopup: null
      }
    },
    methods: {
      setIsOpen(index) {
        this.isOpenPopup = true;
        this.indexPopup = index;
      }
    },
    setup() {
        const webinars = useWebinarsStore();
        onBeforeMount(() => {
          webinars.fetchDataWebinars()
        })
      return {
        linkTransform,
        webinars
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  h2 {
    margin: 0;
    font-size: 26px;
    color: rgba(100, 76, 92, 1);
    line-height: 33px;

    @media screen and (max-width: 680px) {
      font-size: 22px;
      line-height: 28px;
      margin-right: 10px;
    }
  }
  

  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 22px;
    line-height: 130%;
    color: #78353E;

    @media screen and (max-width: 680px) {
      font-size: 20px;
      line-height: 28px;
      margin-right: 10px;
    }
  }

  .details {
        width: 100%;
        margin: 40px 0;
        border: none;
        border-top: 1px solid rgba(197, 177, 178, 1);
        border-bottom: 1px solid rgba(197, 177, 178, 1);
        padding: 20px 0;
        text-align: left;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          color:rgba(120, 53, 62, 1);
          font-size: 22px;
          font-weight: 700;
          font-family: Oswald;

          @media screen and (max-width: 680px) {
            font-size: 18px;
          }
        }

        @media screen and (max-width: 680px) {
          margin-bottom: 30px;
        }
      }
    
      .who-be {
        margin-bottom: 10px;
      }

  .overlay__popup-webinars {
    padding: 60px 74px;
    position: fixed;
    visibility: hidden;
    height: 0;
    opacity: 0;
    transition: .3s;
    width: 100vw;
    z-index: 11;
    top: 0px;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: scroll;

    @media screen and (max-width: 680px) {
      padding: 60px 20px 60px 30px;
    }

    &.active {
      visibility: visible;
      height: 100%;;
      opacity: 1;
    }

    .popup {
      padding: 60px;
      background-color: #ECE7E1;
      max-width: 760px;
      height: auto;
      position: relative;

      @media screen and (max-width: 680px) {
        padding: 30px 43px 30px 30px;
      }

      .mb-80 {
        margin-bottom: 80px;
      }

      .mb-60 {
        margin-bottom: 60px;
      }

      .mt-60 {
        margin-top: 60px;
      }

      .mb-40 {
        margin-bottom: 40px;
      }

      .mb-20 {
        margin-bottom: 20px;
      }

      .close-popup {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;

        @media screen and (max-width: 680px) {
          right: 20px;
        }
      }

      h2 {
        @media screen and (max-width: 380px) {
          width: 211px;
        }
      }

      .for-who {
        max-width: 540px;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 50px;

        @media screen and (max-width: 680px) {
          margin-bottom: 40px;
        }
      }

      .about-webinars {
        max-width: 579px;
        margin-right: 0;
        list-style: none;

        // &:before {
        //     content:  "—";
        //     position: relative;
        //     left: -5px;
        //     bottom: 1px;
        // }

        @media screen and (max-width: 680px) {
          font-size: 15px;
        }
      }

      .block-author {
        display: flex;
        margin-top: 50px;
        @media screen and (max-width: 680px) {
          flex-direction: column;
          margin-top: 40px;
        }

        img {
          margin-right: 17px;
          width: 100px;
          height: 100px;

          @media screen and (max-width: 680px) {
            width: 60px;
            height: 60px;
            margin-bottom: 10px;
          }
        }

        p:first-child {
          font-size: 14px;
          color: rgba(35, 35, 35, 1);
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        p:last-child {
          font-size: 16px;
          color: rgba(35, 35, 35, 1);
          max-width: 374px;

          @media screen and (max-width: 680px) {
           max-width: 100%;
           font-size: 15px;
          }
        }
      }
    }
  }
  .webinars-list {
    width: 100%;
    margin: 150px 0 0 0;

    @media screen and (max-width: 1280px) {
      margin: 110px 0 0 0;
    }

    @media screen and (max-width: 1280px) {
      margin: 80px 0 0 0;
    }

    &__card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      padding-bottom: 70px;
      margin-bottom: 70px;
      gap: 50px;

      @media screen and (max-width: 1280px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &:last-child {
        section {
          border-bottom: none;
        }
      }

      &:nth-child(2n) {
        .webinars-list__card-wrapper-img {
          order: 1;
          
          @media screen and (max-width: 1280px) {
            order: 0;
          }
        }
      }

      section {
        border-bottom: 1px solid rgba(197, 177, 178, 1);
        width: 100%;
        position: absolute;
        bottom: 0px;

        @media screen and (max-width: 1280px) {
          width: 100vw;
          margin-left: calc(50% - 50vw)
        }
      }

      &-wrapper-img {
        position: relative;
        display: flex;
        width: 100%;
        @media screen and (max-width: 1280px) {
          align-items: flex-start;
          justify-content: flex-start!important;
          width: fit-content;
          padding-right: 0!important;
        }

        @media screen and (max-width: 680px) {
          margin: 0 auto;
        }

        .discount {
          width: 202px;
          padding: 35px 0;
          position: absolute;
          right: 0;
          background: #644C5C;
          transform: rotate(-17deg);
          border-radius: 50%;
          font-weight: 600;
          font-size: 18px;
          color: white;
          text-align: center;

          @media screen and (max-width: 680px) {
            width: 180px;
            font-size: 14px;
          }

          @media screen and (max-width: 500px) {
            width: 160px;
            font-size: 14px;
            padding: 25px 0;
          }
        }

        img {
          @media screen and (max-width: 1280px) {
            width: 100%;
            margin-bottom: 60px;
          }

          @media screen and (max-width: 680px) {
            margin-left: 0;
            margin-bottom: 50px;
          }
        }
      }

      &-wrapper-text {
        display: flex;
        flex-direction: column;
        max-width: 560px;
        width: 100%;

        p:first-child {
          font-size: 14px;
          color: rgba(35, 35, 35, 1);
          text-transform: uppercase;
        }

        h2 {
          @media screen and (max-width: 680px) {
            margin-top: 10px;
          }
        }

        .how-can-help {
          font-size: 16px;
          line-height: 24px;
          color: rgba(35, 35, 35, 1);
          margin-top: 20px;

          @media screen and (max-width: 680px) {
            font-size: 15px;
            line-height: 22px;
            margin-top: 15px;
          }
        }

        .collapse {
          border-bottom: 1px solid rgba(197, 177, 178, 1);
          margin-top: 40px;
        }

        .wraper-price {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;

          @media screen and (max-width: 680px) {
            flex-direction: column;
            margin-top: 30px;
          }
          
          p:last-child {
            margin-top: 10px;
            font-family: Oswald;
            font-size: 22px;
            font-weight: 700;
            color: rgba(100, 76, 92, 1);
          }

          button {
            background: rgba(6, 72, 72, 1);
            border: none;
            color: white;
            padding: 18px 45px;
            font-size: 18px;
            outline: none;
            cursor: pointer;
            border-radius: 5px;

            @media screen and (max-width: 680px) {
              width: fit-content;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
</style>