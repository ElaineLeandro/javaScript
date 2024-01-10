/**While e Do While - Estuura de repetição */

// let indice = 0

// while( indice <= 10){
//     console.log(indice)
//     indice++
// }

function random(min, max){
    const result = Math.random() * (max - min) + min;
    return Math.floor(result) 
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand)

while( rand !== 10){
    rand = random(min, max)
    console.log(rand)
}

console.log("######")

do{
    rand = random(min, max)
    console.log(rand)
}while(rand !== 10)