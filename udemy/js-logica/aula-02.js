/**
 * Operador Lógicos
 * 
 * && -> AND -> E -> Todas as expressões precisam ser  verdadeira para retornar
 * || -> OR -> OU
 * ! -> NOT ->NÃO
 */

const expressaoAnd = true && true && true
const expressaoOr= false||true

const usuario = 'ela'
const senha = '1234'

const vailogar = usuario === 'ela' && senha === '1234'
console.log(vailogar)