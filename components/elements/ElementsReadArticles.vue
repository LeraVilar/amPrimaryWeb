<template>
  <a target="_blank" :href="href">
    Читать статью
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
      <path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#064848"/>
    </svg>
  </a>
</template>
<script>
  export default {
    props: {
      href: {
        type: String,
        default: '#'
      }
    }
  }
</script>
<style scoped lang="scss">
  a {
    text-decoration: none;
    font-family: Open Sans;
    font-size: 18px;
    color: #064848;

    @media screen and (max-width: 680px) {
      font-size: 16px;
    }

    svg {
      margin-left: 10px;
    }
  }
</style>