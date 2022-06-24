import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import $ from "jquery";
// @ts-ignore
import { gsap } from "gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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

window.addEventListener("scroll", function(e) {
    if(window.scrollY <= 25){
        $('.navbar').css('background', 'transparent');
        $('.navbar--title').css('color', '#12675D');
        $('.navbar--options').css('color', '#12675D');
        $('.navbar--choice:hover').css('color', '#12675D !important');
        $('.navbar--choice:after').css('color', '#12675D !important');
    }else {
        $('.navbar').css('background', 'linear-gradient(90deg, #264653, #276467, #28807a, #2A9D8F)');
        $('.navbar--title').css('color', 'white');
        $('.navbar--options').css('color', 'white');
        $('.navbar--choice:hover').css('color', '#white !important');
        $('.navbar--choice:after').css('color', '#white !important');
    }
})

