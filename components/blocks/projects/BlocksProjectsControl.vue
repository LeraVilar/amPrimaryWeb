<template>
  <div class="project-block">
    <div class="project-block__about">
      <h2 class="project-block__about-title" id="project-block__about-title-2">
        Персонализированный проект «Контроль эстрогенов»
      </h2>
      <div class="project-block__about-text">
        Для тех, кто столкнулся с непростым гинекологическим диагнозом и хочет держать его под контролем
      </div>
      <svg-plus-icon class="project-block__plus-one-icon" />
      <svg-plus-icon class="project-block__plus-two-icon" />
    </div>
    <div class="project-block__additional-block">
      <div class="project-block__additional-left-column">
        <div class="project-block__additional-icons-line">
          <svg-almost-circle class="project-block__additional-icon-circle" />
          <svg-heart-icon class="project-block__additional-icon-heart" />
          <svg-pine-left class="project-block__additional-icon-pine" />
        </div>
        <h3 class="project-block__additional-left-text">
          Несколько раз в год мы проводим тематические проекты, посвященные той или иной группе заболеваний
        </h3>
      </div>
      <div class="project-block__additional-right-column white">
        <img class="project-block__additional-avatar" src="@/assets/images/ConsultationsPageDescPhoto.png" />
        <div class="project-block__what-inside-text">
          В них мы подробно освещаем теорию возникновения самой болезни, разбираем течение и факторы, которые на него влияют, а также говорим о лечении.
        </div>
      </div>
    </div>
    <div class="project-block__what-inside-block">
      <h2 class="project-block__block-title">
        Что внутри?
      </h2>
      <div class="project-block__what-inside-list">
        <div class="project-block__what-inside-item">
          <div class="project-block__what-inside-title">
            Отдельный Telegram-чат
          </div>
          <div class="project-block__what-inside-text">
            В течение 4-х недель в закрытом Telegram-канале будут выходить актуальные стратегические посты,
            объясняющие всю тактику и возможности активации яичников
          </div>
        </div>
        <div class="project-block__what-inside-item">
          <div class="project-block__what-inside-title">
            Удобный формат
          </div>
          <div class="project-block__what-inside-text">
            На первой неделе проекта вы заполняете анкету, собираете результаты своих анализов, отправляете их доктору Эле
          </div>
        </div>
        <div class="project-block__what-inside-item">
          <div class="project-block__what-inside-title">
            Персонализация
          </div>
          <div class="project-block__what-inside-text">
            В течение 2-х недель после окончания проекта каждая участница получит персональный протокол
            от доктора медицинских наук профессора акушера-гинеколога Джобава Элисо Мурмановны
          </div>
        </div>
      </div>
    </div>
    <div class="project-block__additional-block">
      <div class="project-block__additional-left-column">
        <div class="project-block__what-inside-title">
          Прошедшие потоки 2022 года
        </div>
        <div class="project-block__tags-list">
          <div class="project-block__tag disabled">
            Эндометриоз
          </div>
          <div  class="project-block__tag disabled">
            Полипы матки, гиперплазия эндометрия
          </div>
        </div>
        <div class="project-block__what-inside-title">
          Планируются в 2023 году
        </div>
        <div class="project-block__tags-list">
          <div class="project-block__tag">
            Нарушения цикла
          </div>
          <div class="project-block__tag">
            Нарушения флоры
          </div>
          <div class="project-block__tag">
            Синдром поликистозных яичников
          </div>
          <div class="project-block__tag">
            Миома матки
          </div>
          <div class="project-block__tag">
            Мультифолликулярные яичники
          </div>
        </div>
      </div>
      <div class="project-block__additional-right-column">
        <h3 class="project-block__additional-right-title">
          Оставьте заявку, чтобы первыми узнать о старте потока в новом году
        </h3>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSemeWdP_plcFlkOOFZ2NL5hMcyMMN9bWW2pc4OZkgZcLow8pA/viewform?usp=sharing"
          class="project-block__additional-button-container"
        >
          <elements-buttons-secondary title="Записаться в лист ожидания" />
        </a>
        <svg-plus-icon class="project-block__additional-plus-icon"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-block {
  margin: 60px 0 0 0;
  width: 100%;

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
      padding: 60px 0;
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

  &__plus-one-icon {
    position: absolute;
    fill: #78353E;
    top: 40px;
    right: 70px;

    @media screen and (max-width: 1200px) {
      top: 0;
    }
  }

  &__plus-two-icon {
    position: absolute;
    fill: #C99D7A;
    top: 100px;
    right: -20px;
    transform: scale(1.3) rotate(10deg);

    @media screen and (max-width: 1200px) {
      display: none;
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

  &__what-inside-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    margin: 50px 0 0 0;

    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  &__what-inside-item {
    position: relative;
    background: #ECE7E1;
    border-radius: 15px;
    padding: 40px;
  }

  &__what-inside-title {
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #78353E;
    margin: 0 0 15px 0;
    font-family: Oswald;
  }

  &__what-inside-text {
    color: #232323;
    font-size: 16px;
    line-height: 24px;
  }

  &__additional-block {
    margin: 90px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
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

    @media screen and (max-width: 1200px) {
      display: none;
    }
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

    &.white {
      background-color: transparent;
      padding: 0;

      @media screen and (max-width: 1200px) {
        display: flex;
        justify-content: left;
      }
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

  &__additional-plus-icon {
    position: absolute;
    top: -10px;
    right: -10px;
    fill: #C99D7A;
    transform: scale(1.8);

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__additional-icons-line {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__additional-icon-circle,
  &__additional-icon-heart,
  &__additional-icon-pine {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
  }

  &__additional-icon-circle {
    fill: #839389;
  }

  &__additional-icon-heart {
    fill: #C99D7A;
  }

  &__additional-icon-pine {
    fill: #064848;
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
}
</style>
