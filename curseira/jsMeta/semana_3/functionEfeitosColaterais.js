/**
 * Funções puras e efeitos colaterais
 * 
 * Outro conceito de programação funcional são as funções puras.
 * Uma função pura retorna exatamente o mesmo resultado, desde que receba os mesmos valores.
 * Um exemplo de uma função pura é a função addTwoNums() da seção anterior:
 */

function addTwoNums(a, b) {
    console.log(a + b)
}

addTwoNums(5,6); // 11

/**
 * Outra regra para que uma função seja considerada pura é que ela não deve ter efeitos colaterais. Um efeito colateral é qualquer instância em que uma função faz uma alteração fora dela mesma.
 * 
 * Isso inclui: 
 *  - alterar valores de variáveis fora da própria função ou até mesmo depender de variáveis externas 
 *  - chamar uma API do navegador (até mesmo o próprio console!) 
 *  - chamar Math.random() - já que o valor não pode ser repetido de forma confiável
 * 
 *  O tópico de funções puras e impuras pode se tornar um pouco complexo.
 * Por enquanto, é suficiente saber que esse conceito existe e que está relacionado à programação funcional.
 */