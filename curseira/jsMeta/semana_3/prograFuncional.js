/** Entre dados e Funções programação funcional;
 * 
 */

let currencyOne =  100 ; // Data
let currencyTwo = 0;
let exchangeRate = 1.2;

function convertCurrency(amount, rate){
    return amount * rate
}


currencyTwo = convertCurrency(currencyOne, exchangeRate)

console.log(currencyTwo)
