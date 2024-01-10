/**For in -> lê os índices ou chaves do objetos */

// const cidades = [ 'SP', 'PR', 'SC', 'MG']


// for (let indice in cidades){
//     console.log(cidades[indice])
// }

const pessoa = {
    nome: 'Elaine',
    sobrenome: 'Leandro',
    idade: 38

}

for(let chaves in pessoa){
    console.log(pessoa[chaves])
}