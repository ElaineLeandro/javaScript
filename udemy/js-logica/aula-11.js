/** For Clássico - Estrutura de repetição */

// i - index

// for (let i = 5; i <= 10; i++ ){
//     console.log(`Linha ${i}`)
// }


// for (let i = 50; i <= 80; i+=10 ){
//     console.log(`Linha ${i}`)
// }

// for (let i = 50; i <= 80; i -= 5 ){
//     console.log(`Linha ${i}`)
// }

// for (let i = 0; i <=10 ; i++){
//     const par = i % 2 === 0 ? 'par' : 'ímpar'
//     console.log(i, par)
// }

const frutas = [ 'Maçã', 'Pera', 'Uva', 'Amora', 'Limão', 'Atemoia']

for(let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i} ${frutas[i]}`, )
}