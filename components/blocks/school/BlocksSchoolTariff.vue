<template>
  <div class="school-tariff">
    <h2 class="school-tariff__title">
      Тарифы
    </h2>
    <div class="school-tariff__tabs-wrapper">
      <div
        :class="{
          'school-tariff__tab': true,
          'school-tariff__tab_active': activeTab === 1
        }"
        @click="activeTab = 1"
      >
        <h3 class="school-tariff__tab-title">
          По пакетам
        </h3>
        <div class="school-tariff__tab-label">
          Оптимальное наполнение
        </div>
        <svg-arrow-right class="school-tariff__tab-arrow" />
      </div>
      <div
        :class="{
          'school-tariff__tab': true,
          'school-tariff__tab_active': activeTab === 2
        }"
        @click="activeTab = 2"
      >
        <h3 class="school-tariff__tab-title">
          По триместрам
        </h3>
        <div class="school-tariff__tab-label">
          Спецпредложение
        </div>
        <svg-arrow-right class="school-tariff__tab-arrow" />
      </div>
    </div>
    <div v-if="activeTab === 1" class="school-tariff__packages-list">
      <div
        v-for="(item, i) in packages"
        :key="i"
        class="school-tariff__package-item"
      >
        <div>
          <div class="school-tariff__package-label">
            {{ item?.label }}
          </div>
          <div class="school-tariff__package-title">
            {{ item?.title }}
          </div>
          <div v-for="(programObject, i) in item.program" :key="i" class="school-tariff__package-program">
            {{ programObject.label }}
            <ul class="school-tariff__package-program-list">
              <li v-for="(programItem, i) in programObject?.items" :key="i" class="school-tariff__package-program-item">
                {{ programItem }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="school-tariff__with-support-block">
            <div class="school-tariff__price-label">
              С обратной связью от Элисо
              <svg-info-icon class="school-tariff__info-icon" />
              <div class="school-tariff__tooltip">
                <b>
                  Те, кто вступит в Школу беременных на пакеты с обратной связью, получат дополнительные привелегии
                </b><br><br>
                — Общение и поддержку от других будущих мам в закрытом чате<br><br>
                — Обратную связь от главного эксперта Академии Элисо Джобава. Каждый день (кроме субботы, воскресенья
                и праздников) в плановом порядке в течение суток доктор Элисо ответит на вопросы участниц<br><br>
              </div>
            </div>
            <div class="school-tariff__price">
              {{ item?.costWithSupport }}
            </div>
            <elements-buttons-primary title="Купить тариф" />
          </div>
          <div class="school-tariff__with-support-block">
          <div class="school-tariff__price-label">
            Без обратной связи
          </div>
          <div class="school-tariff__price">
            {{ item?.costWithoutSupport }}
          </div>
          <elements-buttons-secondary title="Купить тариф" />
        </div>
        </div>
      </div>
    </div>
    <div v-else class="school-tariff__trimester-list">
      <div v-for="(trimester, i) in trimesters" :key="i" class="school-tariff__trimester-item">
        <div class="school-tariff__trimester-left-column">
          <div class="school-tariff__trimester-title-wrapper">
            <div class="school-tariff__package-label">
              {{ trimester?.label }}
            </div>
            <div class="school-tariff__package-title">
              {{ trimester?.title }}
            </div>
          </div>
          <div class="school-tariff__with-support-block desktop-only">
            <div class="school-tariff__price-label">
              Без обратной связи
            </div>
            <div class="school-tariff__price">
              {{ trimester?.cost }}
            </div>
            <elements-buttons-secondary title="Купить тариф" />
          </div>
        </div>
        <div class="school-tariff__trimester-right-column">
          <div v-for="(programObject, i) in trimester.program" :key="i" class="school-tariff__package-program">
            {{ programObject.label }}
            <ul class="school-tariff__package-program-list">
              <li v-for="(programItem, i) in programObject?.items" :key="i" class="school-tariff__package-program-item">
                {{ programItem }}
              </li>
            </ul>
          </div>
          <div class="school-tariff__with-support-block mobile-only">
            <div class="school-tariff__price-label">
              Без обратной связи
            </div>
            <div class="school-tariff__price">
              {{ trimester?.cost }}
            </div>
            <elements-buttons-secondary title="Купить тариф" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const packages = [
  {
    label: 'доступ на 12 месяцев',
    title: 'Полный курс для беременных',
    costWithSupport: '31.500 руб.',
    costWithoutSupport: '22.650 руб.',
    program: [
      {
        label: 'Все уроки 5-ти блоков',
        items: [
          '— 1 триместр',
          '— 2 триместр',
          '— 3 триместр',
          '— Подготовка к родам',
          '— Послеродовый период'
        ]
      },
      {
        label: 'Все материалы, бонусы и подарки 6-ого блока'
      }
    ]
  },
  {
    label: 'доступ на 9 месяцев',
    title: 'Со 2 триместра',
    costWithSupport: '25.500 руб.',
    costWithoutSupport: '18.450 руб.',
    program: [
      {
        label: 'Все уроки 4-х блоков',
        items: [
          '— 2 триместр',
          '— 3 триместр',
          '— Подготовка к родам',
          '— Послеродовый период'
        ]
      },
      {
        label: 'Уроки из 1-ого блока «1 триместр»',
        items: [
          '— Урок психолога',
          '— Урок маммолога',
          '— Урок остеопата',
          '— Урок йоги',
          '— Урок гинеколога и стилиста'
        ]
      }
    ]
  },
  {
    label: 'доступ на 6 месяцев',
    title: 'С 3 триместра',
    costWithSupport: '19.500 руб.',
    costWithoutSupport: '14.250 руб.',
    program: [
      {
        label: 'Все уроки 3-х блоков',
        items: [
          '— 3 триместр',
          '— Подготовка к родам',
          '— Послеродовый период'
        ]
      },
      {
        label: 'Уроки из 1-ого блока «1 триместр»',
        items: [
          '— Урок психолога',
          '— Урок маммолога',
          '— Урок остеопата',
          '— Урок йоги',
          '— Урок гинеколога и стилиста'
        ]
      },
      {
        label: 'Все материалы, бонусы и подарки 6-ого блока'
      }
    ]
  },
  {
    label: 'доступ на 4 месяца',
    title: 'Подготовка к родам',
    costWithSupport: '13.500 руб.',
    costWithoutSupport: '10.000 руб.',
    program: [
      {
        label: 'Все уроки 2-х блоков',
        items: [
          '— Подготовка к родам',
          '— Послеродовый период'
        ]
      },
      {
        label: 'Уроки из 1-ого блока «1 триместр»',
        items: [
          '— Урок психолога',
          '— Урок маммолога',
          '— Урок остеопата',
          '— Урок йоги',
          '— Урок гинеколога и стилиста'
        ]
      },
      {
        label: 'Уроки из 3-ого блока «3 триместр»',
        items: [
          '— Урок остеопата',
          '— Урок врача аюрведы'
        ]
      },
      {
        label: 'Все материалы, бонусы и подарки 6-ого блока'
      }
    ]
  },
  {
    label: 'доступ на 3 месяца',
    title: 'После родов',
    costWithSupport: '7.900 руб.',
    costWithoutSupport: '6.150 руб.',
    program: [
      {
        label: 'Все уроки блока «Послеродовый период»',
      },
      {
        label: 'Уроки из 1-ого блока «1 триместр»',
        items: [
          '— Урок психолога',
          '— Урок маммолога',
        ]
      },
      {
        label: 'Уроки из 3-ого блока «3 триместр»',
        items: [
          '— Урок остеопата',
          '— Урок врача аюрведы'
        ]
      },
      {
        label: 'Все дополнительные материалы'
      },
      {
        label: 'Подарки',
        items: [
          '— Гайд по питанию беременных',
          '— Книга рецептов для беременных',
          '— Программа «Плоский животик после родов/КС»',
          '— Авторская программа восстановления после родов'
        ]
      },
    ]
  },
]

const trimesters = [
  {
    label: 'доступ на 4 месяца',
    title: '1 триместр',
    cost: '5.000 руб.',
    program: [
      {
        label: 'Все уроки из 1-ого блока «1 триместр»'
      },
      {
        label: 'Дополнительные материалы',
        items: [
          '— Дневник беременности',
          '— Список книг о беременности',
          '— Список фильмов о беременности',
          '— Упражнения для беременных от остеопата',
          '— Методика самоосмотра груди',
          '— Чек-лист «Биострахование малыша»'
        ]
      },
      {
        label: 'Подарки',
        items: [
          '— Гайд по питанию беременных, расширенный',
          '— Книга рецептов для беременных',
          '— Вебинар «Анализы и обследования во время беременности»',
          '— Методичка «Острые респираторные заболевания и беременность»'
        ]
      }
    ]
  },
  {
    label: 'доступ на 4 месяца',
    title: '2 триместр',
    cost: '5.000 руб.',
    program: [
      {
        label: 'Уроки из 1-ого блока «1 триместр»',
        items: [
          '— Урок психолога',
          '— Урок маммолога',
          '— Урок остеопата',
          '— Урок йоги',
          '— Урок гинеколога и стилиста'
        ]
      },
      {
        label: 'Уроки из 2-ого блока «2 триместр»',
        items: [
          '— Урок гинеколога',
          '— Урок врача аюрведы'
        ]
      },
      {
        label: 'Дополнительные материалы',
        items: [
          '— Дневник беременности',
          '— Список книг о беременности',
          '— Список фильмов о беременности',
          '— Упражнения для беременных от остеопата',
          '— Методика самоосмотра груди',
          '— Чек-лист «Биострахование малыша»'
        ]
      },
      {
        label: 'Подарки',
        items: [
          '— Гайд по питанию беременных, расширенный',
          '— Книга рецептов для беременных',
          '— Вебинар «Анализы и обследования во время беременности»',
          '— Вебинар «Углеводные нарушения и беременность»',
          '— Методичка «Острые респираторные заболевания и беременность»'
        ]
      }
    ]
  },
  {
    label: 'доступ на 4 месяца',
    title: '3 триместр',
    cost: '5.000 руб.',
    program: [
      {
        label: 'Уроки из 1-ого блока «1 триместр»',
        items: [
          '— Урок психолога',
          '— Урок маммолога',
          '— Урок остеопата',
          '— Урок йоги',
          '— Урок гинеколога и стилиста'
        ]
      },
      {
        label: 'Уроки из 3-ого блока «3 триместр»',
        items: [
          '— Урок гинеколога',
          '— Урок врача аюрведы',
          '— Урок остеопата'
        ]
      },
      {
        label: 'Подарки',
        items: [
          '— Гайд по питанию беременных, расширенный',
          '— Книга рецептов для беременных',
          '— Вебинар «Анализы и обследования во время беременности»',
          '— Вебинар «Углеводные нарушения и беременность»',
          '— Методичка «Острые респираторные заболевания и беременность»'
        ]
      },
      {
        label: 'Дополнительные материалы',
        items: [
          '— Дневник беременности',
          '— Рецепт масла для промежности для профилактики разрывов в родах',
          '— Список вещей в роддом — Памятка',
          '— Памятка «Создание атмосферы в родах»',
          '— План родов',
          '— Памятка «Позы в родах»',
          '— Список книг о беременности',
          '— Список фильмов о беременности',
          '— Упражнения для беременных от остеопата',
          '— Методика самоосмотра груди',
          '— Чек-лист «15 вопросов акушеру-гинекологу перед родами»',
          '— Список специалистов, прошедших обучение по гипнородам в России',
          '— Чек-лист «Биострахование малыша»'
        ]
      },
    ]
  },
  {
    label: 'доступ на 4 месяца',
    title: 'Роды',
    cost: '5.000 руб.',
    program: [
      {
        label: 'Уроки из 4-ого блока «Подготовка к родам»',
        items: [
          '— Урок гинеколога',
          '— Урок психолога',
          '— Урок доулы'
        ]
      },

      {
        label: 'Уроки из 1-ого блока «1 триместр»',
        items: [
          '— Урок психолога',
          '— Урок маммолога',
          '— Урок йоги',
        ]
      },
      {
        label: 'Уроки из 3-ого блока «3 триместр»',
        items: [
          '— Урок врача аюрведы',
          '— Урок остеопата'
        ]
      },
      {
        label: 'Подарки',
        items: [
          '— Гайд по питанию беременных, расширенный',
          '— Книга рецептов для беременных',
          '— Вебинар «Анализы и обследования во время беременности»',
          '— Вебинар «Углеводные нарушения и беременность»',
          '— Методичка «Острые респираторные заболевания и беременность»'
        ]
      },
      {
        label: 'Дополнительные материалы',
        items: [
          '— Рецепт масла для промежности для профилактики разрывов в родах',
          '— Список вещей в роддом — Памятка',
          '— Памятка «Создание атмосферы в родах»',
          '— План родов',
          '— Памятка «Позы в родах»',
          '— Список книг о беременности',
          '— Список фильмов о беременности',
          '— Рецепты чаев в роды и послеродовый период для скорейшего восстановления',
          '— Памятка по массажу для партнера на роды',
          '— Методика самоосмотра груди',
          '— Чек-лист «15 вопросов акушеру-гинекологу перед родами»',
          '— Список специалистов, прошедших обучение по гипнородам в России',
          '— Чек-лист «Биострахование малыша»'
        ]
      },
    ]
  },
]

  export default {

    setup () {
      const activeTab = ref(1)

      return {
        activeTab,
        packages,
        trimesters
      }
    }
  }
</script>

<style lang="scss" scoped>
  .school-tariff {
    width: 100%;

    &__title {
      font-size: 38px;
      line-height: 130%;
      color: #644C5C;
      letter-spacing: 0.03em;
      margin: 0;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
        flex-direction: column;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
        flex-direction: column;
      }
    }

    &__tabs-wrapper {
      display: flex;
      margin: 40px 0 0 0;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__tab {
      position: relative;
      width: calc(50% - 20px);
      padding: 20px 40px;
      background-color: #ECE7E1;
      border-radius: 15px;
      color: #064848;
      display: flex;
      align-items: flex-end;
      cursor: pointer;
      transition: background-color .2s, color .2s;

      &:first-child {
        margin: 0 40px 0 0;
      }

      &_active {
        background-color: #064848;
        color: #FEF8F2;

        .school-tariff__tab-arrow {
          fill: #FEF8F2;
        }
      }

      @media screen and (max-width: 1200px) {
        width: 100%;

        &:not(:last-child) {
          margin: 0 0 20px 0;
        }
      }
    }

    &__tab-title {
      margin: 0 15px 0 0;
      font-size: 22px;
      line-height: 28px;
    }

    &__tab-label {
      font-size: 14px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      line-height: 21px;
    }

    &__tab-arrow {
      position: absolute;
      fill: #064848;
      transform: rotate(90deg);
      right: 20px;
      top: 28px;
      transition: fill .2s;
    }

    &__packages-list {
      margin: 60px 0 0 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 80px 40px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px 30px;
      }

      @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
        grid-gap: 15px;
      }
    }

    &__package-item {
      padding: 40px;
      background: #ECE7E1;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media screen and (max-width: 1200px) {
        padding: 30px;
      }
    }

    &__package-label {
      color: #232323;
      font-size: 14px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    &__package-title {
      font-family: Oswald;
      font-weight: 700;
      color: #644C5C;
      font-size: 26px;
      line-height: 130%;
      margin: 10px 0 0 0;
    }

    &__package-program-list {
      list-style: none;
      padding: 0;
      margin: 20px 0 0 0;

      li {
        margin: 0 0 5px 0;
      }
    }

    &__package-program {
      margin: 20px 0 0 0;
      color: #232323;
      font-size: 16px;
      lime-height: 150%;
    }

    &__with-support-block {
      margin: 40px 0 0 0;

      &.desktop-only {
        @media screen and (max-width: 1200px) {
          display: none;
        }
      }

      &.mobile-only {
        @media screen and (min-width: 1201px) {
          display: none;
        }
      }
    }

    &__price-label {
      display: inline-block;
      position: relative;
      font-size: 14px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      line-height: 21px;

      @media screen and (max-width: 1200px) {
        font-size: 13px;
      }
    }

    &__tooltip {
      opacity: 0;
      position: absolute;
      background: #C5B1B2;
      border-radius: 15px;
      padding: 40px;
      bottom: calc(100% + 20px);
      left: 50%;
      width: 400px;
      color: #FEF8F2;
      font-size: 16px;
      line-height: 150%;
      transition: opacity .2s;

      @media screen and (max-width: 1200px) {
        left: 0;
      }
    }

    &__info-icon {
      position: absolute;
      width: 15px;
      height: 15px;
      right: -20px;
      bottom: 100%;
      cursor: pointer;

    }

    &__price {
      color: #644C5C;
      font-size: 22px;
      font-weight: 700;
      line-height: 130%;
      margin: 10px 0 0 0;
    }

    &__trimester-item {
      background: #ECE7E1;
      border-radius: 15px;
      padding: 40px;
      margin: 40px 0 0 0;
      display: flex;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__trimester-left-column {
      margin: 0 150px 0 0;
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media screen and (max-width: 1200px) {
        margin: 0;
        width: 100%;
      }
    }

    &__trimester-right-column {
      //display: grid;
      //grid-template-columns: 1fr 1fr;
    }
  }

  .school-tariff__info-icon:hover + .school-tariff__tooltip {
    opacity: 1;
  }
</style>
