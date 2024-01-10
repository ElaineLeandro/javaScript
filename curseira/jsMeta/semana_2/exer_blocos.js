// 1. Qual é o tipo de dados da variável x?

var x = {}
console.log(typeof x)
console.log('##############')

// 2. Qual será o resultado da execução do código a seguir?  

// try {
//     console.log('hello)
//     } catch(e) {
//     console.log('caught')
//     }


// 3. Que valor é impresso quando o código a seguir é executado?

var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
console.log(burger[2]);

console.log('##############')

// 4. No código a seguir, quantos métodos o objeto bicicleta tem?
// var bicycle = {
//     wheels: 2,
//     start: function() {

//     },
//     stop: function() {

//     }
// };

// bicycle(2)

console.log('##############')
try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

  console.log('##############')

/*
  6.Se o senhor digitar incorretamente algum código em seu JavaScript, que tipo de erro isso resultará?
    [ ] RangeError
    [ X ] SyntaxErrror
    [ ] TypeError
*/

// 7.O código a seguir será executado sem erros?

function add(a, b) {
    console.log(a + b)
  }

  add(3, "4");

  console.log('##############')

//8. O que será impresso quando o código a seguir for executado?

var result;
console.log(result);

console.log('##############')

//9.Qual será o resultado do código a seguir?

var str = "Hello";
str.match("jello");

console.log(typeof str)

console.log('##############')
//10. Qual será o resultado do código a seguir?

try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }