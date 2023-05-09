<template>
    
</template>
<script>

  export default {
    methods: {
      showDetails() {
      }
    },
  }
</script>

<style lang="scss" scoped>
.itemSlider {
  max-width: 560px;
  padding: 40px 40px 0px 40px;
  width: 100%!important;
  background: #ECE7E1;
  height: 354px;
  border-radius: 15px;
  position: relative;

  &.active {
    height: auto;
  }

  .details {
    display: flex;
    gap: 3px;
    position: absolute;
    bottom: 20px;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    left: 50%;
    transform: translate(-50%, -50%);
    div {
      width: 5px;
      height: 5px;
      background: #644C5C;
      border-radius: 50%;
    }
  }

  p {
    margin: 0;
    color: #232323;
    line-height: 24px;
  }

  &::before {
    content: "";
    height: 30px;
    width: 100%;
    height: 70px;
    background: rgba(236, 231, 225, .3);
    position: absolute;
    bottom: 0px;
    left: 0;
    border-radius: 15px;
    -webkit-box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
    -moz-box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;
    box-shadow: 0px -98px 41px -17px rgba(236, 231, 225, .9) inset;

  }

  &::after {
    content: "";
    height: 30px;
    width: 100%;
    background: rgba(236, 231, 225, 1);
    position: absolute;
    bottom: 0px;
    left: 0;
    border-radius: 15px;
    border-bottom: 1px solid rgba(236, 231, 225, 1);
  }
}
</style>