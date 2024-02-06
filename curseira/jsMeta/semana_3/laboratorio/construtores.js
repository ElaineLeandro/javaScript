// Definição da função construtora Icecream
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

// Criando uma instância de Icecream
const myIcecream = new Icecream("chocolate");

// Chamando o método meltIt da instância myIcecream
myIcecream.meltIt();

console.log("***********")

//

function IcecreamOne(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new IcecreamOne("kiwi");
let appleIcecream = new IcecreamOne("apple");
console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}
