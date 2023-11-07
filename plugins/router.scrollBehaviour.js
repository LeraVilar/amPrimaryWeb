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
                targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
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