<template>
  <div class="if-you-block" id="if-you-block">
    <h1 class="if-you-block__title">
      Что важно знать перед записью на консультацию
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
  </div>
</template>

<script>
const tabsList = [
  {
    icon: "almostCircle",
    color: "#C99D7A",
    text: "Колл-центр клиники Крэде Эксперто <b>не ведет запись</b> к Элисо Джобава и врачам ее команды",
  },
  {
    icon: "SvgSoftIcon",
    color: "#839389",
    text: "<b>Приём проходит в клинике Кредэ Эксперто</b> по адресу: г. Москва, Товарищеский переулок, 10, стр. 2",
  },
  {
    icon: "star",
    color: "#644C5C",
    text:
      "<b>Консультации и запись на них проводятся только по будням.</b> Если вы оставили заявку на праздниках или " +
      "в выходные, то вам ответят в первый будний день после",
  },
  {
    icon: "union",
    color: "#C5B1B2",
    text:
      "<b>Все вопросы по приемам и после приемов решаются через ассистентов.</b> Кроме ситуаций, " +
      "когда врачи, включая доктора Элисо, дали свои личные телефоны сами",
  },
];

export default {
  setup() {
    return {
      tabsList,
    };
  },
};
</script>

<style lang="scss" scoped>
.if-you-block {
  width: 100%;

  &__title {
    color: #644c5c;
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
    grid-template-columns: 1fr 1fr;
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
