/**
 * Tarefa 1: Codificar uma declaração de função
 * O senhor precisa codificar uma declaração de função chamada addTwoNums, que aceita números a e b e logs de console a + b.
 * 
 * Tarefa 2: Chamar a função addTwoNums com um número e uma cadeia de caracteres
 * O senhor precisa invocar a funçãoa ddTwoNums usando os seguintes argumentos:5 e "5".
 * 
 * Tarefa 3: Atualizar a função addTwoNums com um bloco try...catch
 * Adicione os blocos try e catch dentro do corpo da definição da função. Por enquanto, apenas certifique-se de que o log 
 * do console de a + b esteja dentro do bloco try. Além disso, o blococatch deve capturar um erro chamado err e, 
 * entro do corpo do blococatch, o senhor precisa registrar no console o valor err.
 * 
 * Tarefa 4: se os argumentos passados não forem números, lance um erro
 * Se qualquer um dos argumentos passados para o addTwoNums não for um número, o senhor lançará um erro.
 * Especificamente, codifique uma condicional com a seguinte lógica:
 * se o parâmetro typeof doa não for igual a'number', o senhor lançará um novoReferenceError. Dentro 
 * deReferenceError, passe uma mensagem de erro personalizada de'the first argument is not a number'.
 * else if the typeof theb parameter is not equal to'number', throw a new ReferenceError. Dentro 
 * do ReferenceError, passe uma mensagem de erro personalizada de'the second argument is not a number'.
 * else, console loga + b 
 * Depois que o senhor concluir essa tarefa, todo o código dentro do blocotry estará dentro dessas instruções condicionais.
 * 
 * Tarefa 5: Atualizar o bloco catch
 * Dentro do bloco catch, atualize o código de console.log(err) para console.log("Error!", err).
 * 
 * Tarefa 6: invocar a função addTwoNums
 * Invoque a função addTwoNums usando 5 e "5" como argumentos.
 * 
 * Tarefa 7: Adicione outro log de console sob a invocação da função addTwoNums
 * Adicione outra linha de código que registre no console a string"It still works".
    
 */

// function addTwoNums(a, b){
//     console.log( a + b)
// }

// addTwoNums(5, "5");
// function addTwoNums(a, b){
//     try{
//         // Tentando somar os valores dentro do bloco try
//         console.log( a + b)
//     }catch(err){
//         // Capturando qualquer erro que ocorra e registrando no console
//         console.log("Ocorreu um erro:", err);
//     }
// }

// addTwoNums(5, "5");

// function addTwoNums(a, b) {
//     try {
//         if (typeof a !== 'number') {
//             throw new ReferenceError('O primeiro argumento não é um número');
//         } else if (typeof b !== 'number') {
//             throw new ReferenceError('O segundo argumento não é um número');
//         } else {
//             console.log(a + b);
//         }
//     } catch (err) {
//         console.log("Ocorreu um erro:", err.message);
//     }
// }

// // Chamando a função com os argumentos 5 e "5"
// addTwoNums(5, "5");  

function addTwoNums(a, b) {
    try {
        if (typeof a !== 'number') {
            throw new ReferenceError('O primeiro argumento não é um número');
        } else if (typeof b !== 'number') {
            throw new ReferenceError('O segundo argumento não é um número');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err.message);
    }
    console.log("It still works")
}

// Chamando a função com os argumentos 5 e "5"
addTwoNums(5, "5");  // Isso resultará em um erro devido ao segundo argumento não ser um número
