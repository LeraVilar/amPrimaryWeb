<template>
  <div class="work-format">
    <h1 class="work-format__title" id="workFormats">Форматы работы</h1>
    <div class="work-format__list">
      <router-link
        class="work-format__item"
        :to="item.link"
        v-for="(item, index) in tabs"
        :key="index"
      >
        <img
          :class="{
            'work-format__item-image': true,
            'work-format__item-image_top': index === 1 || index === 4,
          }"
          :src="useAsset(`images/${item.image}.png`)"
        />
        <div>
          <h3 class="work-format__item-title">
            {{ item.title }}
          </h3>
          <div class="work-format__item-text">
            {{ item.text }}
          </div>
        </div>
        <div class="work-format__item-link">
          {{ item.btn ? item.btn : Подробнее }}
          <svg-arrow-right class="work-format__item-arrow" />
        </div>
      </router-link>
    </div>
    <div class="work-format__message-us-block">
      <svg-almost-circle class="work-format__almost-circle" />
      <svg-union class="work-format__union" />
      <svg-arrow class="work-format__arrow" />
      <svg-plus-icon class="work-format__plus" />
      <h3 class="work-format__message-us-title">
        Не получается определиться с выбором? Напишите нам — мы поможем
      </h3>
      <div class="work-format__message-us-button-container">
        <elements-buttons-secondary
          link="https://t.me/academ_mom_bot"
          title="Написать в Telegram"
        />
      </div>
    </div>
  </div>
</template>

<script>
const tabs = [
  {
    title: "Цикл вебинаров",
    text: "Структурированные материалы, которые дадут максимум информации по важным вопросам",
    image: "1",
    link: "/webinars",
    btn: "Подробнее",
  },
  {
    title: "Цикл вебинаров по беременности",
    text: "Всё, что нужно знать о материнстве, подготовке, сложностях процесса и многом другом",
    image: "2",
    link: "#",
    btn: "Раздел на реконструкции",
  },
  {
    title: "Гайды и методички",
    text: "Небольшие и полезные сборники с прикладными советами",
    image: "3",
    link: "/guides",
    btn: "Подробнее",
  },
  {
    title: "Персонализированные проекты",
    text: "Индивидуально разработанные программы по восстановлению женского здоровья",
    image: "4",
    link: "/projects",
    btn: "Подробнее",
  },
  {
    title: "Специалистам",
    text: "Обучающие продукты, позволяющие перенять опыт и знания специалиста международного уровня",
    image: "5",
    link: "/forMedWorkers",
    btn: "Подробнее",
  },
  {
    title: "Консультации",
    text: "",
    image: "6",
    link: "/consultations",
    btn: "Подробнее",
  },
];

export default {
  methods: {
    useAsset(path) {
      const assets = import.meta.glob("~/assets/**/*", {
        eager: true,
        import: "default",
      });
      console.log(assets["/assets/" + path]);
      return assets["/assets/" + path];
    },
  },
  setup() {
    return {
      tabs,
    };
  },
};
</script>

<style lang="scss" scoped>
.work-format {
  width: 100%;

  &__title {
    color: #644c5c;
    font-size: 38px;
    text-align: left;
    margin: 0 0 40px 0;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;

    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }

  &__item {
    position: relative;
    background-color: #839389;
    border-radius: 15px;
    height: 360px;
    transition: background-color 0.2s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    padding: 40px;

    @media screen and (max-width: 1200px) {
      height: 280px;
    }

    @media screen and (max-width: 680px) {
      padding: 30px;
      height: 380px;
    }

    &:hover {
      background-color: #6b8073;

      .work-format__item-image {
        opacity: 1;
      }
    }
  }

  &__item-title {
    font-size: 26px;
    color: #fef8f2;
    margin: 0 0 20px 0;
    max-width: 75%;

    @media screen and (max-width: 680px) {
      max-width: 100%;
      font-size: 20px;
    }
  }

  &__item-text {
    color: #fef8f2;
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  &__item-image {
    position: absolute;
    bottom: -30px;
    right: -30px;
    opacity: 0;
    transition: opacity 0.2s;

    @media screen and (max-width: 1200px) {
      bottom: unset;
      top: -40px;
    }

    @media screen and (max-width: 680px) {
      display: none;
    }

    &_top {
      bottom: unset;
      top: -30px;
    }
  }

  &__item-link {
    color: #fef8f2;
    font-weight: 600;
    font-size: 18px;
  }

  &__item-arrow {
    fill: #fef8f2;
  }

  &__message-us-block {
    position: relative;
    padding: 80px 0;
    margin: 50px 0 0 0;
    background: #c5b1b2;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px) {
      padding: 60px 40px;
    }

    @media screen and (max-width: 680px) {
      padding: 60px 30px;
    }
  }

  &__message-us-title {
    color: #fef8f2;
    max-width: 650px;
    text-align: center;
    font-size: 26px;
    line-height: 34px;
  }

  &__message-us-button-container {
    display: flex;
    justify-content: center;
  }

  &__message-us-button {
    padding: 18px 45px;
    background-color: #fef8f2;
    border-radius: 5px;
    color: #644c5c;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    @media screen and (max-width: 680px) {
      font-size: 16px;
    }
  }

  &__almost-circle {
    position: absolute;
    fill: #78353e;
    right: 145px;
    top: -5px;
    transform: scale(1.4) rotate(120deg);

    @media screen and (max-width: 1200px) {
      top: unset;
      bottom: 100px;
      right: -40px;
    }

    @media screen and (max-width: 1200px) {
      bottom: unset;
      top: -30px;
      right: unset;
      left: 20px;
      transform: scale(1) rotate(120deg);
    }
  }

  &__union {
    position: absolute;
    fill: #644c5c;
    right: 65px;
    top: 70px;
    transform: rotate(45deg);

    @media screen and (max-width: 1200px) {
      top: unset;
      right: 40px;
      bottom: 30px;
    }

    @media screen and (max-width: 1200px) {
      bottom: unset;
      top: -30px;
    }
  }

  &__arrow {
    position: absolute;
    fill: #c99d7a;
    transform: rotate(45deg);
    left: 140px;
    top: 50%;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__plus {
    position: absolute;
    fill: #fef8f2;
    left: 100px;
    top: 65%;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
