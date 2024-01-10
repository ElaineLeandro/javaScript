/**Arrays */

const listaFeira = ['Uva', 'maça', 'limão']

const removido = listaFeira.shift()



listaFeira.unshift('amora') // adicona um elemento inicio de uma lista
listaFeira.push('morango')// adicona um elemento final de uma lista

console.log(listaFeira)
console.log(removido)
console.log(listaFeira instanceof Array)