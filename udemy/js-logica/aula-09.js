/**Atribuição via desestruturação */
// ...rest, ...spread
// const numeros = [ 1, 2, 3 , 4, 5, 6, 7, 8, 9]
// const primeiroNumero = numeros[0]
// console.log(numeros[0])

//desestruturação
// const numeros = [ 100, 200, 300 , 400, 500, 600, 700, 800, 900]
// const [primeiroNumero , segundoNumero, terceiroNumero, ...resto] = numeros

// console.log(primeiroNumero, segundoNumero, terceiroNumero)
// console.log(resto)

const number = [[1,2,3], [4,5,6], [7,8,9]]
const [lista1 , lista2, lista3] = numeros

console.log(lista3[2])