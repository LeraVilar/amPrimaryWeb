<template>
  <div class="custom-select">
    <div
        :class="{
        'custom-select__button': true,
        'custom-select__button_opened': isOpened
      }"
        @click="switchSelect()"
    >
      <div>
        <span class="custom-select__inner-text bold">
          {{ inputValue.label }}
        </span>
      </div>
      <svg-arrow-down-input
        :class="{
          'custom-select__arrow-icon': true,
          'custom-select__arrow-icon_opened': isOpened
        }"
      />
    </div>
    <div
        v-if="isOpened"
        :class="{
        'custom-select__list': true,
      }"
    >
      <div>
        <div
          class="custom-select__list-item"
          v-for="(item, i) in items"
          :key="i"
          @click="selectItem(item)"
        >
          {{ item?.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue'
import SvgArrowDownInput from "~/components/svg/SvgArrowDownInput.vue";

export default {
  components: {SvgArrowDownInput},

  props: {
    modelValue: {
      type: Object,
      default: () => {}
    },
    items: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: 'Статус'
    },
    showChoicesAmount: {
      type: Boolean,
      default: true
    }
  },

  emits: ['updateFilters'],

  setup (props, { emit }) {
    const isOpened = ref(false)
    const inputValue = ref({})

    function switchSelect () {
      isOpened.value = !isOpened.value
    }

    function selectItem (item) {
      inputValue.value = item
      isOpened.value = false
    }

    const getValue = computed(() => {
      return inputValue.value
    })

    watch(getValue, () => {
      emit('updateFilters', inputValue.value)
    })

    onMounted(() => {
      inputValue.value = props.label
    })


    return {
      isOpened,
      switchSelect,
      inputValue,
      selectItem
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;

  &__button {
    position: relative;
    white-space: nowrap;
    padding: 8px 30px 8px 15px;
    background-color: #064848;
    border: 1px solid var(--border-color);
    border-radius: 50px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color .2s, color .2s, border-color .2s;
    z-index: 3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__inner-text {
    color: #FEF8F2;
    font-size: 18px;
    display: inline-block;
    max-width: 330px;
    overflow: hidden;
    font-weight: 600;
  }

  &__arrow-icon {
    transform-origin: center;
    transition: transform .2s;

    &_opened {
      transform: rotate(180deg);
    }
  }

  &__list {
    position: absolute;
    left: 0;
    top: 20px;
    padding: 35px 0px 15px 0px;
    background-color: #839389;
    border: 1px solid var(--border-color);
    border-radius: 0 0 15px 15px;
    box-shadow: 0 25px 65px -15px rgba(8, 17, 49, 0.3);
    width: 100%;
    overflow-y: scroll;
    z-index: 2;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__list-item {
    color: #FEF8F2;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 15px;
    transition: .3s;
    width: 100%;

    &:hover {
      background-color: #064848;
    }

    &:not(:last-child) {
      margin: 0 0 15px 0;
    }
  }

  &__item {
    &:not(:last-child) {
      margin: 0 0 16px 0;
    }
  }
}
</style>