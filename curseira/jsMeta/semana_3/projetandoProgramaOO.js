/**
 * Projetando um programa de OO
 * Especificamente, estou me preparando para criar a seguinte hierarquia de herança:

                  Animal
                   / \
               Gato Pássaro
          / \ \
    HouseCat Tiger Parrot

    Há duas palavras-chave que são essenciais para a OOP com classes em JavaScript.

    Essas palavras-chave sãoextends esuper.

    A palavra-chaveextends me permite herdar de uma classe existente.

    Com base na hierarquia acima, posso codificar a classeAnimal da seguinte forma:
 * 
 */


class Animal{
    constructor(color= 'yellow', energy = 100){}
    isActive(){


        
    }


}

    
//Em seguida, posso codificar, por exemplo, a subclasseCat, assim:
class Cat extends Animal{
    
}