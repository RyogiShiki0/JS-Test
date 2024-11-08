const answer = confirm('Should I calculate the square root?');
let result;
if (answer == true){
    const num = prompt("Enter the number:")
    if (num>=0){
        result = Math.sqrt(num)
    }
    else{result = "The square root of a negative number is not defined"}

}
else{result = "The square root is not calculated."}
document.getElementById("root").innerHTML=result