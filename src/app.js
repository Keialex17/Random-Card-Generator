/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let randomNumber = () => {
  const card = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let generateRandomNumber = Math.floor(Math.random() * card.length);
  return card[generateRandomNumber];
};

let randomIcon = () => {
  const icon = ["♦", "♥", "♠", "♣"];
  let generateRandomIcon = Math.floor(Math.random() * icon.length);
  return icon[generateRandomIcon];
};

let randomNumberList = randomNumber();
let randomIconList = randomIcon();

window.onload = function() {
  //write your code here
  let topSuit = document.querySelector(".top-suit");
  let number = document.querySelector(".number");
  let butonSuit = document.querySelector(".bottom-suit");

  topSuit.innerHTML = randomIconList;
  number.innerHTML = randomNumberList;
  butonSuit.innerHTML = randomIconList;

  if (randomIconList == "♦" || randomIconList == "♥") {
    topSuit.style.color = "red";
    butonSuit.style.color = "red";
  }
};
