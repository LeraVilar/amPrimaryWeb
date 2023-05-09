<template>
  <div v-if="isModalOpened" class="modal__modal">
    <div class="modal__modal-window">
      <div class="modal__close-cross-button" @click="closeModal" />
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      isModalOpened: {
        type: Boolean,
        default: false
      }
    },

    emits: ['close'],

    setup (props, { emit }) {

      function closeModal () {
        emit('close')
      }

      watch(props, () => {
        if (props.isModalOpened === true) {
          document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden'
        } else {
          document.getElementsByTagName("BODY")[0].style.overflowY = 'scroll'
        }
      })

      return {
        closeModal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {

    &__modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.34);
      z-index: 4;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__modal-window {
      max-height: 80%;
      width: 760px;
      padding: 60px;
      background-color: #ECE7E1;
      position: relative;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      @media screen and (max-width: 680px) {
        max-height: 100%;
        padding: 30px;
      }
    }

    &__close-cross-button {
      position: absolute;
      top: 23px;
      right: 23px;
      width: 25px;
      height: 25px;
      cursor: pointer;

      &:after,
      &:before {
        position: absolute;
        top: 15px;
        width: 25px;
        height: 1px;
        background-color: #000;
        content: '';
        transform-origin: center;
      }

      &:after {
        transform: rotate(45deg);
      }

      &:before {
        transform: rotate(-45deg);
      }
    }
  }
</style>
