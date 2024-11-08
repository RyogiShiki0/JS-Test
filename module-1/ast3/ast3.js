"use strict"

    let num= [], sum=0, product=1, average=0;
    for (let i=0; i<3; i++){
      num[i] = parseInt(prompt("Enter the number"))
      sum += num[i]
      product *= num[i]
    } 
    average = sum/3
    document.getElementById("calculator").innerHTML="The sum is " + sum + "; The product is " + product + "; The average is " + average;
