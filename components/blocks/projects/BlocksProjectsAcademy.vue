<template>
  <div class="project-block">
    <div class="project-block__about">
      <h2 class="project-block__about-title" id="project-block__about-title-1">
        Проект «Академия здоровой жизни»
      </h2>
      <div class="project-block__about-text">
        Реорганизация популярного проекта “Рождение венеры”. Для тех, кто готов работать со своим здоровьем системно вместе с профессором Джобава Элисо
      </div>
      <svg-soft-icon class="project-block__about-soft-icon" />
      <svg-union class="project-block__about-union-icon" />
      <svg-half-circle class="project-block__about-half-circle-icon" />
    </div>
    <div class="project-block__description-block">
      <img class="project-block__description-image" src="@/assets/images/projectsAcademyDesc.png" />
      <h2 class="project-block__block-title">
        Проект — это единая пошаговая серия тематических потоков, посвященная всем сторонам женского здоровья,
        которая работает как инструкция к собственному организму
      </h2>
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
            В течение 2-х недель в закрытом Telegram-канале будут выходить актуальные стратегические посты,
            посвященные конкретному аспекту здоровья
          </div>
        </div>
        <div class="project-block__what-inside-item">
          <div class="project-block__what-inside-title">
            Удобный формат
          </div>
          <div class="project-block__what-inside-text">
            Вся информация в одном месте. Информация об обследовании перед каждым потоком — для максимальной
            безопасности каждой участницы. Универсальные схемы и добавки — аналоги можно подобрать в любой стране мира
          </div>
        </div>
        <div class="project-block__what-inside-item">
          <div class="project-block__what-inside-title">
            Персонализация
          </div>
          <div class="project-block__what-inside-text">
            На каждом потоке будет день ответов на вопросы, когда можно будет обратиться лично
            к доктору медицинских наук профессору акушеру-гинекологу Джобава Элисо Мурмановне
          </div>
        </div>
      </div>
    </div>
    <div class="project-block__additional-block">
      <div class="project-block__additional-left-column">
        <div class="project-block__what-inside-title">
          В 2023 году<br> планируется 4 потока
        </div>
        <div class="project-block__tags-list">
          <div class="project-block__tag">
            Стресс и эмоциональное здоровье
          </div>
          <div class="project-block__tag">
            Здоровье ЖКТ
          </div>
          <div class="project-block__tag">
            Печень и системы детоксикации
          </div>
          <div class="project-block__tag">
            Нутритивные дефициты
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

  &__about-soft-icon {
    position: absolute;
    fill: #644C5C;
    top: 100px;
    left: 50px;

    @media screen and (max-width: 1200px) {
      top: 40px;
      left: 40px;
    }

    @media screen and (max-width: 680px) {
      top: -20px;
    }
  }

  &__about-union-icon {
    position: absolute;
    fill: #644C5C;
    bottom: 80px;
    right: -20px;
    transform: scale(2);

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__about-half-circle-icon {
    position: absolute;
    fill: #78353E;
    left: 40px;
    top: 40px;
    transform: scale(4);

    @media screen and (max-width: 1200px) {
      top: 0;
      left: 35px;
      transform: scale(3);
    }

    @media screen and (max-width: 680px) {
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
    align-items: flex-end;

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

  &__description-block {
    margin: 60px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .project-block__block-title {
      max-width: 60%;
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: normal;

      .project-block__block-title {
        margin: 30px 0 0 0;
        max-width: 100%;
      }
    }
  }

  &__description-image {
    width: 20%;
  }
}
</style>
