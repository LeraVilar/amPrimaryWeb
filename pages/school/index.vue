<template>
  <div class="section-container">
    <blocks-school-intro />
    <blocks-school-navigation />
  </div>
  <div class="background-violet">
    <div class="section-container">
      <blocks-school-video />
    </div>
  </div>
  <div class="section-container">
    <blocks-school-program id="schoolProgram" class="section-block" />
    <blocks-school-tariff id="schoolTariff" class="section-block" />
    <blocks-school-perks class="section-block" />
    <div style="width: 100%" id="schoolExperts">
      <blocks-main-swiper
        headingSlider="Эксперты Циклу вебинаров для беременных"
      />
    </div>
    <blocks-school-questions class="section-block" />
    <blocks-reviews-block heading="Мы уже помогли многим женщинам" />
    <blocks-message-us
      label="Если вы не знаете, какой тариф выбрать, сомневаетесь в необходимости той или иной информации, столкнулись с трудностями во время оформления — напишите нам, мы обо всём расскажем и со всем поможем!"
      class="section-block"
      clazz="__message-us-secondary"
    />
  </div>
</template>
