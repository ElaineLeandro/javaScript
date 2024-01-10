//single loop

for(let firstNum = 0; firstNum < 2; firstNum++){
    console.log(firstNum)
}

/**
 * O resultado do código acima será:
    0
    1
    Isso significa que meu loop for começa em 0 e para depois de 1.
 */

//single loop

for (var secondNum = 0 ; secondNum < 10; secondNum++){
    console.log(secondNum)
}

//Agora é o momento de combinar o primeiro e o segundo loop:

//nested loops - one inside another
for(var firstNum = 0 ; firstNum < 2; firstNum++){
    for(var secondNum = 0; secondNum < 10; secondNum++){
        console.log(firstNum + ' , ' + secondNum)
    }

}

//nested loops - one inside another
for(var firstNum = 0 ; firstNum < 2 ; firstNum++){
    for(var secondNum = 0 ; secondNum < 10; secondNum++){
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum)
    }
}

//Por exemplo, posso criar uma tabela de divisão personalizada:
//nested loops - one inside another 
for(let i = 100; i > 10; i = i - 10){
    for(var j = 10; j > 4; j = j - 5){
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}