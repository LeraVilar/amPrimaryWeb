<template>
  <h2 id="mediaArticles">Статьи в СМИ</h2>
  <div class="wrapper-card">
    <div v-if="!isMain" v-for="(item, i) in store.geDataCardMedia" :key="i" class="card">
      <img :src="'http://95.163.236.196:1337' + item?.image?.data[0]?.attributes?.url" />
      <h3 class="heading-card">{{ item.heading }}</h3>
      <p class="title-card">{{ item.title }}</p>
      <elements-read-articles :href="item.link" class="btnRead" />
    </div>
    <div v-for="(item, i) in store.geDataCardMedia.splice(0, 2)" v-if="isMain" :key="i" class="card">
      <img :src="'http://95.163.236.196:1337' + item?.image?.data[0]?.attributes?.url" />
      <h3 class="heading-card">{{ item.heading }}</h3>
      <p class="title-card">{{ item.title }}</p>
      <elements-read-articles :href="item.link" class="btnRead" />
    </div>
  </div>
  <elements-button-green v-if="!isMain" class="btnFull" :isLink="false" @click.native="store.setIsFullShow">
    <template v-if="store.isFullShow">Скрыть</template>
    <template v-else>Показать все</template>
  </elements-button-green>
</template>
<script>
  import {useArticlesStore} from '~/stores/articles/articlesStore';
  export default {
    data() {
      return {
        scrollSava: null
      }
    },
    props: {
      isMain: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const store = useArticlesStore();
      store.fetchDataCardMedia()

      return {
        store
      }
    }
  }
</script>
<style lang="scss" scoped>
  h2 {
    font-family: Oswald;
    font-size: 32px;
    line-height: 41px;
    color:rgba(100, 76, 92, 1);
    width: 100%;
    margin-bottom: 20px;

    @media screen and (max-width: 680px) {
      font-size: 28px;
      line-height: 36px;
      max-width: 270px;
      width: 100%;
    }
  }

  .wrapper-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 40px;
    width: 100%;

    @media screen and (max-width: 1280px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .card {
      padding: 30px;
      padding-bottom: 52px;
      max-width: 560px;
      width: 100%;  
      background: rgba(236, 231, 225, 1);
      border-radius: 15px;
      height: 340px;
      position: relative;

      @media screen and (max-width: 1280px) {
        width: auto;
      }

      @media screen and (max-width: 680px) {
        height: auto;
        padding-right: 16px;
      }

      .btnRead {
        position: absolute;
        bottom: 30px;
      }

      .img {
        width: 152px;
        height: 66px;
        background-color: #fff;
        margin-bottom: 30px;
      }

      .heading-card {
        font-family: Oswald;
        font-size: 22px;
        line-height: 28px;
        color:rgba(100, 76, 92, 1);
        margin-bottom: 15px;

        @media screen and (max-width: 680px) {
          font-size: 22px;
          line-height: 28px;
        }
      }

      .title-card {
        font-size: 16px;
        line-height: 24px;
        color: rgba(35, 35, 35, 1);
        margin-bottom: 30px;

        @media screen and (max-width: 680px) {
          font-size: 15px;
          line-height: 22px;
        }
      }
    }
  }
</style>
