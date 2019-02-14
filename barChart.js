"use strict";

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

  const clone = document.querySelector("#boxtemp").content.cloneNode(true);
  //console.log(clone);

  const box = clone.querySelector("#box");
  //console.log(box);

  //
  let hight = getRandomNumber(0, 35) + "px";

  //
  box.style.height = getRandomNumber(0, 35) + "px";

  const element = document.querySelector(".container").append(clone);
}

/* function getRandomNumber() {
  const number = Math.random() * 100;
  return number;
} */

function makeMoreBoxes() {
  makeAbox();

  counter++;

  if (counter.length > MAX_LENGTH) {
    //fjern første søjle fra vores liste af søjler når ny tilføjes
    document.querySelector("#box").remove();
  }

  //timer function hvor læmge det køre
  setTimeout(makeMoreBoxes, 1000);
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}
