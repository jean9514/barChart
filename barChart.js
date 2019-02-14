"use strict";

//globale variabler
let counter = 0;
const arrayBox = [];
const MAX_LENGTH = 40;

window.addEventListener("load", init);

function init() {
  //console.log(init);
  makeMoreBoxes();
}

function makeAbox() {
  //tilføjer søjle til vores array
  arrayBox.unshift(counter);

  //coner vores indhold af id'et boxtemp
  const clone = document.querySelector("#boxtemp").content.cloneNode(true);
  //console.log(clone);

  const box = clone.querySelector("#box");
  //console.log(box);

  //
  let hight = getRandomNumber(0, 35) + "px";

  //
  box.style.height = getRandomNumber(0, 35) + "px";

  //elementet apender vores clon i classen container
  const element = document.querySelector(".container").append(clone);
}

function makeMoreBoxes() {
  makeAbox();

  //t
  counter++;

  if (counter.length > MAX_LENGTH) {
    //fjern første søjle fra vores liste af søjler når max_length er opnået
    document.querySelector("#box").remove();
  }

  //timer function hvor læmge det køre
  setTimeout(makeMoreBoxes, 1000);
}

//ved ikke præcist hvad den gør  - forklaring følger!!
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}
