/**Mais sobre variaveis*/

const verdadeira = true

let nome = 'Elaine' // criado
var nome2 = 'Benicio'

//Let tem escopo de bloco { ...bloco}
//var só tem escopo de função


if(verdadeira){
    let nome = 'Asly' // criado
    console.log(nome, nome2)

    if(verdadeira){
        let nome = 'Outra coisa!'
        console.log(nome, nome2)
    }
}

var sobrenome = "Leandro"

function falaOi(){
    console.log(sobrenome)
}

falaOi()