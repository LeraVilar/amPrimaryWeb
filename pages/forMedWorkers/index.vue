<template>
  <div class="med-workers-page section-container">
    <blocks-workers-card-list :med="true" :data="store.getDataMedWor" @openModal="openModal" />
    <blocks-description-minor class="section-block" label="Об авторе" :title="descriptionTitle" :list-items="descriptionItems" />
    <blocks-message-us class="section-block" />
    <elements-modals-keeper :is-modal-opened="isModalOpened" @close="switchModal()">
      <h3 class="med-workers-page__modal-title">
        {{ currentModalData?.popupMed.title }}
      </h3>
      <div class="med-workers-page__modal-label">
        {{ currentModalData?.popupMed.subTitle }}
      </div>
      <h4 class="med-workers-page__secondary-title">
        О чем поговорим?
      </h4>
      <ul class="med-workers-page__modal-list">
        <li v-for="(item, i) in currentModalData?.popupMed.About.split('—').slice(1, -1)" :key="i" class="med-workers-page__modal-item">
          {{ item }}
        </li>
      </ul>
      <div class="med-workers-page__author-block">
        <img class="med-workers-page__author-image" src="@/assets/images/MainPageDescriptionImageMinor.png" />
        <div class="med-workers-page__about-author">
          <div class="med-workers-page__author-label">
            Автор Вебинара
          </div>
          <div class="med-workers-page__author-title">
            {{ currentModalData?.author.authorTitle }}
          </div>
        </div>
      </div>
    </elements-modals-keeper>
    <div class="overlay" v-if="isOpemAgreement">
      <div class="modal-agreement">
        <svg-close-popup class="closePopup" @click="isOpemAgreement = false"/>
        <h3 class="med-workers-page__modal-title">Данный информационный сайт предназначен исключительно для медицинских работников</h3>
        <p v-html="contentPopup?.text "></p>
        <div class="wrapperBtn">
          <button class="link" @click="isOpemAgreement = false">Соглашаюсь</button>
          <NuxtLink to="/webinars" class="link">Не соглашаюсь</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useForMedWork} from '~/stores/formedWorkStore'
import { onMounted } from 'vue'

const descriptionTitle = 'Элисо Джобава — профессор, доктор медицинских наук, специалист по трудным и сложным беременностям'

const descriptionItems = [
  'Автор более 300 научных статей и 9 монографий и практических руководств',
  'Член международного общества гинекологов-эндокринологов и общества по изучению проблем гемостаза в акушерстве и гинекологии',
  'Многократный участник международных и российских медицинских конференций и клинических исследований'
]

  export default {
    setup() {
        const contentPopup = {
            text: "Вся информация сайта <a href='/formedworkers'>www.dzhobava.com</a> (далее — Информация) может быть доступна исключительно для специалистов системы здравоохранения. В связи с этим для доступа к такой Информации от вас требуется подтверждение вашего статуса и факта наличия у вас профессионального медицинского образования, а также того, что вы являетесь действующим медицинским работником, обладающим соответствующими знаниями и навыками в области медицины, диагностики и здравоохранения РФ. Информация, содержащаяся на настоящем сайте, предназначена исключительно для ознакомления, носит научно-информационный характер и не должна расцениваться в качестве Информации рекламного характера для широкого круга лиц.<br><br> Информация не должна быть использована для замены непосредственной консультации с врачом и для принятия решения о применении лекарственных препаратов самостоятельно.<br><br> На основании вышесказанного, пожалуйста, подтвердите, что вы являетесь действующим медицинским работником, либо иным работником системы здравоохранения."
        };
        const isOpemAgreement = ref(false);
        const isModalOpened = ref(false);
        const store = useForMedWork();
        store.fetchDataMedWor();
        onMounted(() => {
            isOpemAgreement.value = true;
        });
        const currentModalData = ref(null);
        function switchModal() {
            isModalOpened.value = !isModalOpened.value;
        }
        function openModal(data) {
            currentModalData.value = data;
            switchModal();
        }
        return {
            descriptionItems,
            isOpemAgreement,
            descriptionTitle,
            isModalOpened,
            currentModalData,
            switchModal,
            openModal,
            store,
            contentPopup
        };
    },
}
</script>

<style lang="scss" scoped>
  .overlay {
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 74px;

    @media screen and (max-width: 690px) {
      padding: 0 10px;
    }

    .closePopup {
      position: absolute;
      right: 30px;
      top: 30px;
      cursor: pointer;

      @media screen and (max-width: 690px) {
        right: 10px;
        top: 10px;
        width: 15px;
      }
    }

    .modal-agreement {
      position: relative;
      max-width: 760px;
      width: 100%;
      background: #ECE7E1;
      padding: 60px;

      @media screen and (max-width: 690px) {
        padding: 30px;
      }
    }

    .wrapperBtn {
      display: flex;
      gap: 40px;
      margin-top: 40px;

      @media screen and (max-width: 690px) {
        flex-direction: column;
        gap: 20px;
      }

      .link {
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        padding: 18px 0;
        text-align: center;
        color: #FEF8F2;
        width: 205px;
        background-color: #064848;
        border: none;
        border-radius: 5px;
        text-decoration: none;

        @media screen and (max-width: 690px) {
          padding: 17px 0;
        }
      }
    }
  }
  
  .med-workers-page {

    &__modal-title {
      color: #644C5C;
      font-size: 26px;
      margin: 0 0 20px 0;

      @media screen and (max-width: 680px) {
        font-size: 22px;
      }
    }

    &__modal-list {
      list-style: none;
      padding: 0;

      li::before {
        content: '—';
      }
    }

    &__modal-item {
      font-size: 14px;
      line-height: 24px;
      color: #232323;
      margin: 0 0 5px 0;
    }

    &__secondary-title {
      color: #78353E;
      font-size: 22px;
      margin: 50px 0 0 0;

      @media screen and (max-width: 680px) {
        font-size: 18px;
      }
    }

    &__modal-label {
      font-size: 16px;
      color: #232323;
    }

    &__author-block {
      margin: 50px 0 0 0;
      display: flex;

      @media screen and (max-width: 680px) {
        flex-direction: column;
      }
    }

    &__author-image {
      width: 100px;
      height: 100px;
      margin: 0 20px 0 0;
    }

    &__author-label {
      font-size: 16px;
      line-height: 24px;
      color: #232323;
      text-transform: uppercase;

      @media screen and (max-width: 680px) {
        margin: 10px 0 0 0;
      }
    }

    &__author-title {
      margin: 5px 0 0 0;
      font-size: 16px;
      line-height: 24px;
      color: #232323;
    }
  }
</style>
