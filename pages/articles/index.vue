<template>
  <div class="articles-page section-container">
    <h1 class="articles-page__title">Полезные материалы и статьи</h1>
      <blocks-articles-cards :data="storeUsefulCard.getDataCard"/>
      <blocks-media-articles />
      <blocks-slider-articles />
      <blocks-useful-articles />
    {{ storeUseful.point }}
  </div>
</template>
<script setup>
  import {useArticlesStore} from '~~/stores/articles/articlesStore'
  import {useUsefulStore} from '~~/stores/articles/usefulStore'

  const storeUseful = useUsefulStore();
  const storeUsefulCard = useArticlesStore();
  storeUsefulCard.fetchDataCard()
  
  
</script>
<style lang="scss" scoped>

.articles-page {

  &__title {
    color: rgba(100, 76, 92, 1);
    font-size: 38px;
    text-align: left;
    width: 100%;
    margin: 0 0 50px 0;

    @media screen and (max-width: 1200px) {
      font-size: 36px;
    }

    @media screen and (max-width: 680px) {
      font-size: 30px;
    }
  }
}
</style>
