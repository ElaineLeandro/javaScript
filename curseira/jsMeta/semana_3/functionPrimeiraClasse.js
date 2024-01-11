/**
 * Funções de primeira classe
 * 
 * Costuma-se dizer que as funções em JavaScript são "cidadãos de primeira classe". O que isso significa?
 * Significa que uma função em JavaScript é apenas outro valor que podemos
 *  -  passar para outras funções
 *  -  salvar em uma variável
 *  -  retornar de outras funções
 * 
 * Em outras palavras, uma função em JavaScript é apenas um valor - desse ponto de vista, quase não é diferente de uma string ou de um número.
 * Por exemplo, em JavaScript, é perfeitamente normal passar uma invocação de função para outra função.
 * Para explicar como isso funciona, considere o seguinte programa.
 */

function addTwoNums( a, b){
    console.log(a + b)
};

function randomNum(){
    return Math.floor(( Math.random() * 10 ) + 1)
};

function specificNum(){
    return 42
};

const useRandom = true;

let getNumber;

if(useRandom){
    getNumber = randomNum
}else{
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())