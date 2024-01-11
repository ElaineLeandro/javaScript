/**
 * Funções de ordem superior
 * 
 * Uma função de ordem superior é uma função que tem uma ou ambas as características a seguir:
 *  - Aceita outras funções como argumentos
 *  - Retorna funções quando invocada
 * Não há uma "maneira especial" de definir funções de ordem superior em JavaScript. Trata-se simplesmente de um 
 * recurso da linguagem. A própria linguagem permite que eu passe uma função para outra função ou retorne uma 
 * função de outra função.
 * 
 * Continuando a partir da seção anterior, considere o código a seguir, no qual estou redefinindo a função 
 * addTwoNums() para que ela seja uma função de ordem superior:
 * 
 */

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

//Por exemplo:
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number