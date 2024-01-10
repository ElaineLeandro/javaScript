/**
 * Exercício: Programação defensiva
 * A programação defensiva consiste em presumir que todos os argumentos que uma função receberá são do tipo errado, do valor errado ou de ambos.
 * Em outras palavras, o você presume que as coisas darão errado e é proativo ao pensar sobre esses cenários antes que eles aconteçam, 
 * de modo a tornar sua função menos provável de causar erros devido a entradas defeituosas.
 * Então, como você o refatoraria a função dada abaixo tendo em mente a programação defensiva?
 * 
 * Para este exercício, vamos nos certificar de que ambos os argumentos passados satisfaçam os seguintes critérios:
 *  - O comprimento do parâmetro word não pode ser menor que 2.
 *  - O comprimento do parâmetro match deve ser 1.
 *  - O tipo dos parâmetros word e match deve ser string.
 * 
 */

function letterFinder(word, match) {
    let condition1 = typeof(word) == "string" && word.length >= 2
    let condition2 = typeof(match) == "string" && match.length === 1
   if(condition1 && condition2){
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
   }else{
        console.log('Please pass correct arguments to the function.')
   }
}

// Teste de falha
letterFinder(123, 456);

// Teste de aprovação
letterFinder("cat", "c");




