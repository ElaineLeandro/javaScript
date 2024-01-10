/** Primitivos (imutáveis) - string, number, booblean, undefined, null (bigint, symbol)  - Valores copiados
 * 
 * Referência (mutável) -  array, object, function - Passados por referência
*/

let a = "A"
let b = a
a= "outra coisa"

console.log(a, b)

let c = [1,2,3]
let d = c
console.log(c, d)
c.push(4)
console.log(c, d)