export default defineNuxtPlugin(() => {
  if (process.client) {
    const _tmr = (window as any)._tmr || ((window as any)._tmr = []);
    _tmr.push({ id: "3743560", type: "pageView", start: new Date().getTime() });

    const ts = document.createElement("script");
    ts.type = "text/javascript";
    ts.async = true;
    ts.id = "tmr-code";
    ts.src = "https://top-fwz1.mail.ru/js/code.js";

    const s = document.getElementsByTagName("script")[0];
    s.parentNode?.insertBefore(ts, s);
  }
});