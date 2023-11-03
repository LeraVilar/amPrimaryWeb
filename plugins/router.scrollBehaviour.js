import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
  
      router.afterEach(async (to, from) => {
        if (to.hash) {
          console.log(to.hash)
          setTimeout(() => {
            
            const targetElement = document.querySelector(to.hash);
    
            if (targetElement) {
                targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
              return;
            }
          }, 2000);
        }
  
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };
})