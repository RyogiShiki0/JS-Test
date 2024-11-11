let num=[];
i=prompt("enter a number");

while(i!=0){
    num.push(i);
    i=prompt("enter a number");
}
num.sort(function(a, b){return a-b});
console.log(num)