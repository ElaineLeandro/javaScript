/**
 * Sintaxe do for 
 * 
 * O inicio é o local em que se estabelecem valores iniciais das váriavéis que controla loop
 * 
 * A condição é unico elemento que decide se o que está contido no loop será repetido
 * 
 * A atualização é o novo valor que se atribui ás  variaveis qie controlam a repetição ao final de cada loop.
 * 
 */

// let numero = parseInt(prompt('Informe um numero: '))

// for(let i = 0; i <=10; i++){
//     let resultado = numero * i

//     console.log(`${numero} x ${i} = ${resultado}`)

//     if(i === 5){
//         console.log('chegou ná 5 possição')
//     }
// }



// console.log("########")
// let number = parseInt(prompt("Informe um numero: "))

// const produtorio(){
//     let resultado = 1;
//     for(let i = 0; i <= numero; i++){
//         resultado = resultado * 1
//     }
//     console.log(`Produtorio${numero} x ${i} = ${resultado}`)
// }

// produtorio(numero)


console.log("########")

const exibirNumerosMenores = (numero) => {
   
    if (numero < 1 || numero > 10) {
        console.log("Por favor, forneça um número entre 1 e 10.");
        return;
    }

    console.log(`Números menores que ${numero}:`);
    for (let i = 1; i < numero; i++) {
        console.log(i);
    }
}


exibirNumerosMenores(7);

console.log("########")

const numeros = parseInt(prompt('Insira um numero: '))

const verificarNumero = (numero) => {
    if (numero < 1 || numero > 10) {
        console.log("Por favor, forneça um número entre 1 e 10.");
        return;
    }
}

