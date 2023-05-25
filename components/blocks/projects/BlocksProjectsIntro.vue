<template>
  <div class="projects-page">
    <div class="projects-page__page-navigation-block">
      <h2 class="projects-page__title">
        Проекты
      </h2>
      <div class="projects-page__page-navigations-list">
        <nuxt-link v-for="item in  storeProjects.getProjects" :to="'/projects#' + linkTransform?.methods?.linkTransform(item.nameProject)" class="projects-page__navigation-item">
          {{item.nameProject.slice(item.nameProject.search('«') + 1, -1)}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import linkTransform from '~~/components/scripts/ConvertsAnchor';

export default {
  props: {
    storeProjects: {
      type: Object,
      default: null
    }
  },
  setup() {
    return {
      linkTransform
    }
  }

}
</script>

<style lang="scss" scoped>
.projects-page {
  width: 100%;

  &__page-navigation-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }

  &__title {
    color: #644C5C;
    font-size: 38px;
    margin: 0;
  }

  &__page-navigations-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 500px;

    @media screen and (max-width: 1200px) {
      justify-content: left;
      margin: 30px 0 0 0;
    }
  }

  &__navigation-item {
    padding: 5px 15px;
    background-color: #839389;
    font-size: 16px;
    height: 34px;
    border-radius: 23px;
    margin: 0 10px 10px 0;
    cursor: pointer;
    transition: background-color .2s;
    color: #FFF;
    text-decoration: none;

    &:hover {
      background-color: #064848;
    }
  }
}
</style>
