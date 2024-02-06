/**
 * Os princípios da OOP
 *  # Os quatro princípios fundamentais da POO são herança, encapsulamento, abstração e polimorfismo. 
 * Você aprenderá sobre cada um desses princípios individualmente. O que o você deve lembrar sobre 
 * os objetos é que eles existem em uma estrutura hierárquica.
 * Isso significa que a base original ou superclasse de tudo é a classe Object, e todos os objetos
 * derivam dessa classe.
 * Isso nos permite utilizar o método Object.create() para criar ou instanciar objetos de nossas classes.
 */

class Animal {/** ...código de classe aqui... */}

let myDog = Object.create(Animal)

console.log(Animal)

/**
 * Um método mais comum de criar objetos a partir de classes é usar a palavra-chave new. 
 * Ao usar um método construtor padrão ou vazio, o JavaScript chama implicitamente a superclasse
 * Object para criar a instância.
*/

class Obejeto { /* ...código de classe aqui...  */ }

var garrafa= new Obejeto()

console.log (Obejeto)

/**
 * Esse conceito é explorado na próxima seção sobre herança
 * 
 * Princípios de OOP: Herança
 *  A herança é um dos fundamentos da programação orientada a objetos.
 *  Em essência, é um conceito muito simples. Ele funciona da seguinte forma: 
 *      1.Existe uma classe base de uma "coisa".
 *      2.Há uma ou mais subclasses de "coisas" que herdam as propriedades da classe base (às vezes também chamada de "superclasse")
 *      3.Pode haver outras subclasses de "coisas" que herdam as classes do ponto 2.
 * Observe que cada subclasse herda de sua superclasse. Por sua vez, uma subclasse também pode ser uma superclasse, se houver classes que herdem dessa subclasse.
 * Tudo isso pode parecer um pouco "ciência da computação", então aqui está um exemplo mais prático:
 *  1.Existe uma classe base de "Animal".
 *  2.Há outra classe, uma subclasse herdada de "Animals", e o nome dessa classe é "Bird" (pássaro).
 *  3.Em seguida, há outra classe, herdando de "Bird", e essa classe é "Eagle".
 * Assim, no exemplo acima, estou modelando objetos do mundo real ao construir relacionamentos entre Animal, Bird e 
 * Eagle. Cada uma delas é uma classe separada, ou seja, cada uma delas é um projeto separado para instâncias de
 * objetos específicos que podem ser construídos conforme necessário.
 * Para configurar a relação de herança entre classes em JavaScript, posso usar a palavra-chaveextends, como emclass B extends A.
*/

//Aqui está um exemplo de uma hierarquia de herança em JavaScript:
class Animals{/* ...código de classe aqui...  */}
class Bird extends Animals { /* ...código de classe aqui...  */ }
class Eagle extends Bird { /* ...código de classe aqui...  */ }

/**
 * Princípios de OOP: Encapsulamento
 * Em termos mais simples, o encapsulamento tem a ver com tornar uma implementação de código "oculta" 
 * para outros usuários, no sentido de que eles não precisam saber como meu código funciona para "consumir" 
 * o código.
*/

//Por exemplo, quando executo o código a seguir:
"abc".toUpperCase();

/**
 * Princípios de OOP: Abstração
 * A abstração tem tudo a ver com escrever o código de uma forma que o torne mais generalizado.
 * Os conceitos de encapsulamento e abstração costumam ser mal compreendidos porque suas diferenças podem parecer pouco nítidas.
 * É útil pensar nisso nos seguintes termos: 
 * -> Uma abstração tem a ver com extrair oconceito do que o senhor está tentando fazer, em vez de lidar com uma manifestação específica desse conceito. 
 * -> O encapsulamento significa que o senhor não tem acesso ou não se preocupa com o funcionamento interno de alguma implementação.
 * Embora tanto o encapsulamento quanto a abstração sejam conceitos importantes na OOP, é preciso ter mais experiência 
 * com programação em geral para realmente se aprofundar nesse tópico.
 */

/**
 * Princípios da POO: Polimorfismo
 * Polimorfismo é uma palavra derivada do idioma grego que significa "múltiplas formas".
 * Uma tradução alternativa poderia ser: "algo que pode assumir várias formas".
 * Portanto, para entender o que é o polimorfismo, vamos considerar alguns objetos da vida real.
 *  -> Uma porta tem uma campainha. Pode-se dizer que a campainha é uma propriedade do objeto porta.
 *  Essa campainha pode ser tocada. Quando alguém tocaria a campainha da porta? Obviamente, para que 
 *  alguém apareça na porta.
 *  -> Agora considere uma campainha em uma bicicleta. Uma bicicleta tem uma campainha. Pode-se dizer 
 * que a campainha é uma propriedade do objeto bicicleta. Essa campainha também pode ser tocada. 
 * Entretanto, o motivo, a intenção e o resultado de alguém tocar a campainha de uma bicicleta não é 
 * o mesmo que tocar a campainha de uma porta.
 * 
 * Os conceitos acima podem ser codificados em JavaScript da seguinte forma:
*/

const bicycle = {
    bell: function(){
        return "Toque, toque! Cuidado, por favor!"
    }
}
const door = {
    bell: function(){
        return "Toque, toque! Venha aqui, por favor!"
    }
}

//Assim, posso acessar o métodobell() no objetobicycle, usando a seguinte sintaxe:  
bicycle.bell()
console.log(bicycle.bell())

console.log("###############")
//Também posso acessar o métodobell() no objetodoor, usando a seguinte sintaxe:
door.bell()  
console.log(door.bell())

console.log("###############")


/**
 * Nesse ponto, pode-se concluir que exatamente o mesmo nome do método pode ter a intenção exatamente oposta, com base no objeto para o qual ele é usado.
 * Agora, para tornar esse código realmente polimórfico, adicionarei outra declaração de função:
*/

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle);

console.log("**************")

ringTheBell(door)

console.log("**************")



console.log("***********")

console.log("***********")

// create your classes here
class Car {
    constructor(brand, model, year, color){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0
    }
    flash(speed){
        this.speed += speed;
        console.log(`The Car ${this.brand} accelerated to ${this.speed} km/h`);
}

brake(){
    this.speed = 0;
    console.log(`The car ${this.brand} ${this.model} brake.`)
}

displayedInf(){
    console.log(`The Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year},
     Color : ${this.color}, Speed: ${this.speed} km/h.` )
}
}




const myCar = new Car ("Toyota", "Corolla", 2022, "Prata");

myCar.displayedInf();
myCar.flash(60);
myCar.displayedInf();
myCar.brake();
myCar.displayedInf()

