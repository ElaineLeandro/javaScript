/**
 * Neste laboratório de exercícios, o senhor praticará a criação de matrizes e objetos.
 * Tarefas a serem concluídas
 * 
 * 1.Criar um novo literal de matriz vazio e atribuí-lo à variável clothes.
 * 
 * 2.Adicione 5 de suas peças de roupa favoritas como strings usando o método push().
 * 
 * 3.Remova a quinta peça de roupa da matriz usando o método pop().
 * 
 * 4. Adicione uma nova peça de roupa usando o método push().
 * 
 * 5. Use console.log para mostrar o terceiro item da matriz clothes no console.
 * 
 * 6.Crie um novo literal de objeto vazio e atribua-o à variável favCar.
 * 
 * 7.Usando a notação de ponto, atribua uma propriedade color ao objeto favCar e dê a ela um valor de cadeia de caracteres com a cor de sua escolha.
 * 
 * 8.Usando a notação de ponto, atribua uma propriedade covertible ao objeto favCar e dê a ela um valor booleano de sua escolha.
 * 
 * 9.Use o console para registrar o objeto favCar inteiro.
 * 
 * 
 * Dicas
Lembre-se de usar a sintaxe literal do objeto: {}.

Lembre-se de usar a sintaxe literal de matriz: [].

Recursos
Vídeo (conceitual): Matrizes


Vídeo (Mix): Introdução a matrizes


Vídeo (conceitual): Objetos


Vídeo (Mix): Objetos


 */

let clothes = []
clothes.push("camiseta", "tenis", 'havaianas', 'vestido', 'casaco')

clothes.pop([4])

console.log(clothes)

clothes.push('camisas')

console.log(clothes)
console.log(clothes[2])

let favCar = {}

favCar.color = 'Azul'

favCar.covertible = true

console.log(favCar)
