"use strict"
let year = parseInt(prompt("Enter a year:"));
let result;
if(year % 100 ==0){
    if(year % 400 ==0){
        result = "It is a leap year."}
    else {result = "It is NOT a leap year."}
}
else if(year % 4 ==0){
    result = "It is a leap year."
}
else{result = "It is NOT a leap year."}
document.getElementById("leap").innerHTML = result 