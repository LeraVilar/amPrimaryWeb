<template>
  <div class="if-you-block">
    <h1 class="if-you-block__title">
      Если вы
    </h1>
    <div class="if-you-block__list">
      <Elements-iconed-item
        :static="true"
        v-for="(item, i) in tabsList"
        :key="i"
        :icon-name="item.icon"
        :icon-color="item.color"
        :text="item.text"
      />
    </div>
    <nuxt-link to="/#workFormat" class="if-you-block__button-block">
      <elements-buttons-primary title="Выбрать формат работы" />
    </nuxt-link>
  </div>
</template>

<script>
const tabsList = [
  {
    icon: 'almostCircle',
    color: '#C99D7A',
    text: 'Заботитесь о своём здоровье и хотите обладать актуальной информацией'
  },
  {
    icon: 'SvgDiamondIcon',
    color: '#839389',
    text: 'Переживаете и чувствуете, что с организмом что-то «не так»'
  },
  {
    icon: 'SvgStarNine',
    color: '#78353E',
    text: 'Нуждаетесь в экспертном мнении'
  },
  {
    icon: 'SvgPineLeft',
    color: '#C5B1B2',
    text: 'Сомневаетесь в назначениях своего специалиста'
  },
  {
    icon: 'SvgGex',
    color: '#644C5C',
    text: 'Столкнулись с гормональными изменениями и оказались к ним не готовы'
  },
  {
    icon: 'SvgSoftIcon',
    color: '#064848',
    text: 'Готовитесь к беременности и хотите все заранее предусмотреть или уже беременны'
  },
  {
    icon: 'heartIcon',
    color: '#C99D7A',
    text: 'Не можете забеременеть или испытываете трудности с вынашиванием малыша'
  },
  {
    icon: 'SvgCheeseIcon',
    color: '#839389',
    text: 'Имеете нерешенные проблемы со здоровьем, для которых «пришло время»'
  }
]

  export default {
    setup () {

      return {
        tabsList
      }
    }
  }
</script>

<style lang="scss" scoped>
  .if-you-block {
    width: 100%;

    &__title {
      color: #644C5C;
      font-size: 38px;
      font-weight: 700;
      text-align: left;
      margin: 0 0 50px 0;

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 40px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
      }
    }

    &__button-block {
      text-decoration: none;
      display: flex;
      justify-content: center;

      @media screen and (max-width: 1200px) {
        justify-content: left;
      }
    }
  }
</style>
