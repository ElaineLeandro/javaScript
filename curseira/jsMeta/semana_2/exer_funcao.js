/**Exercício: Praticando com funções
 * Sua tarefa neste exercício é codificar uma função que será capaz de pegar uma palavra e localizar
 *  a posição de uma letra escolhida nessa palavra. 
 * 
 *  Tarefa 1:
         Escreva uma função chamada letterFinder que aceite dois parâmetros: palavra e correspondência.

    Tarefa 2:
        Codifique um loop "for" dentro do corpo da função. O contador do loop for deve começar em zero,
        aumentar em 1 a cada iteração e sair quando o valor da variável do contador for igual ao comprimento do parâmetro word .

    Tarefa 3:
    Adicione uma instrução if dentro do loop for cuja condição funcione da seguinte forma:
        1.Acessar cada uma das letras dentro da palavra passada usando a variável de contador, com palavra[i]. 
        2.Verificar se a palavra atual [i] é igual ao valor de match.

    Tarefa 4:
        console.log o seguinte dentro do corpo da instrução if: console.log('Found the', match, 'at', i).

    Tarefa 5:
        Escreva a condição else. Aqui, o senhor apenas registrará no console o seguinte: console.log('---No match found at', i).

    Tarefa 6:
        Chame o letterFinder e passe como primeiro argumento a string "test" e, como segundo argumento, a string "t".

        Seu resultado deve ser o seguinte:

        Encontrou o t em 0

        ---Não foi encontrada correspondência em 1

        ---Nenhuma correspondência encontrada em 2

        Encontrou o t em 3

 */
        function letterFinder(word, match) {
            for (let i = 0; i < word.length; i++) {
              if (word[i] === match) {
                console.log('Encontrou o', match, 'em', i);
              } else {
                console.log('---Nenhuma correspondência encontrada em', i);
              }
            }
        }
          
          // Chame a função letterFinder com os argumentos fornecidos
          letterFinder("test", "t");
     