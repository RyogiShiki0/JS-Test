"use strict"
let num = prompt("Enter the number of dice rolls:"),sum=0;
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }
for(let i=0;i<num;i++){
    sum += getRandomIntInclusive(1,6)
}
document.getElementById("dice").innerHTML=`The answer is ${sum}`