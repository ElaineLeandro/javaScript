/**
 * Parâmetros padrão
 * Um recurso útil do ES6 me permite definir um parâmetro padrão dentro de uma definição de função Primeiro, .
 * O que isso significa é que usarei um recurso do ES6 que me permite definir um parâmetro padrão dentro de 
 * uma definição de função, o que está de acordo com a abordagem de codificação defensiva, sem exigir quase 
 * nenhum esforço de implementação.
 * 
 */

// Por exemplo, considere uma declaração de função sem parâmetros padrão definidos:

function noDefaultParams(number){
    console.log("Result", number * number)
}

noDefaultParams() // Result: NaN

console.log("#########")

function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

withDefaultParams()

console.log("#########")

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'

console.log("###########")

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6