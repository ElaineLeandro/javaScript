/**
 * Para pensar
 * O que será impresso no conselo.log
 * 
 * Scopo tem três tipos no JavaScritp: Escopo Global, , Escopo de Função e ecopo de bloco;
 */

var nome = "Lucas"

function sobreScreveNome(){
    var nome = "Jonas"
}

function sobreScreveNomeDeNovo(){
    nome = "Maria"
}

sobreScreveNome()
sobreScreveNomeDeNovo()

console.log(nome)

console.log("##########")

// Escopo Global : Varial global armazena a lista de frutas

let listaDeFrutas = []

const adcionarFruta = (fruta) => {
    listaDeFrutas.push(fruta)
}

adcionarFruta('pitaia')
adcionarFruta('morango')
adcionarFruta('limão')

console.log("Lista de frutas", listaDeFrutas)