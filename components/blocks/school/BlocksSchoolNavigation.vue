<template>
  <div class="school-nav">
    <div class="school-nav__left-column">
      <h2 class="school-nav__title" id="school-nav__title">
        Цикл вебинаров по беременности — это пространство для беременных женщин
        и мам в послеродовом периоде
      </h2>
      <div class="school-nav__tags-list">
        <nuxt-link class="school-nav__tag" to="/school#schoolProgram">
          Программа
        </nuxt-link>
        <nuxt-link class="school-nav__tag" to="/school#schoolTariff">
          Тарифы
        </nuxt-link>
        <nuxt-link class="school-nav__tag" to="/school#schoolExperts">
          Специалисты
        </nuxt-link>
      </div>
    </div>
    <div class="school-nav__right-column">
      <div class="school-nav__text">
        Здесь я, Элисо Джобава, вместе со специалистами Территория здоровья
        подробно говорим о самом важном и трепетном периоде жизни и раскрываем
        все темы — от базовых до самых сложных и специфичных.<br /><br />
        Вы узнаете всё о процессах организма и внешних проявлениях, с которыми
        сталкивается женщина во время беременности и после, обретете контроль
        над происходящим, сможете принимать взвешенные решения. Ваше материнство
        и подготовка к нему станут осознанными, а уверенность вытеснит все
        сомнения.
      </div>
      <div class="school-nav__avatar-wrapper">
        <img
          class="school-nav__avatar"
          src="@/assets/images/MainPageDescriptionImageMinor.png"
        />
        <div class="school-nav__avatar-label">Элисо Джобава</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.school-nav {
  margin: 150px 0;
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin: 120px 0;
  }

  @media screen and (max-width: 680px) {
    margin: 90px 0;
  }

  &__left-column,
  &__right-column {
    width: calc(50% - 30px);

    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }

  &__left-column {
    margin: 0 60px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      margin: 0;
    }
  }

  &__title {
    font-size: 32px;
    line-height: 130%;
    color: #644c5c;
    margin: 0;

    @media screen and (max-width: 1200px) {
      font-size: 30px;
      order: 1;
      margin: 30px 0 0 0;
    }

    @media screen and (max-width: 680px) {
      font-size: 28px;
    }
  }

  &__text {
    font-size: 16px;
    color: #232323;
    line-height: 150%;

    @media screen and (max-width: 1200px) {
      margin: 30px 0 0 0;
    }

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  &__tags-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__tag {
    background-color: #839389;
    padding: 5px 15px;
    border-radius: 23px;
    font-size: 16px;
    color: #fef8f2;
    margin: 0 0 10px 0;
    cursor: pointer;
    transition: background-color 0.2s;
    text-decoration: none;

    &:hover {
      background-color: #064848;
    }

    &:not(:last-child) {
      margin: 0 10px 10px 0;
    }

    @media screen and (max-width: 680px) {
      font-size: 14px;
    }
  }

  &__avatar-wrapper {
    margin: 30px 0 0 0;
    display: flex;
  }

  &__avatar {
    width: 90px;
    height: 90px;
  }

  &__avatar-label {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 21px;
    color: #232323;
    letter-spacing: 0.03em;
    margin: 0 0 0 15px;
    display: flex;
    align-items: center;
  }
}
</style>
