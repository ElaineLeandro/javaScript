/**
 * O operador lógico OR em JavaScript:||
 * 
 * O operador lógico OR em JavaScript consiste em dois símbolos de pipe juntos:||.
 * 
 * Ele é usado quando o senhor deseja verificar se pelo menos uma das comparações dadas é avaliada comotrue.
 * Considere a seguinte tarefa: O senhor precisa escrever um programa em JavaScript que retornarátrue 
 * se o valor da variávelcurrentTime não estiver entre9 e17. Em outras palavras, seu código precisa console.log true
 *  se o valor da variávelcurrentTime for menor que9 ou maior que17.
 * 
 */

var currentTime = 7;
console.log( currentTime < 9 || currentTime > 17)

console.log('#######')

//Aqui estão as regras de como o operador|| avalia determinados valores: 

console.log(true || true) // terá como resultado:true

console.log(true || false) // produzirá:true

console.log(false || true) // terá como resultado:true

console.log(false || false) //produzirá:false

/**
 * O operador lógico OR sempre retornarátrue, exceto quando ambos os lados forem avaliados comofalse.
 *  Em outras palavras, para que o operador lógico OR retornefalse, os resultados de ambas as comparaçõesdevem ser falsos.
 * Voltando ao exemplo de verificar securrentTime < 9 oucurrentTime > 17, 
 * isso faz sentido: a única vez que o senhor obteráfalse é quando o valor armazenado na variávelcurrentTime for maior que 9 e menor que17.
 */