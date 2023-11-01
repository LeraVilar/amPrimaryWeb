<template>
  <div class="wrapperHeader">
      <h2 class="heading  usefulMedia" id="usefulMedia">Полезные статьи</h2>
      <nuxt-link to="/articles" class="main-articles__show-more-button">
        Смотреть все статьи
        <svg-arrow-right class="main-articles__arrow-right" />
      </nuxt-link>
  </div>
  <div class="wrapper">
    <div v-for="(item, index) in store.getUsefulData.filter((_, i) => i < 3)" :key="index" class="cardArticles">
      <img :src="`https://dzhobava.com/server${item.image?.data[0].attributes?.url}`"/>
      <h2>{{ item.heading }}</h2>
      <p>{{ item.title }}</p>
      <a @click.prevent="goTo(item.heading, index)" :href="item.href">Читать статью</a>
    </div>
  </div>
</template>
<script>
  import {useUsefulStore} from '~~/stores/articles/usefulStore';
  export default {
    data() {
      return {
        scrollTo: null
      }
    }, 
    setup() {
      const store = useUsefulStore();
      store.fetchUsefulData()
      return {
        store
      }
    },
    beforeMount() {
      if(sessionStorage.getItem('setSroll')) {
        this.scrollTo = Number(sessionStorage.getItem('setSroll'));
        sessionStorage.clear()
      }
    },
    mounted () {
      setTimeout(() => {
        if (this.scrollTo) {
          window.scrollTo(0, this.scrollTo)
        } 
      })
    },
    methods: {
      goTo(str, index) {
        sessionStorage.setItem('setSroll', window.scrollY)
        this.store.setIndex(index)
        this.$router.push('/articles/' + str)
      }
    }
  }
</script>
<style scoped lang="scss">



.wrapperHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 40px;
  width: 100%;

  .main-articles__arrow-right{
    fill: #064848;
    margin: 0 0 0 10px;
  }

  .main-articles__show-more-button {
      white-space: nowrap;
      color: #064848;
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;

      @media screen and (max-width: 680px) {
        margin: 0 0 20px 0;
      }
    }

    .heading {
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
}


  

  .cardArticles {
    position: relative;
    height: 400px;
    width: 360px;

    @media screen and (max-width: 1280px) {
      height: 400px;
      width: 300px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 680px) {
      height: 350px;
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media screen and (max-width: 1280px) {
      gap: 10px;
      justify-content: space-between;
    }
    
    @media screen and (max-width: 680px) {
      gap: 10px;
      justify-content: center;
    }

    img {
      margin-bottom: 20px;

      @media screen and (max-width: 1280px) {
        width: 300px;
      }
    }

    h2 {
      font-family: 'Oswald';
      font-size: 22px;
      line-height: 130%;
      color: #78353E;
      margin-bottom: 10px;
      margin-bottom: 15px;

      @media screen and (max-width: 680px) {
        font-size: 18px;
      }
    }

    p {
      font-size: 16px;
      color: #232323;
      line-height: 150%;

      @media screen and (max-width: 680px) {
        font-size: 15px;
      }
    }

    a {
      position: absolute;
      bottom: 0;
      font-size: 16px;
      text-decoration-line: underline;
      color: #064848;
      cursor: pointer;
    }
  }
</style>
