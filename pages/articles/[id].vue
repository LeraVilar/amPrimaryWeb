<template>
    <div class="containerArticlesDetails">
        <div class="contentArticlesUseful">
            <h2>{{ store.getUsefulData[store.index]?.heading }}</h2>
            <div v-for="(item, i) in store.getUsefulData[store.index]?.PageUsefulArticles" :key="i">
                <h3>{{ item?.heading }}</h3>
                <p>{{ item?.title }}</p>
            </div>
        </div>
        <div class="block-author">
            <img :src="'https://dzhobava.com/server' + store.getUsefulData[store.index]?.imageAuthor?.data[0].attributes?.url" alt="">
            <div>
            <p>Автор Статьи</p>
            <p>{{ store.getUsefulData[store.index]?.author }}</p>
            </div>
        </div>
        <NuxtLink class="linkToBack" to="/articles">
            Вернуться в раздел «Полезные статьи»
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                <path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#064848"/>
            </svg>
        </NuxtLink>
    </div>
</template>
<script setup>
    import {useUsefulStore} from '~~/stores/articles/usefulStore'
    const store = useUsefulStore()
</script>
<style lang="scss">

.containerArticlesDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 660px;
    margin: 0 auto;
    padding: 0 40px 150px 40px;

    @media screen and (max-width: 1200px) {
        max-width: 720px;
    }

    @media screen and (max-width: 680px) {
        padding: 0 20px 120px 20px;
    }

    @media screen and (max-width: 400px) {
        padding: 0 30px 60px 30px;
    }

    .linkToBack {
        font-weight: 600;
        font-size: 18px;
        line-height: 130%;
        color: #064848;
        margin-top: 40px;
        text-decoration: none;
        width: 100%;

        @media screen and (max-width: 680px) {
            font-size: 16px;
        }
    }

    .contentArticlesUseful {
        h2 {
            font-family: 'Oswald';
            color: rgba(100, 76, 92, 1);
            font-size: 38px;
            padding-bottom: 40px;
            margin-bottom: 60px;
            position: relative;

            @media screen and (max-width: 1200px) {
                font-size: 36px;
            }

            @media screen and (max-width: 680px) {
                font-size: 30px;
            }

            &::after {
                content: '';
                border-bottom: 1px solid #C5B1B2;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 80vw;
                margin-left: calc(50% - 40vw);

                @media screen and (max-width: 800px) {
                    width: 100vw;
                    margin-left: calc(50% - 50vw)
                }
            }
        }

        h3 {
            font-family: 'Oswald';
            font-size: 26px;
            line-height: 130%;
            margin: 0;
            color: #78353E;

            @media screen and (max-width: 680px) {
                font-size: 22px;
            }
        }

        p {
            font-size: 16px;
            line-height: 150%;
            color: #232323;

            @media screen and (max-width: 680px) {
                font-size: 15px;
            }
        }
    }

    .block-author {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-top: 50px;
        position: relative;
        padding-bottom: 40px;

        &::after {
            content: '';
            border-bottom: 1px solid #C5B1B2;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 80vw;
            margin-left: calc(50% - 40vw);

            @media screen and (max-width: 800px) {
                width: 100vw;
                margin-left: calc(50% - 50vw)
            }
        }

        @media screen and (max-width: 680px) {
          flex-direction: column;
          margin-top: 40px;
        }

        img {
          margin-right: 17px;
          width: 100px;
          height: 100px;

          @media screen and (max-width: 680px) {
            width: 60px;
            height: 60px;
            margin-bottom: 10px;
          }
        }

        p:first-child {
          font-size: 14px;
          color: rgba(35, 35, 35, 1);
          text-transform: uppercase;
          margin-bottom: 5px;
          margin-top: 0;
        }

        p:last-child {
          font-size: 16px;
          color: rgba(35, 35, 35, 1);
          max-width: 374px;

          @media screen and (max-width: 680px) {
           max-width: 100%;
           font-size: 15px;
          }
        }
      }
}
</style>
