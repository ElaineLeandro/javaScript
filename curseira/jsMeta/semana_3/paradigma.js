/**
 * O paradigma da programação funcional
 * 
 * Na verdade, há vários estilos de codificação, também conhecidos comoparadigmas. Um estilo comum é chamado deprogramação funcional, ou FP, para abreviar.
 * Na programação funcional, usamos muitas funções e variáveis.
 */

function getTotal(a, b){
    return a + b
}

const numOne = 2
const numTwo = 3

const total = getTotal(numOne, numTwo)

console.log(total)
console.log("#########")

//Ao escrever código FP, mantemos os dados e a funcionalidade separados e passamos os dados para as funções somente quando queremos que algo seja computado.

function getDistance(mph, h){
      return mph * h

}

const mph = 60;
const h = 2;
const distance = getDistance(mph,h)
console.log(distance) // Na programação funcional, as funções retornam novos valores e, em seguida, usam esses valores em outra parte do código.
console.log("#########")
