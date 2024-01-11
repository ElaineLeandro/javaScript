/** Valores de retorno das funções
 * Muitas funções, por padrão, retornam o valor deundefined.
 * 
 * Um exemplo é a funçãoconsole.log().
 */

console.log("Olá") // saida será undefined


/**
 * Como a função console.log() foi criada de modo a não ter o valor de retorno definido explicitamente, ela obtém o valor de retorno padrão deundefined.
 * 
 * Agora, vou codificar minha própria implementação deconsole.log(), que não retorna o valor deundefined:
 * 
 */

function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog('Hello')
consoleLog('############')

/**
 * Por que isso é útil?
 * É útil porque posso usar os valores de retorno de uma função dentro de outra função.
 * Aqui está um exemplo.
 * Primeiro, codificarei uma função que retorna um double de um número que recebeu:
 * 
 */

function doubleIt(num) {
    return num * 2
}

doubleIt(10).toString()
consoleLog(doubleIt(10))
consoleLog('############')

//Agora, codificarei outra função que cria um objeto com um valor específico:

function objectMaker(val) {
    return {
        prop: 20
    }
}

objectMaker( doubleIt(100) );
console.log(objectMaker( doubleIt(100) ))
consoleLog('############')