/** 1.(Par ou impar) Crie uma funionalidade que recebe um número e verifica se ele é par ou impar */
const verificacaoParOuImpar = (numero)=>{
    if( numero % 2 === 0){
        return "O número é par. "
    }else{
        return "O numero é impar"
    }
}

console.log(verificacaoParOuImpar(2))
console.log(verificacaoParOuImpar(3))
console.log(verificacaoParOuImpar(10))

console.log("#######")

// 2. Estação do ano -> Faça um sistema que receba um mês e informe a qual estação esse mês pertence

const estacaoDoAno = (mes) =>{
    switch(mes){
        case 12:
        case 1:
        case 2:
            return "Verão"
        case 3:
        case 4:
        case 5:
            return "Outono"
        case 6:
        case 7:
        case 8:
          return "Inverno"
        case 9:
        case 10:
        case 11:
            return "Pimavera"
        default:
            return "Mês invalido"
    }
}

console.log(estacaoDoAno(3)); // Saída: Outono
console.log(estacaoDoAno(8)); // Saída: Inverno
console.log(estacaoDoAno(12)); // Saída: Verão

console.log("##########");
//Escreva uma função em JavaSript que realize a conversão de uma temperatura fornecida em graus fahrenheit para celsius

function fahrenheitParaCelsius(temperaturaFahrenheit) {
    // Fórmula de conversão de Fahrenheit para Celsius: (F - 32) * 5/9
    const temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;
    return temperaturaCelsius;
}

// Exemplo de uso da função
const temperaturaFahrenheit = 77; // Exemplo de temperatura em graus Fahrenheit
const temperaturaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);
console.log(temperaturaFahrenheit + "°F equivale a " + temperaturaCelsius.toFixed(2) + "°C");

