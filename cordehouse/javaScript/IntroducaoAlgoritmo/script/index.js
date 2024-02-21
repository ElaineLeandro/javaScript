let nome = 'Elaine '
let sobreNome = 'Leandro '
let anoAtual = 2024
let anoNascimento = 1985
let idade = anoAtual - anoNascimento;
let dados = `${nome} ${sobreNome}  ${idade}`

console.log(dados)

console.log("##############")

let inserida = prompt('Digita a sua idade: ')

console.log(anoAtual - parseInt(inserida))

//Exercicio 
console.log("##############")

const numero1 = prompt("Digita um número")
const numero2 = prompt("Digita outro número")

const numero1Convertido = parseInt(numero1)
const numero2Convertido = parseInt(numero2)

const soma = numero1Convertido + numero2Convertido


alert("A soma dos valores é: " + soma)

console.log("###########")

//Exemplo Aula 

let valor1 = prompt('Digite um numero: ')
let valor2 = prompt('Digite outro numero: ')


console.log(parseInt(valor1) + parseInt(valor2))
alert('O produto é: ' + parseInt(valor1) * parseInt(valor2))