import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// @ts-ignore
const cards:HTMLElement = document.querySelectorAll(".card");
// @ts-ignore
const shortDesc:HTMLElement = document.querySelectorAll(".desc--short");
// @ts-ignore
const longDesc:HTMLElement = document.querySelectorAll(".desc--long");

let cardState = false;

for(let c:any in cards){
  // @ts-ignore
  cards[c].addEventListener("click", function () {
    cardState ? (cardState = false) : (cardState = true);
    toggleDisplay(cardState, cards[c]);
  });
}


function toggleDisplay(state:boolean, c:any) {
  if (state) {
    shortDesc.style.setProperty("display", "none");
    longDesc.style.setProperty("display", "block");
    c.style.setProperty("justify-content", "flex-start");
  } else {
    shortDesc.style.setProperty("display", "flex");
    longDesc.style.setProperty("display", "none");
    c.style.setProperty("justify-content", "flex-end");
  }
}
