"use strict";

window.addEventListener("load", init);

function init() {
  makeMoreBoxes();
}

function makeAbox() {
  const clone = document.querySelector("#boxtemp").content.cloneNode(true);
  //console.log(clone);

  const box = clone.querySelector("#box");
  //console.log(box);

  //her
  box.style.height = getRandomNumber() + "px";

  const element = document.querySelector(".container").appendChild(clone);
}

function getRandomNumber() {
  const number = Math.random() * 100;
  return number;
}

let counter = 0;

function makeMoreBoxes() {
  makeAbox();

  counter++;

  //her stopper funktionen med at lave boxe, da vi er nået ønsket antal.

  if (counter > 40) {
    //stopper
  } else {
    makeMoreBoxes();
  }
}

function movingBoxes() {}
