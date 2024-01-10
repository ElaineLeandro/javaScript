/**Escreva uma função chamada ePaisagem que recebe dois argumetos, 
 * largura e altura 
 * de uma imagem (number)
 * Retorne true se a imagem estiver no modo paissagem
 * 
 * */

// minha resolução
// function ePaisagem(largura, altura){
//     return largura >= altura
// }

// console.log(ePaisagem( 900, 600))
// console.log(ePaisagem( 500, 900))

// Resolução Prof
// function ePaisagemP(largura, altura){
//     return largura >= altura ? true : false
// }

// console.log(ePaisagemP( 1000, 1000))
// console.log(ePaisagemP( 1000, 2500))

//função anonima -> Arrow function
const ePaisagemM = (largura, altura) => largura >= altura;

console.log(ePaisagemM(1000, 1050))