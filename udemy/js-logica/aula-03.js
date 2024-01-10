/**
 * && -> todas expressões precisa ser verdadeiras (false && true -> false "O valor mesmo")
 * || -> todas expressões precisa ser falsa
 *  Valores -> Falsy
 * false 
 * 0 '' "" ``
 * null / undfined
 * NaN
 */

// console.log('Elaine' && ' ' && 'Bento')

function falaOla(){
    return "Ola"
}

//  const vaiExecultar = false
// const vaiExecultar = undefined
// const vaiExecultar = 'ela'

// console.log(vaiExecultar && falaOla())

// console.log(0 || false || null || "Ela" || true)

const corUse = 'branco'
const corPd = corUse || 'Azul'

console.log(corPd)