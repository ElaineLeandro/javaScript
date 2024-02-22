/**
 * Uma função em JavaScript é um bloco de código reutilizável que pode ser chamado para executar uma tarefa específica.
 * Ela permite agrupar um conjunto de instruções para realizar uma determinada ação. As funções são fundamentais para 
 * organizar e modularizar o código, tornando-o mais legível, reutilizável e fácil de manter.
 */

// function soma(nota1, nota2){
//     const resultado = nota1 + nota2
//     console.log(first)
// }

// function verificarPar(numero) {
//     let numero = parseInt(prompt("Por favor, insira um número:"));
//     if (numero % 2 === 0) {
//         alert("O número " + numero + " é par.");
//     } else {
//         alert("O número " + numero + " não é par.");
//     }
// }

// verificarPar();

// resultado = 0
// function calculadora() {
//     const num1 = parseInt(prompt('Informe o primeiro número: '))
//     const num2 = parseInt(prompt('Informe o segundo número: '))
//     const operador = prompt('Informe o tipo: * , +, -, / ')

//     if(operador === '*'){
//         return resultado = num1 * num2
//     }else if(operador == '+'){
//         return resultado = num1 + num2
//     }else if(operador == '-'){
//         return resultado = num1 - num2
//     }else if(operador == '/'){
//         return resultado = num1 + num2
//     }
// }

// calculadora()
// console.log(resultado)


/**
 * receba dois números 
 * verifique qual é o número
 * faça uma subtração de maior pelo menor
 * exiba o resultado
 */

// function subtracaoMaiorMenor(num1, num2) {
//     let maior, menor;
    
//     if (num1 > num2) {
//         maior = num1;
//         menor = num2;
//     } else {
//         maior = num2;
//         menor = num1;
//     }
    
 
//     const resultado = maior - menor;
    

//     console.log("O resultado da subtração do maior pelo menor é:", resultado);
// }


// subtracaoMaiorMenor(2, 6); 

// function resultado(numero1, numero2 ){
//     return numero1 - numero2
// }

// function subtracao(numero1, numero2 ){
//     if(numero1 >= numero2){
//         resultado(numero1, numero2 )
//     }else{
//         resultado(numero1, numero2 )
//     }
// }

// const falar = function (primeiro , segundo){
//     console.log(primeiro + " " + segundo)
// }
// falar('ola', 'pessoal')

// const divisao = (num1)

// let resultado = 0;

const calculadora = () => {
    const num1 = parseInt(prompt('Informe o primeiro número: '));
    const num2 = parseInt(prompt('Informe o segundo número: '));
    const operador = prompt('Informe o tipo: * , +, -, / ');

    const operacoes = {
        '*': () => num1 * num2,
        '+': () => num1 + num2,
        '-': () => num1 - num2,
        '/': () => num1 / num2
    };

    if (operador in operacoes) {
        resultado = operacoes[operador]();
    } else {
        console.log('Operador inválido.');
    }
}

calculadora();
alert(resultado);