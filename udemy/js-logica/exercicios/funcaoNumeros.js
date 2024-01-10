/** Escreva uma função que recebe um número e retorne o seguinte;
 *
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número =
 * Use a função com números de 0 a 100
 */

// const divisaoNumero = (numero) => {
//   if (numero % 3 === 0 && numero % 5 === 0) {
//     return numero;
//   } else if (numero % 3 === 0) {
//     return "Fiz";
//   } else if (numero % 5 === 0) {
//     return "Buzz";
//   } else {
//     return `Não é divisível por 3 nem por 5: ${numero}`;
//   }
// };

// //Teste com números de 0 a 100
// for (let index = 0; index <= 100; index++) {
//   console.log(divisaoNumero(index));
// }

function FizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero
}

//Teste com números de 0 a 100
for (let index = 0; index <= 100; index++) {
  console.log(index, FizzBuzz(index));
}
