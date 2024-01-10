/**
 * O operador lógico NOT:!
 * Em JavaScript, o símbolo do operador lógico NOT é o ponto de exclamação:!.
 * 
 * Você pode pensar no operador! como um interruptor, que inverte o valor booleano avaliado detrue parafalse e defalse para true.
 * Por exemplo, se eu atribuir o valor booleano de true à variável petHungry: 
 * var petHungry = true;
 * 
 * ...então posso registrar no console o fato de que o animal de estimação não está mais com fome usando o operador ! 
 * para inverter o valor booleano armazenado dentro da variável petHungry, assim:
 */
var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);

console.log("#######")

/**
 * O motivo da alteração da saída no console é que o senhor inverteu o valor armazenado na variávelpetHungry, detrue para false
 * Observe, no entanto, que o código na linha cinco do exemplo acima ainda geratrue- isso se deve ao fato de eu não ter reatribuído o valor da variável petHungry.
 */

var petHungry = true
petHungry = !petHungry
console.log(petHungry)

//Neste exemplo, primeiro atribuo o valor detrue à nova variávelpetHungry. Em seguida, na linha dois, atribuo o valor oposto,!true- leia-se: não verdadeiro - à variávelpetHungry existente

