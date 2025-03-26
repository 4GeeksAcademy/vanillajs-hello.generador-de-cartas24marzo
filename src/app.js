import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onclick = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  function randomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];


    const rdmPalos = palos[Math.floor(Math.random() * palos.length)];
     const rdmNumber = number[Math.floor(Math.random() * number.length)];
 
     let color = rdmPalos === "♦" || rdmPalos == "♥" ? "red" : "black";
 
     document.querySelector(".palos-header").innerHTML = rdmPalos;
     document.querySelector(".number").innerHTML = rdmNumber;
     document.querySelector(".palos-footer").innerHTML = rdmPalos;
 
     document.querySelector(".palos-header").style.color = color;
     document.querySelector(".palos-footer").style.color = color;
   }
   randomCard();
};
