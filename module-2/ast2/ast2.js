let num = prompt("Enter the number of the participants:");
let parts = [], result='';
for (let i=0; i<num; i++){
    parts[i]= prompt("Enter the name:")
}
parts.sort();
for (let i=0; i<num; i++){
    result+=`<li>${parts[i]}</li>`
}
document.getElementById("parts").innerHTML=result
