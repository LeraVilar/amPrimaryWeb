<template>
  <div class="section-container">
    <Blocks-about-intro />
    <Blocks-about-science-works class="section-block" />
    <blocks-about-directions class="section-block" />
    <blocks-about-education class="section-block" />
    <blocks-message-us class="section-block" />
  </div>
</template>

<style lang="scss" scoped>
.page {

  &__container {
     display: flex;
     flex-direction: column;
     align-items: center;
     max-width: 1240px;
     margin: 0 auto;
     padding: 0 40px 150px 40px;

    @media screen and (max-width: 1200px) {
      max-width: 680px;
    }

    @media screen and (max-width: 680px) {
      padding: 0 20px 120px 20px;
    }

    @media screen and (max-width: 400px) {
      padding: 0 0 60px 0;
    }
  }
}
</style>
