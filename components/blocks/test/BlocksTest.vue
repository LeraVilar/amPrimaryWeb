<template>
  <div v-if="isOpened">
    <elements-modals-keeper :is-modal-opened="isOpened" @close="closePopup()">
      <div v-if="showResult === null">
        <h2 class="modal-test__title">
          {{ getCurrentQuestion?.question }}
        </h2>
        <div class="modal-test__answers">
          <div
            class="modal-test__answer-item"
            v-for="(answer, i) in getCurrentQuestion?.answers"
            :key="i"
          >
            <input
              class="modal-test__input-radio"
              :id="answer?.id"
              type="radio"
              :value="answer"
              v-model="picked"
            />
            <label class="modal-test__label" :for="answer?.id">
              <svg-arrow-right class="modal-test__label-arrow" />
              {{ answer?.label }}
            </label>
          </div>
        </div>
        <div class="modal-test__button" @click="nextStep()">
          Далее
          <svg-arrow-right class="modal-test__button-arrow" />
        </div>
      </div>
      <div v-else>
        <h2 class="modal-test__title">Подходящие вам продукты:</h2>
        <ul>
          <li
            class="modal-test__option-item item-res"
            v-for="(option, i) in getResult?.options"
            :key="i"
          >
            <span v-if="option.label" v-html="option.label"></span>
            <NuxtLink v-html="option.linkText" :to="option.link"></NuxtLink>
          </li>
        </ul>
      </div>
    </elements-modals-keeper>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";

const questions = [
  {
    id: 1,
    question:
      "Вы врач и хотите посмотреть\n" +
      "проекты на профессиональные\n" +
      "темы?",
    answers: [
      {
        id: 1,
        label: "Да",
        result: 1,
      },
      {
        id: 2,
        label: "Нет",
        redirectTo: 2,
      },
    ],
  },
  {
    id: 2,
    question: "СКОЛЬКО ВАМ ЛЕТ?",
    answers: [
      {
        id: 1,
        label: "18-30 лет",
        redirectTo: 3,
      },
      {
        id: 2,
        label: "31-35 лет",
        redirectTo: 3,
      },
      {
        id: 3,
        label: "36-40 лет",
        redirectTo: 3,
      },
      {
        id: 4,
        label: "41-55 лет",
        redirectTo: 7,
      },
      {
        id: 5,
        label: "56 лет и старше",
        result: 9,
      },
    ],
  },
  {
    id: 3,
    question: "Вы беременны?",
    answers: [
      {
        id: 1,
        label: "Да",
        result: 2,
      },
      {
        id: 2,
        label: "Нет",
        redirectTo: 4,
      },
    ],
  },
  {
    id: 4,
    question: "Планируете ли вы беременность?",
    answers: [
      {
        id: 1,
        label: "Да",
        redirectTo: 5,
      },
      {
        id: 2,
        label: "Нет",
        result: 3,
      },
    ],
  },
  {
    id: 5,
    question: "Вы пытаетесь забеременеть более года?",
    answers: [
      {
        id: 1,
        label: "Да",
        result: 4,
      },
      {
        id: 2,
        label: "Нет",
        redirectTo: 6,
      },
    ],
  },
  {
    id: 6,
    question:
      "У вас были потери беременности (\n" +
      "невынашивание) или биохимические\n" +
      "беременности?",
    answers: [
      {
        id: 1,
        label: "Да",
        result: 5,
      },
      {
        id: 2,
        label: "Нет",
        result: 6,
      },
    ],
  },
  {
    id: 7,
    question: "Вы беременны?",
    answers: [
      {
        id: 1,
        label: "Да",
        result: 2,
      },
      {
        id: 2,
        label: "Нет",
        redirectTo: 8,
      },
    ],
  },
  {
    id: 8,
    question: "Планируете ли вы беременность?",
    answers: [
      {
        id: 1,
        label: "Да",
        redirectTo: 5,
      },
      {
        id: 2,
        label: "Нет",
        redirectTo: 9,
      },
    ],
  },
  {
    id: 9,
    question:
      "Есть ли у вас следующие симптомы:\n" +
      "изменение менструального цикла (\n" +
      "удлинение, укорочение, нестабильность,\n" +
      "выпадение цикла), ночная потливость,\n" +
      "приливы жара, ночные вставания в\n" +
      "туалет, нарушения мочеиспускания (\n" +
      "недержание), изменения настроения,\n" +
      "тревожность, депрессия, сухость\n" +
      "слизистых, хроническая усталость?",
    answers: [
      {
        id: 1,
        label: "Да",
        result: 7,
      },
      {
        id: 2,
        label: "Нет",
        result: 8,
      },
    ],
  },
];

const results = [
  {
    id: 1,
    options: [
      {
        label: "Вебинар",
        linkText:
          "«Бесплодие. Целостный взгляд на проблему. Как оптимально достичь родов»",
        link: "/formedworkers#vebinar-«besplodie-celostnyy-vzglyad-na-problemu-kak-optimalno-dostich-rodov»",
      },
      {
        label: "Вебинар",
        linkText:
          "«Авторские протоколы ведения беременности групп высокого риска. Обоснованные индивидуализированные стратегии за рамками стандартов»",
        link: "/formedworkers#vebinar-«avtorskie-protokoly-vedeniya-beremennosti-grupp-vysokogo-riska-obosnovannye-individualizirovannye-strategii-za-ramkami-standartov»",
      },
      {
        label: "",
        linkText: "ПАКЕТ ВЕБИНАРОВ ДЛЯ ВРАЧЕЙ",
        link: "/formedworkers#paket-dlya-specialistov-",
      },
    ],
  },
  {
    id: 2,
    options: [
      {
        label: "",
        linkText: "Цикл вебинаров по беременности",
        link: "/school",
      },
      {
        label: "Гайд ",
        linkText: "Методичка «Острые респираторные заболевания и беременность»",
        link: "/guides#metodichka-«ostrye-respiratornye-zabolevaniya-i-beremennost»",
      },
      {
        label: "Вебинар ",
        linkText: '"Анализы и обследования во<br> время беременности"',
        link: "/webinars#vebinar-«analizy-i-obsledovaniya-vo-vremya-beremennosti»",
      },
      {
        label: "Пакет Вебинар ",
        linkText:
          "«Гестационный сахарный диабет» + Гайд по питанию и книга рецептов",
        link: "/webinars#vebinar-«uglevodnye-narusheniya-vo-vremya-beremennosti-gestacionnyy-saharnyy-diabet»",
      },
      {
        label: "",
        linkText: "Гайд по питанию беременных + книга рецептов",
        link: "/guides#gayd-po-pitaniyu-beremennyh-+-kniga-receptov",
      },
    ],
  },
  {
    id: 3,
    options: [
      {
        label: "ВЕБИНАР ",
        linkText: "«Контрацепция. Выбор метода, обследование, сопровождение»",
        link: "/webinars#vebinar-«kontracepciya-vybor-metoda,-obsledovanie,-soprovozhdenie»",
      },
    ],
  },
  {
    id: 4,
    options: [
      {
        label: "ВЕБИНАР ",
        linkText:
          "«Если долго не наступает беременность: <br /> инструкция по решению проблемы»",
        link: "/webinars#vebinar-«esli-dolgo-ne-nastupaet-beremennost:-instrukciya-po-resheniyu-problemy»",
      },
      {
        label: "Персонализированный проект ",
        linkText: '"РЕПРО ОЖИВИ ЯИЧНИКИ"',
        link: "/projects#personalizirovannyy-proekt-«repro-—-ozhivi-yachniki»",
      },
    ],
  },
  {
    id: 5,
    options: [
      {
        label: "ВЕБИНАР ",
        linkText:
          '«Что делать если, если были <br /> потери беременности? <br /> Правильные шаги на пути к счастливому материнству"',
        link: "/webinars#vebinar-«chto-delat-esli,-esli-byli-poteri-beremennosti?-pravilnye-shagi-na-puti-k-schastlivomu-materinstvu",
      },
      {
        label: "ПАКЕТ ВЕБИНАРОВ ",
        linkText: "«Подготовка к <br /> беременности, 2 в 1»",
        link: "/webinars#vebinar-«podgotovka-k-beremennosti,-2-v-1»",
      },
    ],
  },
  {
    id: 6,
    options: [
      {
        label: "ПАКЕТ ВЕБИНАРОВ ",
        linkText: "«Подготовка к <br /> беременности, 2 в 1»",
        link: "/webinars#vebinar-«podgotovka-k-beremennosti,-2-v-1»",
      },
    ],
  },
  {
    id: 7,
    options: [
      {
        label: "ВЕБИНАР ",
        linkText: "«Контрацепция. Выбор метода, обследование, сопровождение»",
        link: "/webinars#vebinar-«kontracepciya-vybor-metoda,-obsledovanie,-soprovozhdenie»",
      },
      {
        label: "Персонализированный проект ",
        linkText: '"РЕПРО ОЖИВИ ЯИЧНИКИ"',
        link: "/projects#personalizirovannyy-proekt-«meno-—-ozhivi-yaichniki»",
      },
    ],
  },
  {
    id: 8,
    options: [
      {
        label: "ВЕБИНАР ",
        linkText: "«Контрацепция. Выбор метода, обследование, сопровождение»",
        link: "/webinars#vebinar-«kontracepciya-vybor-metoda,-obsledovanie,-soprovozhdenie»",
      },
    ],
  },
  {
    id: 9,
    options: [
      {
        label: "",
        linkText: "СТАТЬИ С ХЕШТЕГОМ МЕНОПАУЗА",
        link: "/articles",
      },
    ],
  },
];

export default {
  props: {
    isOpened: {
      type: Boolean,
      default: true,
    },
  },

  // emits: ['close'],

  setup(props, { emit }) {
    const currentQuestion = ref(1);
    const picked = ref(null);
    const showResult = ref(null);

    const getCurrentQuestion = computed(() => {
      return questions.find((item) => item.id === currentQuestion.value);
    });

    const getResult = computed(() => {
      return results.find((item) => item.id === showResult.value);
    });

    onMounted(() => {
      console.log("update");
    });

    function closePopup() {
      emit("close");
      currentQuestion.value = 1;
      showResult.value = null;
    }

    function nextStep() {
      if (picked.value?.redirectTo) {
        currentQuestion.value = picked.value?.redirectTo;
      }
      if (picked.value?.result) {
        showResult.value = picked.value?.result;
      }
      picked.value = null;
    }

    return {
      currentQuestion,
      questions,
      results,
      picked,
      showResult,
      getResult,
      getCurrentQuestion,
      nextStep,
      closePopup,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-test {
  &__title {
    color: #644c5c;
    font-size: 26px;
    text-align: left;
    font-weight: 700;
    margin: 0 0 40px 0;
    max-width: 95%;
  }

  &__answer-item {
    color: #644c5c;

    &:not(:last-child) {
      margin: 0 0 5px 0;
    }
  }

  &__button {
    margin: 60px 0 0 0;
    color: #644c5c;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    //position: absolute;
    //bottom: 20px;
  }

  &__button-arrow {
    fill: #644c5c;
  }

  &__option-item {
    color: #644c5c;
    font-size: 16px;

    .item-res {
      text-decoration: none;
      color: inherit;
    }

    &:not(:last-child) {
      margin: 0 0 5px 0;
    }
  }

  &__input-radio {
    position: absolute;
    opacity: 0;

    &:checked + label {
      .modal-test__label-arrow {
        opacity: 1;
      }
    }
  }

  &__label-arrow {
    margin: 0 10px 0 0;
    postion: absolute;
    fill: #644c5c;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  &__label {
    position: relative;
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;

    &:hover {
      .modal-test__label-arrow {
        opacity: 1;
      }
    }
  }
}
</style>
