/** Escreva uma função que receba 2 numeros e retone o maior deles */


const inputNumUm = document.getElementById('numUm')
const inputNumDois = document.getElementById('numDois')
const resultado = document.getElementById('resultado')

console.log(inputNumUm)

function encontrarMaiorNumero(numUm, numDois){
   //converter os valores para números
   const numeroUm = parseFloat(numUm.value)
   const numeroDois = parseFloat(numDois.value)

 // Verificando se os valores são válidos
  if (isNaN(numeroUm) || isNaN(numeroDois)) {
    return "Por favor, insira números válidos";
  }

   //Comparando os números e retonando o maior
   if(numeroUm > numeroDois){
      return numeroUm
   }else if( numeroDois > numeroUm){
      return numeroDois
   }else{
      return "números são iguais"
   }
  
}

// Adicionando um evento de submit ao formulário
document.getElementById('formulario').addEventListener('submit', function(event){
   event.preventDefault(); // Evita o comportamento padrão de recarregar a página

   //chamando a função para encontrar o maior número
   const maiorNumero = encontrarMaiorNumero(inputNumUm, inputNumDois);

   // Exibindo o resultado na div com o ID 'resultado'
   resultado.textContent = "O maior número é:" + maiorNumero
})