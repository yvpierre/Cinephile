import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// @ts-ignore
const card:HTMLElement = document.querySelector(".card");
// @ts-ignore
const shortDesc:HTMLElement = document.querySelector(".desc--short");
// @ts-ignore
const longDesc:HTMLElement = document.querySelector(".desc--long");

let cardState = false;

console.log(getComputedStyle(card).display);

card.addEventListener("click", function () {
  cardState ? (cardState = false) : (cardState = true);
  toggleDisplay(cardState);
});

function toggleDisplay(state) {
  if (state) {
    shortDesc.style.setProperty("display", "none");
    longDesc.style.setProperty("display", "block");
    card.style.setProperty("justify-content", "flex-start");
  } else {
    shortDesc.style.setProperty("display", "flex");
    longDesc.style.setProperty("display", "none");
    card.style.setProperty("justify-content", "flex-end");
  }
}
