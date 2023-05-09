<template>
  <div class="projects-page__container section-container">
    <blocks-projects-intro :storeProjects="storeProjects" />
    <blocks-projects-repro :storeProjects="storeProjects" id="repo" class="projects-page__project" />
    <!-- <blocks-projects-meno id="meno" class="projects-page__project" />
    <blocks-projects-control id="control" class="projects-page__project" />
    <blocks-projects-academy id="academy" /> -->
  </div>
</template>
<script>
import { useProjectsStore } from '~~/stores/projectsStore';

  export default {
    setup () {
      const storeProjects = useProjectsStore();
      storeProjects.fetchDataProjects()

      return {
        storeProjects
      }
    }
  }
</script>
<style lang="scss" scoped>
  .projects-page {

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 1200px) {
        max-width: 680px;
      }

      @media screen and (max-width: 680px) {
        padding: 0 20px 120px 20px;
      }

      @media screen and (max-width: 400px) {
        padding: 0 20px 90px 20px;
      }
    }

    &__project {
      margin: 120px 0 0 0;

      @media screen and (max-width: 1200px) {
        margin: 90px 0 0 0;
      }

      @media screen and (max-width: 1200px) {
        margin: 70px 0 0 0;
      }
    }
  }
</style>
