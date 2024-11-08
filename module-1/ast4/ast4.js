"use strict"

    let class_list = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    name = prompt("Enter your name");
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    num = getRandomInt(4);
    document.getElementById("class").innerHTML=`${name}, you are ${class_list[num]}`;