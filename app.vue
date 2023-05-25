<template>
  <the-header />
  <main class="page-container">
    <nuxt-page />
  </main>
  <the-footer />
</template>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }

  .page-container {
    overflow: hidden;
    padding: 90px 0 150px 0;

    @media screen and (max-width: 1200px) {
      padding: 50px 0 120px 0;
    }

    @media screen and (max-width: 680px) {
      padding: 50px 0 90px 0;
    }
  }

  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 40px;

    @media screen and (max-width: 1200px) {
      max-width: 680px;
    }

    @media screen and (max-width: 680px) {
      padding: 0 20px;
    }
  }

  .section-block {
    margin-top: 150px;

    @media screen and (max-width: 1200px) {
      margin-top: 120px;
    }

    @media screen and (max-width: 680px) {
      margin-top: 90px;
    }
  }

  .background-violet {
    background-color: #644C5C;
  }
</style>
