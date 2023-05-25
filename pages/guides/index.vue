<template>
  <div class="guides section-container">
    <blocks-guides-intro />
    <blocks-workers-card-list :data="store.getDataGuides" @openModal="openModal" />
    <blocks-message-us class="guides__message-us" />
    <div v-if="isModalOpened" class="guides__modal">
      <div class="guides__modal-window">
        <div class="guides__close-cross-button" @click="switchModal" />
        <div class="guides__modal-scroll-line">
          <h3 class="guides__modal-title">
            {{ currentModalData?.popupGuide.title }}
          </h3>
          <div class="guides__modal-label">
            {{ currentModalData?.popupGuide.subTitle }}
          </div>
          <h4 class="guides__secondary-title">
            О чем поговорим?
          </h4>
          <ul class="guides__modal-list">
            <li v-for="(item, i) in currentModalData?.popupGuide.About.split('—').slice(1, -1)" :key="i" class="guides__modal-item">
              {{ item }}
            </li>
          </ul>
          <div v-if="currentModalData?.guideEats">
            <h3 class="guides__modal-title">
            {{ currentModalData?.guideEats.title }}
          </h3>
          <div class="guides__modal-label">
            {{ currentModalData?.guideEats.About }}
          </div>
          </div>
          <div v-for="(item, i) in currentModalData?.authorGuide" :key="i" class="guides__author-block">
            <img class="guides__author-image" :src="'https://dzhobava.com/server' + item.avatar.data.attributes.url" />
            <div class="guides__about-author">
              <div class="guides__author-label">
                Автор Вебинара
              </div>
              <div class="guides__author-title">
                {{ item.authorTitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useGuidesStore} from "~/stores/guidesStore"
const data = [
  {
    type: '2 pdf-файла для скачивания',
    title: 'Гайд по питанию беременных + книга рецептов',
    description: 'Гайд поможет понять, почему вес так важен для репродуктивной системы и как держать его под контролем.' +
      'В книге рецептов представлено более 70-ти рецептов разнообразных сбалансированных блюд, которые были подобраны' +
      'и составлены совместно с врачом-педиатром.',
    cost: '850 руб.',
    isDetailed: true,
    isSpecial: true,
    image: '_nuxt/static/images/webinar4.png',
    for: 'Для беременных',
    talkAbout: [
      '— Об «идеальном» весе беременной женщины и рекомендациях по прибавке массы тела в каждом триместре',
      '— О том, чем опасна неправильная диета для малыша',
      '— Об основных принципах и режиме питания во время беременности, а также о питьевом режиме',
      '—  Об особенностях питания при нарушениях углеводного обмена и гестационном диабете (диабете беременных)',
      '— Об особенностях питания при повышении свертывания крови',
      '— Об особенностях питания при склонности к газообразованию и вздутию',
      '— Об особенностях питания при склонности к отекам'
      ]
  },
  {
    type: '1 pdf-файл для скачивания',
    title: 'Гайд «Плоский животик после родов/кесарева сечения»',
    description: 'Гайд даст информацию о профилактике растяжек и диастаза во время беременности и в послеродовом периоде,' +
      'а также поможет узнать всё о «комфортных» способах сохранения фигуры.',
    cost: '1.000 руб.',
    isDetailed: true,
    isSpecial: true,
    image: '_nuxt/static/images/webinar5.png',
    for: 'Для беременных, для женщин после родов',
    talkAbout: [
      '— Рекомендации по профилактике растяжек',
      '— Схемы добавок и компрессов для поддержания эластичности кожи во время и после беременности',
      '— Рекомендации по профилактике и коррекции диастаза',
      '— Схемы тейпирования живота в послеродовом периоде',
      '— Виды и техника подвязывания',
      '— Рекомендации по спорту и образу жизни для сохранения фигуры во время беременности и после родов'
    ]
  },
  {
    type: '1 pdf-файл для скачивания',
    title: 'Методичка «Острые респираторные заболевания и беременность»',
    description: 'Методичка содержит российские и международные варианты самопомощи при появлении симптомов' +
      'респираторного заболевания у беременных. Любые недомогания во время беременности требуют особого внимания и' +
      'правильного подбора средств для устранения неприятных ощущений.',
    cost: '500 руб.',
    isDetailed: true,
    isSpecial: true,
    image: '_nuxt/static/images/webinar3.png',
    for: 'Для беременных',
    talkAbout: [
      '— Что и в каких дозировках принимать при кашле, насморке, боли в ушах и горле, температуре',
      '— Что подойдет для самостоятельного лечения до момента, пока вы не попадете на очный прием к своему лечащему врачу (рекомендации для разных сроков беременности)',
      '— Реабилитация после перенесенного ОРЗ и профилактика осложнений',
      '— Схема поддержки плаценты как одной из органов-мишеней, страдающих при заболевании'
    ]
  }
]

export default {

  setup () {
    const store = useGuidesStore();
    store.fetchDataGuides()
    const isModalOpened = ref(false)

    const currentModalData = ref(null)

    function openModal (item) {
      currentModalData.value = item
      switchModal()
    }

    function switchModal () {
      isModalOpened.value = !isModalOpened.value
    }
    return {
      data,
      isModalOpened,
      currentModalData,
      switchModal,
      openModal,
      store,
    }
  }
}
</script>

<style lang="scss" scoped>
  .guides {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 1200px) {
      max-width: 680px;
    }

    @media screen and (max-width: 680px) {
      padding: 0 20px 120px 20px;
    }

    @media screen and (max-width: 400px) {
      padding: 0 10px 90px 10px;
    }

    &__message-us {
      margin: 150px 0 0 0;
    }

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
      width: 760px;
      padding: 60px;
      background-color: #ECE7E1;
      position: relative;
      max-height: 100%;
      overflow: hidden;
    }

    &__modal-scroll-line {
      overflow-y: scroll;
      max-height: calc(100vh - 120px);

      &::-webkit-scrollbar {
        display: none;
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

    &__modal-title {
      color: #644C5C;
      font-size: 26px;
      margin: 0 0 20px 0;

      @media screen and (max-width: 680px) {
        font-size: 22px;
      }
    }

    &__modal-list {
      list-style: none;
      padding: 0;

      li {
        &::before {
          content: '—'
        }
      }
    }

    &__modal-item {
      font-size: 14px;
      line-height: 24px;
      color: #232323;
      margin: 0 0 5px 0;
    }

    &__secondary-title {
      color: #78353E;
      font-size: 22px;
      margin: 50px 0 0 0;

      @media screen and (max-width: 680px) {
        font-size: 18px;
      }
    }

    &__modal-label {
      font-size: 16px;
      color: #232323;
    }

    &__author-block {
      margin: 50px 0 0 0;
      display: flex;

      @media screen and (max-width: 680px) {
        flex-direction: column;
      }
    }

    &__author-image {
      width: 100px;
      height: 100px;
      margin: 0 20px 0 0;
    }

    &__author-label {
      font-size: 16px;
      line-height: 24px;
      color: #232323;
      text-transform: uppercase;

      @media screen and (max-width: 680px) {
        margin: 10px 0 0 0;
      }
    }

    &__author-title {
      margin: 5px 0 0 0;
      font-size: 16px;
      line-height: 24px;
      color: #232323;
    }
  }
</style>
