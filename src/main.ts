import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// @ts-ignore
const cards:array = document.querySelectorAll(".card");
// @ts-ignore
const shortDesc:HTMLElement = document.querySelectorAll(".desc--short");
// @ts-ignore
const longDesc:HTMLElement = document.querySelectorAll(".desc--long");



for(let c:HTMLElement in cards){
  let cardState = false;
  // @ts-ignore
  cards[c].addEventListener("click", function () {
    if(cardState){
      cards[c].classList.add("active")
      cardState = false
    }else {
      cards[c].classList.remove("active")
      cardState = true

    }

    toggleDisplay(cardState, cards[c], shortDesc[c], longDesc[c]);
  });
}


function toggleDisplay(state:boolean, c:HTMLElement, short:HTMLElement, long:HTMLElement) {
    if (c.classList.contains("active")) {
      short.style.setProperty("display", "flex");
      long.style.setProperty("display", "none");
      c.style.setProperty("justify-content", "flex-end");
      c.classList.remove("active")
    } else {
      short.style.setProperty("display", "none");
      long.style.setProperty("display", "block");
      c.style.setProperty("justify-content", "flex-start");
    }
}
