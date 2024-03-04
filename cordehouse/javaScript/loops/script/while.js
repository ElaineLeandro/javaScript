
// let nome = prompt('Digite um nome: (Para sair, digite SAIR)');
// while (nome !== 'SAIR') {
//     console.log(`O nome digitado foi: ${nome}`);
//     nome = prompt('Digite um nome: (Para sair, digite SAIR)');
// }


console.log("########")

// Função para calcular o fatorial de um número usando um loop while
const calcularFatorial = (numero) => {
   
    if (numero < 0) {
        return "O número fornecido deve ser não negativo.";
    }

    let fatorial = 1;
    let i = 1;

   
    while (i <= numero) {
        fatorial *= i; 
        i++; 
    }

    return fatorial;
}

// Exemplo de uso da função
const number = 5;
console.log(`O fatorial de ${number} é: ${calcularFatorial(number)}`);

 console.log("############")

// Função recursiva para calcular o fatorial de um número
const calcularFatorial1 = (num) => {
    // Verifica se o número é 0 ou 1 (caso base)
    if (number === 0 || number === 1) {
        return 1;
    }
    // Caso contrário, calcula o fatorial recursivamente
    return number * calcularFatorial(number - 1);
}

// Exemplo de uso da função
const num = 6;
console.log(`O fatorial de ${num} é: ${calcularFatorial(num)}`);
