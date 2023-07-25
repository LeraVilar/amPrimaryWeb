<script setup>
  import {usePopupStore} from '~~/stores/popupStore'

  const dataPopup = usePopupStore();
</script>
<template>
  <elements-popup>
    <div class="popup-content">
      <h3>Вы узнаете:</h3>
      <ul>
        <li v-for="(itemList, i) in data[indexForPopup]?.popupProgram?.About?.split('—').slice(1)" :key="i">
          <span v-html="itemList"></span>
        </li>
      </ul>
    </div>
  </elements-popup>
  <div v-for="(item, index) in data" :key="index" class="wrapper-card">
    <section class="border"></section>
    <div class="img-card-wrapper">
      <blocks-img-card :link="item.image.data.attributes.url"/>
    </div>
    <div class="content">
      
      <h2>{{ item.heading }}</h2>
      <p class="title-card">{{ item?.text }}</p>
      <button @click="dataPopup?.setIsOpen" @click.native="indexForPopup = index" class="details">Подробнее</button>
      <elements-button-green :link="item?.linkBtnFlows" :isLink="true">Скачать бесплатно</elements-button-green>
      
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Array,
        default: null
      },
    },
    data() {
      return{
        isActive: false,
        indexForPopup: 0
      }
    },
  }
</script>
<style scoped lang="scss">

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  h3 {
    font-family: Oswald;
    font-size: 26px;
    font-weight: 600;
    line-height: 34px;
    color: rgba(100, 76, 92, 1);

    @media screen and (max-width: 680px) {
      font-size: 22px;
      font-weight: 700;
      line-height: 29px;
    }
  }

  .popup-content {
    max-width: 760px;
  }

  ul {
    padding: 0 20px;
    li {
      list-style-type: '—';
      padding-left: 10px;
    }
  }
  .wrapper-card {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: flex-start;
    position: relative;
    padding: 70px 0;

    @media screen and (max-width: 1200px) {
      order: 0;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      padding: 55px 0;
    }

    .img-card-wrapper {
      @media screen and (max-width: 1200px) {
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
      }
    }

    &:nth-child(even) {
      .content {
        order: -1;

        @media screen and (max-width: 1200px) {
          order: 0;
        }
      }
    }

    .border {
      border-top: 1px solid gray;
      position: absolute;
      top: 0;
      width: 100%;

      @media screen and (max-width: 1200px) {
        width: 100vw;
        margin-left: calc(50% - 50vw)
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      max-width: 560px;
      width: 100%;

      h2 {
        font-size: 26px;
        line-height: 33px;
        color:rgba(100, 76, 92, 1);
        max-width: 400px;
        width: 100%;
        margin-bottom: 20px;

        @media screen and (max-width: 680px) {
          font-size: 22px;
          line-height: 28px;
          max-width: 270px;
          width: 100%;
        }
      }

      .title-card {
        color:rgba(35, 35, 35, 1);
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 30px;

        @media screen and (max-width: 680px) {
          font-size: 15px;
          line-height: 22px;
        }
      }

      .details {
        width: 100%;
        margin-bottom: 40px;
        border: none;
        border-top: 1px solid rgba(197, 177, 178, 1);
        border-bottom: 1px solid rgba(197, 177, 178, 1);
        padding: 20px 0;
        color:rgba(120, 53, 62, 1);
        text-align: left;
        background-color: transparent;
        font-size: 22px;
        font-weight: 700;
        font-family: Oswald;
        cursor: pointer;

        @media screen and (max-width: 680px) {
          margin-bottom: 30px;
          font-size: 18px;
        }
      }
    }
  }
</style>
