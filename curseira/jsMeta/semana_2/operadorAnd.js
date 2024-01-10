/** 
 * O operador lógico AND em JavaScript:&&
 * O operador lógico AND é usado, por exemplo, para confirmar se várias comparações retornarão verdadeiro.
 * Em JavaScript, esse operador consiste em dois símbolos E comercial juntos:&&.
 * 
 * Digamos que você tenha a tarefa de criar um código que verifique se a variávelcurrentTime 
 * está entre9 a.m. e5 p.m. O código precisa console.logtrue ifcurrentTime > 9e ifcurrentTime < 17.
*/
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

console.log('#######')

/**
 * Como esse código funciona?
 * Primeiro, na linha um, defino a variávelcurrentTime e atribuo o valor de10 a ela.
 * Em seguida, na linha dois, faço duas comparações no console log: 
 * currentTime >  9
 * currentTime < 17
 * 
 */

//Também uso o operador lógico&& para juntar as duas comparações.
console.log(10 > 9 && 10 < 17);

console.log('#######')

/**
 * O operador lógico&& retorna um único valor: o booleanotrue oufalse, com base nas seguintes regras: 
 * Retornatrue se ambos os valores à sua direita e à sua esquerda forem avaliados como true
 * Ele retornafalse em todas as outras instâncias
 */

//Em outras palavras: 

console.log(true && true) // retornará:true

console.log(true && false) // retornará:false

console.log(false && true) // retornará:false

console.log(false && false) // retornará:false
