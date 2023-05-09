<template>
  <div class="school-questions-block">
    <h2 class="school-questions-block__title">
      Вопросы и ответы
    </h2>
    <elements-collapse-secondary class="school-questions-block__collapse" title="Я оплатила один из тарифов. Что дальше?">
      В Личном кабинете у вас откроется доступ ко всем материалам оплаченного тарифа. Вы сможете изучать информацию в
      любом темпе. Доступ будет действовать со дня оплаты столько, сколько предусматривает тариф.
    </elements-collapse-secondary>
    <elements-collapse-secondary class="school-questions-block__collapse" title="Если вдруг беременность прервется, мне придется заново оплачивать школу?">
      Доступ к материалам останется у вас бессрочно до момента, пока вы не станете мамой, также мы бесплатно предоставляем доступ к вебинару «Что делать, если были потери беременности? Правильные шаги на пути к счастливому материнству» и чек-лист “Реабилитация после потери беременности”, чтобы помочь провести наиболее быструю и адекватную реабилитацию после потери.
    </elements-collapse-secondary>
    <elements-collapse-secondary class="school-questions-block__collapse" title="Есть ли возможность рассрочки?">
      Нет, мы не предоставляем рассрочку.
    </elements-collapse-secondary>
  </div>
</template>

<style lang="scss" scoped>
.school-questions-block {
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
