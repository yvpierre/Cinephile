import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// @ts-ignore
const cards:array = $('.card')
// @ts-ignore
const shortDesc:any = $('.desc--short')
// @ts-ignore
const longDesc:any = $('.desc--long')

class Card {
    elem: HTMLElement
    short: HTMLElement
    long: HTMLElement
    active: boolean
    index: number

    constructor(e:HTMLElement, s:HTMLElement, l:HTMLElement, i:number) {
        this.elem = e
        this.short = s
        this.long = l
        this.active = e.classList.contains("active")
        this.index = i
    }

    show() {
        //return this.elem
        return "Card n: "+this.index+" active : "+this.active;
    }

    showCard(){
        this.short.style.display = "none";
        this.long.style.display = "block";
        this.active = true
        this.elem.classList.add("active")
    }

    hideCard(){
        this.short.style.display = "flex";
        this.long.style.display = "none";
        this.elem.classList.remove("active")
        this.active = false
    }

}

for(let i = 0; i<cards.length; i++){
    const card:Card = new Card(cards[i],shortDesc[i],longDesc[i], i)
    card.elem.addEventListener("click", function() {
        toggleDisplay(card)
    })
}

function toggleDisplay(c:Card){
    if(c.active){
        c.hideCard()
    }else {
        c.showCard()
    }
}



/*
for(let c:number = 0; c < cards.length(); c++) {
  console.log(c)
  let cardState = false;
  cards[c].addEventListener("click", function () {
    if (cards[c].classList.contains("active")) {
      cards[c].classList.remove("active")
    }
  })
  if(cardState){
    cards[c].classList.add("active")
    cardState = false
  }else {
    cards[c].classList.remove("active")
    cardState = true

  }

    toggleDisplay(cardState, cards[c], shortDesc[c], longDesc[c]);
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

 */
