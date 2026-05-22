<template>
  <div class="com-desc">
    <div class="com-desc__left-column">
      <svg-soft-icon class="com-desc__soft" />
      <img class="com-desc__image" src="@/assets/images/groupPhoto.png" />
      <svg-plus-icon class="com-desc__plus" />
      <svg-arrow class="com-desc__arrow" />
    </div>
    <div class="com-desc__right-column">
      <h3 class="com-desc__description">
        Команда — это фундамент, от которого зависит результат любого дела.
        Именно поэтому я лично приглашала каждого специалиста к сотрудничеству.
        Эксперты Территории здоровья — профессионалы высочайшего уровня, не раз
        доказавшие своё мастерство. Это люди, которым я всецело доверяю.
      </h3>
      <div class="com-desc__avatar-plank">
        <img
          class="com-desc__avatar-image"
          src="@/assets/images/avatarPhoto.png"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.com-desc {
  width: 100%;
  padding: 80px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    padding: 80px 0;
    flex-direction: column;
  }

  &__left-column {
    position: relative;
    width: 300px;

    @media screen and (max-width: 1200px) {
      width: 50%;
    }

    @media screen and (max-width: 680px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  &__image {
    position: relative;
    width: 300px;
    height: 300px;

    @media screen and (max-width: 1200px) {
      width: 100%;
      height: 100%;
    }
  }

  &__right-column {
    width: 50%;
    margin: 0 0 0 150px;

    @media screen and (max-width: 1200px) {
      width: 100%;
      margin: 50px 0 0 0;
    }
  }

  &__description {
    color: #fef8f2;
    font-size: 22px;
    line-height: 30px;
    margin: 0;
    max-width: 600px;
  }

  &__plus {
    position: absolute;
    fill: #ece7e1;
    top: 0;
    right: 0;

    @media screen and (max-width: 1200px) {
      right: -50%;
    }

    @media screen and (max-width: 680px) {
      right: 0;
      transform: scale(1.3);
    }
  }

  &__arrow {
    position: absolute;
    fill: #839389;
    transform: rotate(20deg);
    right: -100px;
    bottom: 50px;

    @media screen and (max-width: 680px) {
      display: none;
    }
  }

  &__soft {
    position: absolute;
    fill: #c5b1b2;
    transform: scale(2);
    left: 0;
    top: 0;

    @media screen and (max-width: 680px) {
      left: 10px;
      top: unset;
      bottom: 30px;
    }
  }

  &__avatar-plank {
    display: flex;
    align-items: center;
    margin: 30px 0 0 0;
  }

  &__avatar-image {
    width: 80px;
    height: 80px;

    @media screen and (max-width: 680px) {
      display: none;
    }
  }

  &__avatar-text {
    color: #fef8f2;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    max-width: 250px;
    margin: 0 0 0 20px;

    @media screen and (max-width: 680px) {
      margin: 0;
    }
  }
}
</style>
