/**Exercício 2. Use o código concluído da tarefa anterior, mas converta as condicionais em uma instrução switch.
Quando codificar a solução, a saída no console deverá permanecer exatamente igual à da pergunta anterior.

Observação: O senhor precisará de três casos separados para as três medalhas e um caso padrão para todos os outros valores da variável i.
 */

for(let i = 1 ; i <= 10; i++){
    switch(i){
        case 1:
            console.log("Medalha de ouro")
            break
        case 2:
            console.log("Medalha de prata")
            break
        case 3:
            console.log("Medalha de Bronze")
            break
        default:
        console.log(i)
    }
}