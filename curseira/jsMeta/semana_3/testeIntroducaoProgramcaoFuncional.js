// 1 -> O que será impresso quando o código a seguir for executado?
// [] 77
// [] 88
// [] NULO
// [ X ]ReferenceError: localVar não está definido
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

//console.log(localVar);

console.log('#################')

/**
 * 2 -> As variáveis declaradas usando const podem ser reatribuídas.
 *  [] Verdadeiro
 *  [] Falso
 */

console.log('#################')

/**
 *  3 -> Quando uma função chama a si mesma, isso é conhecido como _____________.
 *    [ X ] Recursão
 *    [] Looping
 *    [] Função de ordem superior
 */

console.log('#################')

//4 -> O que será impresso quando o código a seguir for executado?
function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);

/**
 * []10
 * [X]20
 * []30
 * []40
 */

console.log('#################')
//5.Que valor será impresso quando o código a seguir for executado?


function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));

console.log('#################')