<template>
  <div :id="linkTransform?.methods?.linkTransform(item.nameProject)" v-for="(item, i) in storeProjects.getProjects" :key="i" class="project-block">
    <div class="project-block__about">
      <h2 class="project-block__about-title">
        {{ item.nameProject }}
      </h2>
      <div class="project-block__about-text">
        {{ item.descriptionProject }}
      </div>
      <svg-heart-icon class="project-block__about-heart-icon" />
      <svg-pine-icon class="project-block__about-pine-icon" />
    </div>
    <div v-if="item.disclaimerProject" class="project-block__about-additional-info-text">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="7.5" fill="#644C5C"/>
        <path d="M7.90502 5.39818V10H7.07502V5.39818H7.90502ZM7.5 3.9999C7.63667 3.9999 7.75333 4.03769 7.85 4.11327C7.95 4.18605 8 4.30082 8 4.45757C8 4.61152 7.95 4.72629 7.85 4.80187C7.75333 4.87745 7.63667 4.91524 7.5 4.91524C7.35667 4.91524 7.23667 4.87745 7.14 4.80187C7.04667 4.72629 7 4.61152 7 4.45757C7 4.30082 7.04667 4.18605 7.14 4.11327C7.23667 4.03769 7.35667 3.9999 7.5 3.9999Z" fill="#FEF8F2"/>
      </svg>
      <p>{{ item.disclaimerProject }}</p>
      </div>
    <div v-if="item.whenGo.length" class="project-block__when-needed-block">
      <h2 class="project-block__block-title">
        Когда стоит идти
      </h2>
      <div class="project-block__when-needed-list">
        <elements-iconed-item
          v-for="(item, i) in item.whenGo"
          :key="i"
          :icon-name="item.iconImg.data?.attributes.url"
          :text="item.text"
        />
      </div>
    </div>
    <div v-if="item.whatInsides.length" class="project-block__what-inside-block">
      <h2 class="project-block__block-title">
        Что внутри?
      </h2>
        <div :class="[{'project-block__what-inside-list': item.whatInsides.length == 2}, {'project-block__what-inside-list2': item.whatInsides.length == 3}, 'mt']">
          <div v-for="item in item.whatInsides" class="project-block__what-inside-item">
            <div v-html="item.heading" class="project-block__what-inside-title">
            </div>
            <div v-html="item.text" class="project-block__what-inside-text">
            </div>
            
          </div>
        </div>
    </div>
    <div v-if="item.analyzes.length" class="project-block__required-block">
      <h2 class="project-block__block-title">
        Какие анализы и обследования понадобятся?
      </h2>
      <div class="project-block__required-collapse-wrapper">
        <elements-collapse v-for="(item, i) in item.analyzes" :key="i" class="project-block__required-collapse" :title="item.type">
          <div v-if="item.subText" class="project-block__required-collapse_subtitle">
            {{ item.subText }}
          </div>
          <ul class="project-block__required-list two-columns">
            <li v-html="item.text"></li>
          </ul>
        </elements-collapse>
      </div>
    </div>
    <div v-if="item.imgSpeaker.data" class="project-block__additional-block">
      
        <img class="project-block__additional-avatar" :src="'https://dzhobava.com/server' + item.imgSpeaker.data.attributes.url" />
        <h3 class="project-block__additional-left-text">
          {{ item.flowStartText }}
        </h3>
    </div>
    <div v-if="!item.listTags" class="project-block__additional-block2">
      <h3 class="project-block__additional-right-title">
        Старт третьего потока — январь 2023
      </h3>
      <a
        :href="item.linkBtnFlows"
        class="project-block__additional-button-container"
        target="_blank"
      >
        <elements-buttons-secondary title="Записаться в лист ожидания" />
      </a>
    </div>
    <div v-if="item.listTags" class="wrapper-tags">
      <div class="project-block__additional-left-column">
        <div v-if="item.listTags?.prevTagFlow" class="project-block__what-inside-title">
          Прошедшие потоки 2022 года
        </div>
        <div class="project-block__tags-list">
          <div v-for="(item, i) in item.listTags?.prevTagFlow" :key="i" class="project-block__tag disabled">
            {{ item }}
          </div>
        </div>
        <div v-if="item.listTags?.planTagFlow" class="project-block__what-inside-title">
          Планируются в 2023 году
        </div>
        <div class="project-block__tags-list">
          <div v-for="(item, i) in item.listTags?.planTagFlow" :key="i" class="project-block__tag">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="project-block__additional-right-column">
        <h3 class="project-block__additional-right-title">
          {{item.titleBtnFlows}}
        </h3>
        <a
          :href="item.linkBtnFlows"
          class="project-block__additional-button-container"
          target="_blank"
        >
          <elements-buttons-secondary title="Записаться в лист ожидания" />
        </a>
        <svg-plus-icon class="project-block__additional-plus-icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import linkTransform from '~~/components/scripts/ConvertsAnchor';




const tabsList = [
  {
    icon: 'heartIcon',
    color: '#78353E',
    text: 'Вы планируете беременность вообще или в ближайшее время'
  },
  {
    icon: 'SvgDiamondIcon',
    color: '#C99D7A',
    text: 'У вас снижение овариального резерва (причина не имеет значения) и/или признаки ранней или преждевременной менопаузы (до 45-ти лет)'
  },
  {
    icon: 'almostCircle',
    color: '#78353E',
    text: 'Вам не более 43 лет. Участие в проекте женщин 44-45 лет возможно при условии, что вы понимаете высокую вероятность низкой эффективности протокола'
  },
  {
    icon: 'SvgGex',
    color: '#644C5C',
    text: 'Вы старше 45-ти лет, но понимаете, что своих яйцеклеток получить практически невозможно'
  },
  {
    icon: 'SvgSoftIcon',
    color: '#064848',
    text: 'Вы рассматриваете вероятность применения метода ЭКО и готовы к криоконсервации яйцеклеток, если в настоящий момент нет потенциального отца ребенка'
  }
]

export default {
  props: {
    data: {
      type: Array,
      default: null
    },
    storeProjects: {
      type: Object,
      default: null
    }
  },
  setup () {

    return {
      tabsList,
      linkTransform
    }
  }
}
</script>

<style lang="scss" scoped>
  .project-block {
    margin: 60px 0 80px 0;
    width: 100%;

    .wrapper-tags {
      display: flex;
      justify-content: space-between;
    }

    &__tags-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__tag {
    background-color: #644C5C;
    padding: 5px 15px;
    border-radius: 23px;
    color: #FEF8F2;
    font-size: 16px;
    margin: 0 10px 10px 0;
    white-space: nowrap;

    @media screen and (max-width: 680px) {
      font-size: 14px;
    }

    &.disabled {
      background-color: #C5B1B2;
    }
  }

    &__additional-left-column,
  &__additional-right-column {
    width: calc((100% - 120px)/2);
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }


    &__about {
      position: relative;
      padding: 80px 0;
      background: #C5B1B2;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media screen and (max-width: 1200px) {
        padding: 60px 0 150px 0;
      }
    }

    &__additional-block2 {
    margin: 90px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #064848;
    border-radius: 15px;
    padding: 40px;

    @media screen and (max-width: 1200px) {
      margin: 30px 0 0 0;
    }
  }

    &__about-title {
      color: #FEF8F2;
      font-size: 38px;
      max-width: 500px;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 30px;
      }
    }

    &__about-text {
      font-size: 16px;
      line-height: 24px;
      max-width: 500px;
      color: #FEF8F2;
    }

    &__about-additional {
      position: absolute;
      bottom: 30px;
      left: -50px;
      width: 210px;
      height: 210px;
      display: flex;
      align-items: center;

      @media screen and (max-width: 1200px) {
        bottom: -100px;
        left: calc(50% - 105px);
      }
    }

    &__about-additional-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      fill: #644C5C;
    }

    &__about-additional-info-text {
      font-size: 14px;
      line-height: 150%;
      color: #232323;
      margin-top: 20px;
      max-width: 600px;
      p {
        margin: 0;
        margin-left: 10px;
      }

      svg {
        width: 25px;
        height: 25px;
      }

      display: flex;
      align-items: self-start;
    }


    &__about-additional-text {
      padding: 0 20px;
      position: relative;
      font-size: 14px;
      line-height: 21px;
      color: #FEF8F2;
      z-index: 2;
      text-align: center;
    }

    &__about-heart-icon {
      position: absolute;
      fill: #C99D7A;
      transform: rotate(50deg) scale(0.8);
      bottom: -20px;
      right: 70px;

      @media screen and (max-width: 1200px) {
        bottom: 40px;
        right: -40px;
      }

      @media screen and (max-width: 680px) {
        display: none;
      }
    }

    &__about-pine-icon {
      position: absolute;
      fill: #064848;
      transform: rotate(-60deg);
      bottom: -40px;
      right: 160px;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__when-needed-block {
      margin: 120px 0 0 0;
    }

    &__when-needed-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px;
      margin: 40px 0 0 0;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
      }
    }

    &__block-title {
      color: #644C5C;
      font-size: 38px;
      line-height: 130%;
      margin: 0;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__what-inside-block {
      margin: 120px 0 0 0;

      @media screen and (max-width: 680px) {
        margin: 70px 0 0 0;
      }
    }

    &__what-inside-list2 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
      }
    }

    .mt {
      margin-top: 50px;
    }

    &__what-inside-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
      }
    }

    &__what-inside-item {
      position: relative;
      background: #ECE7E1;
      border-radius: 15px;
      padding: 40px;
      margin: 20px 0;
    }

    &__what-inside-title {
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;
      color: #78353E;
      margin: 0 0 15px 0;
    }

    &__what-inside-text {
      color: #232323;
      font-size: 16px;
      line-height: 24px;
    }

    &__what-inside-item-union {
      position: absolute;
      fill: #C99D7A;
      transform: scale(2);
      bottom: -40px;
      right: 90px;

      @media screen and (max-width: 1200px) {
        bottom: unset;
        top: -40px;
      }

      @media screen and (max-width: 680px) {
        display: none;
      }
    }

    &__required-block {
      margin: 120px 0 0 0;
    }

    &__required-collapse-wrapper {
      margin: 50px 0 0 0;
    }

    &__required-collapse {

      &:not(:last-child) {
        margin: 0 0 20px 0;
      }
    }

    &__required-list {
      list-style: none;
      padding: 0;
      margin: 0;
      color: #232323;
      font-size: 16px;
      max-width: 70%;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
      }

      li {
        &:not(:last-child) {
          margin: 0 0 5px 0;
        }
      }
    }

    &__required-collapse_subtitle {
      color:#232323;
      font-weight: 600;
      font-size: 14px;
      margin: 0 0 10px 0;
    }

    &__additional-block {
      margin: 90px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      
      max-width: 800px;

      img {
        width: 40%;
        height: 40%;
        margin: 10px auto;

        @media screen and (max-width: 450px) {
          width: 100%;
        }
      }
    }

    &__additional-left-column,
    &__additional-right-column {
      width: calc((100% - 120px)/2);
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }

    &__additional-avatar {
      width: 90px;
      height: 90px;
    }

    &__additional-left-text {
      color: #644C5C;
      font-size: 32px;
      line-height: 130%;
      margin: 30px 0 0 0;

      @media screen and (max-width: 1200px) {
        font-size: 30px;
      }
    }

    &__additional-right-column {
      position: relative;
      background-color: #064848;
      border-radius: 15px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media screen and (max-width: 1200px) {
        margin: 30px 0 0 0;
        align-items: center;
      }
    }

    &__additional-right-title {
      color: #FEF8F2;
      font-size: 26px;
      line-height: 34px;
      max-width: 70%;
      margin: 0;

      @media screen and (max-width: 1200px) {
        max-width: 100%;
      }
    }

    &__additional-button-container {
      display: flex;
      text-decoration: none;
    }

    &__additional-almost-circle {
      position: absolute;
      top: 0;
      right: 0;
      fill: #839389;
      transform: scale(1.5) rotate(40deg);

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>
