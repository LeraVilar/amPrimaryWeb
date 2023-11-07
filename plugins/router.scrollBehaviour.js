import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (typeof window !== "undefined") {
      const route = useRoute();
      console.log(route)
      if (route.hash) {
          console.log(to.hash)
          setTimeout(() => {
            const targetElement = document.querySelector(route.hash);
            if (targetElement) {
              if(window.innerWidth < 1200) {
                let scrollTop = window.pageYOffset || targetElement.scrollTop
                const headerOutsideIframe = window.parent.document.getElementsByClassName('academy-header')[0].clientHeight
                const finalOffset = targetElement.getBoundingClientRect().top + scrollTop + headerOutsideIframe
                window.parent.scrollTo({
                  top: finalOffset,
                  behavior: 'auto'
                })
              }else {
                targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
              }
              return;
            }
          }, 3000);
          
      }
      // router.afterEach(async (to, from) => {
      //   if (to.hash) {
      //     console.log(to.hash)
          
          
      //   }
  
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // });
    }
  };
})