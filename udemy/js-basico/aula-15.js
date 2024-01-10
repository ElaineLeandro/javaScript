/** Objetos */

// let array = [1,2,3];
// array.push(4);
// array[0] = 'Asly'
// array = 'Outra'
// console.log(array)

// function criaPessoa(nome, sobrenome, idade){
//     return{
//         nome,
//         sobrenome,
//         idade
//     }
// }

// const pessoa = criaPessoa('Elaine', 'Rodrigues', 26)
// const pessoa1 = criaPessoa('Asly', 'Leandro', 35)
// const pessoa2 = criaPessoa('Benicio', 'Leandro', 40)
// const pessoa3 = criaPessoa('Bento', 'Leornado', 42)

// console.log(pessoa, pessoa1, pessoa2, pessoa3)

const dados = {
    nome:'Bento',
    sobreNome:'Leandro',
    idade: 1,

    fala(){
        console.log(`${this.nome} ${this.sobreNome} está falando olá....${this.idade}`)
    },

    incrementoIdade(){
        this.idade++
    }
}

dados.fala()
dados.incrementoIdade()
dados.fala()