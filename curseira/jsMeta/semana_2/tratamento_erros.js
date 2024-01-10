// 1. O que será impresso quando o código a seguir for executado?

var result = null;
  console.log(result);

// 2. Quando o código a seguir for executado, o que será impresso?


try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

/**
 * 3. Se o senhor passar um tipo de dados não suportado para uma função, que erro será lançado?
 * 
 * [X] RangerError
 * [ ] SytaxError
 * [ ] TypeError
 * 
 */


// 4.O que será impresso quando o código a seguir for executado?

var x;

if(x === null) {
  console.log("null");
} else if(x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}

// 5. O que será impresso quando o código a seguir for executado?

throw new Error("Hello");
console.log("Hello");