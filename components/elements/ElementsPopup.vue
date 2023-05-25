<script setup>
  import {usePopupStore} from '~~/stores/popupStore'
  const dataPopup = usePopupStore();
</script>
<template>
  <div class="overlay-popup" :class="{active: dataPopup.getIsOpen}" @click.self="dataPopup.setIsOpen" >
    <div class="popup">
      <lazy-svg-close-popup class="close-popup" @click.native="dataPopup.setIsOpen" />
      <div>
      <slot></slot>
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .overlay-popup {
    position: fixed;
    visibility: none;
    width: 100vw;
    height: 0;
    opacity: 0;
    transition: .3s;
    z-index: 11;
    top: 0px;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;

    &.active {
      height: 100%;
      opacity: 1;
    }

    .popup {
      background: #ECE7E1;
      padding: 60px;
      padding-right: 160px;
      position: relative;
      margin: 30px;

      @media screen and (max-width: 1200px) {
        padding-right: 90px;
      }

      @media screen and (max-width: 680px) {
        padding: 30px;
        background:  #FEF8F2;
      }

      .close-popup {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;

        @media screen and (max-width: 680px) {
          right: 20px;
        }
      }
    }
  }
</style>
