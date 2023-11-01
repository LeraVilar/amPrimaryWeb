<template>
  <div class="about-science-works" id="about-science-works">
    <h2 class="about-science-works__title">
      Научные работы и патенты
    </h2>
    <div class="about-science-works__works-list">
      <a :href="item.link" class="about-science-works__item" v-for="(item, i) in worksList" :key="i">
        <div>
          <div class="about-science-works__item-year">
            {{ item?.year }}
          </div>
          <h4 class="about-science-works__item-title">
            {{ item?.title }}
          </h4>
          <div class="about-science-works__item-text" v-html="item?.text" />
        </div>
        <div class="about-science-works__item-link">
          Посмотреть
          <svg-arrow-right class="about-science-works__item-arrow" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>

const worksList = [
  {
    year: '2005',
    title: 'Диссертация',
    text: 'На соискание ученой степени кандидата медицинских наук ' +
          '<b>«Роль молекулярных и генетических факторов тромбофилии в генезе неразвивающейся беременности и начавшегося выкидыша»</b>',
    link: 'https://medical-diss.com/medicina/rol-molekulyarnyh-i-geneticheskih-faktorov-trombofilii-v-geneze-nerazvivayuscheysya-beremennosti-i-nachavshegosya-vykidys'
  },
  {
    year: '2014',
    title: 'Диссертация',
    text: 'На соискание ученой степени доктора медицинских наук ' +
          '<b>«Беременность высокого риска по развитию акушерской патологии — система гемостаза и функция эндотелия. Системный подход к диагностике и терапии»</b>',
    link: 'https://new-disser.ru/_avtoreferats/01005096592.pdf'
  },
  {
    year: '2014',
    title: 'Патенты на изобретения',
    text: '«Способ диагностики плацентарной недостаточности у пациенток после эмболизации маточных артерий по поводу миомы матки»,' +
          '«Способ коррекции тромбофилических нарушений гемостаза во время беременности»',
    link: 'https://edrid.ru/authors/201.1a65b.html'
  }
]

  export default {

    setup () {

      return {
        worksList
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-science-works {
    width: 100%;

    &__title {
      color: #644C5C;
      font-size: 38px;
      margin: 0 0 20px 0;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 30px;
      }
    }

    &__works-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
      }
    }

    &__item {
      background-color: #C5B1B2;
      border-radius: 15px;
      padding: 40px;
      height: 410px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      text-decoration: none;
      transition: background-color .2s;

      &:hover {
        background-color: #644C5C;
      }

      @media screen and (max-width: 1200px) {
        height: 320px;
      }

      @media screen and (max-width: 680px) {
        height: auto;
        padding: 30px;
      }
    }

    &__item-year {
      color: #FEF8F2;
      font-size: 14px;
      font-weight: 600;
    }

    &__item-title {
      color: #FEF8F2;
      font-size: 26px;
      margin: 10px 0 20px 0;

      @media screen and (max-width: 680px) {
        font-size: 22px;
      }
    }

    &__item-text {
      color: #FEF8F2;
      font-size: 16px;
      line-height: 150%;

      @media screen and (max-width: 680px) {
        font-size: 15px;
      }
    }

    &__item-arrow {
      fill: #FEF8F2;
      margin: 0 0 0 10px;
    }

    &__item-link {
      color: #FEF8F2;

      @media screen and (max-width: 680px) {
        margin: 30px 0 0 0;
      }
    }
  }
</style>
