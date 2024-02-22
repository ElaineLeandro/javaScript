/**
 * Criar um algoritmo com uma condicional
 * 
 * Desenvolva um sistema que:
 * 
 * Solicite um número através do prompt
 * Verificar se está entre 10 e 50
 * Em caso positivo, mostre uma mensagem indicativa em um alert
 * Em caso positivo, mostre uma mensagem indicativa en um console
 */

let numero = parseInt(prompt("Por favor, insira um número:"))

if(numero >= 10 && numero <= 50){
    alert("O número está entre 10 e 50!")

    console.log("O número está entre 10 e 50!")
}else{
    console.log("O número não está entre 10 e 50.");
}
