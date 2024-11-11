let cands=[], ca_name,max=0,max_name;
let ca_num = prompt("Enter the num of the candidates")
for (let i=0; i<ca_num; i++){
    ca_name = prompt(`enter the name of candidate ${i+1}`)
    cands.push({name:ca_name,vote:0})
}
let vo_num = prompt("Enter the num of the voters")
for (let i=0; i<vo_num; i++){
    ca_name = prompt("Enter the name who you want to vote")
    if(ca_name !=''){
        for(let j=0; j<ca_num;j++){
            if (cands[j].name == ca_name){
                cands[j].vote+=1
            }
        }
    }
}
for(let j=0; j<ca_num;j++){
    if(cands[j].vote > max){
        max = cands[j].vote
        max_name = cands[j].name
    }
}
console.log(`The winner is ${max_name} with ${max} votes`)
console.log(`results:`)
for(let j=0; j<ca_num;j++){
    console.log(`${cands[j].name}: ${cands[j].vote} votes`)
}