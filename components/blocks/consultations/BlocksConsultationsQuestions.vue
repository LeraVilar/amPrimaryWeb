<template>
  <div class="questions-block" id="questions-block">
    <h2 class="questions-block__title">
      Вопросы и ответы
    </h2>
    <elements-collapse-secondary class="questions-block__collapse" title="Можно ли попасть на приём именно к доктору Элисо?">
      Нет, однако вы можете внести пожелания во время заполнения анкеты. Для личной работы доктор Элисо отбирает наиболее
      сложные и запутанные ситуации, но при этом она курирует каждого пациента, который находится на ведении у докторов команды.
      Также по запросу врача или пациента может быть проведён очный или онлайн консилиум с доктором Элисо.
    </elements-collapse-secondary>
    <elements-collapse-secondary class="questions-block__collapse" title="Как определяется стоимость консультации с доктором Элисо?">
      Ценовая политика личных приёмов доктора Элисо максимально гибка и зависит от длительности, сложности,
      уровня приёма и конкретной ситуации пациентки.
    </elements-collapse-secondary>
    <elements-collapse-secondary class="questions-block__collapse" title="Если мне понадобится врач, которого нет в команде доктора Элисо?">
      При необходимости мы предоставим контакты всех нужных специалистов.
    </elements-collapse-secondary>
  </div>
</template>

<style lang="scss" scoped>
  .questions-block {
    width: 100%;

    &__title {
      color: #644C5C;
      font-size: 38px;
      margin: 0 0 40px 0;

      @media screen and (max-width: 1200px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__collapse {
      &:last-child {
        border-bottom:  1px solid #C5B1B2;
      }
    }
  }
</style>
