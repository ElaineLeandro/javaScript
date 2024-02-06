//Classes

class Car {
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    turboOn(){
        console.log("turbo is on!")
    }
}

car1.turboOn()

/**
 * Pergunta

1.O senhor está trabalhando com classes em JavaScript. Quais das instruções a seguir o senhor deve seguir? Marque todas as que se aplicam.

[ X ] Adicione uma função construtora para aceitar seus parâmetros.

Correto

É isso mesmo. A função do construtor atribui os parâmetros passados às propriedades do objeto futuro.

[ X ] Crie suas classes usando a palavra-chave "class".

Correto

É isso mesmo. Qualquer classe é criada usando a palavra-chave "class".

[ X ] Crie uma instância da classe usando a palavra-chave new e o nome da classe, seguido de parênteses de abertura e fechamento e argumentos opcionais, com base em como a própria classe é definida.

Correto

É isso mesmo. Por exemplo, se uma classe chamada Car não recebe nenhum argumento, o senhor a instanciaria assim: new Car().

[ ] Certifique-se de que o nome de sua classe esteja em letras minúsculas.
 */