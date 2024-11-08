"use strict"
let start = prompt("Enter the start year:")
let end = prompt("Enter the end year:")
let result='',year;
for (year = start; year<=end; year++){
    if(year % 100 ==0){
        if(year % 400 ==0){
            result += `<li>${year}</li>`}
    }
    else if(year % 4 ==0){
        result += `<li>${year}</li>`
    }
}
document.getElementById("year").innerHTML=result