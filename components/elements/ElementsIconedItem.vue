<template>
  <div class="if-item">
    <div class="if-item__icon-box">
      <component v-if="static" :is="iconName" :style="{fill: iconColor}" />
      <img v-else :src="'http://95.163.236.196:1337' + iconName" alt="icon">
    </div>
    <div class="if-item__text" v-html="text" />
  </div>
</template>

<script>
import almostCircle from '@/components/svg/almostCircle.vue'
import SvgDiamondIcon from '@/components/svg/SvgDiamondIcon.vue'
import SvgStarNine from '@/components/svg/SvgStarNine.vue'
import SvgPineLeft from '@/components/svg/SvgPineLeft.vue'
import SvgGex from '@/components/svg/SvgGex.vue'
import SvgSoftIcon from '@/components/svg/SvgSoftIcon.vue'
import heartIcon from '@/components/svg/heartIcon.vue'
import SvgCheeseIcon from '@/components/svg/SvgCheeseIcon.vue'
import star from '@/components/svg/star.vue'
import union from '@/components/svg/union.vue'

  export default {
    props: {
      static: {
        type: Boolean,
        default: false
      },
      iconName: {
        type: String,
        default: ''
      },
      iconColor: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    },

    components: {
      almostCircle,
      SvgDiamondIcon,
      SvgStarNine,
      SvgPineLeft,
      SvgGex,
      SvgSoftIcon,
      heartIcon,
      SvgCheeseIcon,
      star,
      union
    }
  }
</script>

<style lang="scss" scoped>
  .if-item {

    @media screen and (max-width: 680px) {
      display: flex;
      align-items: center;
    }

    &__icon-box {
      width: 40px;
      height: 40px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__text {
      font-size: 16px;
      line-height: 24px;
      color: #232323;
      margin: 20px 0 0 0;
      max-width: 90%;
      font-weight: 400;

      @media screen and (max-width: 680px) {
        font-size: 15px;
        margin: 0 0 0 20px;
        max-width: calc(100% - 60px);
      }
    }

  }
</style>
