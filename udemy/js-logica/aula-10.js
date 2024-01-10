/**Atribuição via desestruturação - Objetos */

const pessoa = {
    nome: 'Bento',
    sobrenome: 'Leandro',
    idade: 39,
    endereco:{
        rua: 'Avenida Brasil',
        numero: 555
    }
};

/**Atribuição via desestruturação */
// const {endereco: {rua: r = 1234, numero}, endereco} = pessoa
const {nome, ...resto} = pessoa
console.log(resto)