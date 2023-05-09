<template>
  <div class="about-directions">
    <h2 class="about-directions__title">
      Направления работы
    </h2>
    <div class="about-directions__list">
      <Elements-iconed-item
          :static="true"
          v-for="(item, i) in tabsList"
          :key="i"
          :icon-name="item.icon"
          :icon-color="item.color"
          :text="item.text"
      />
    </div>
  </div>
</template>

<script>
const tabsList = [
  {
    icon: 'SvgSoftIcon',
    color: '#064848',
    text: 'Международный эксперт по ведению осложнённой беременности'
  },
  {
    icon: 'SvgDiamondIcon',
    color: '#C99D7A',
    text: 'Специалист по подготовке и ведению «зрелой» беременности (35+)'
  },
  {
    icon: 'SvgPineLeft',
    color: '#C5B1B2',
    text: 'Реабилитация после родов с применением ультрасовременных методов'
  },
  {
    icon: 'almostCircle',
    color: '#78353E',
    text: 'Специалист по невынашиванию беременности, патологии системы гемостаза и тромбофилиям'
  },
  {
    icon: 'SvgGex',
    color: '#644C5C',
    text: 'Обследование и лечение бесплодия'
  },
  {
    icon: 'heartIcon',
    color: '#78353E',
    text: 'Подготовка к ЭКО и ВРТ. Ведение до и после протокола'
  },
  {
    icon: 'SvgCheeseIcon',
    color: '#839389',
    text: 'Реабилитация после гинекологических операций'
  },
  {
    icon: 'SvgStarNine',
    color: '#064848',
    text: 'Антивозрастная гинекология. Контроль и отсрочка менопаузы'
  },
  {
    icon: 'star',
    color: '#C99D7A',
    text: 'Экспертное мнение в «безнадежных» ситуациях'
  },
  {
    icon: 'union',
    color: '#C5B1B2',
    text: 'Ведение беременности после ЭКО'
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
  .about-directions {
    width: 100%;

    &__title {
      margin: 0;
      color: #644C5C;
      font-size: 38px;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 30px;
      }
    }

    &__list {
      margin: 40px 0 0 0;
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
  }
</style>
