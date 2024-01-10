/** Capiturar evento de submit do formulário */

const form = document.querySelector('#formulario')

form.addEventListener('submit', function(event){
    event.preventDefault()
   const inputPeso = event.target.querySelector('#peso')
   const inputAltura = event.target.querySelector('#altura')
   
   const peso = Number(inputPeso.value)
   const altura = Number(inputAltura.value)
   
   if(!peso){
    setResultado("Peso inválido" , false)
    return;
   }
   if(!altura){
    setResultado('Altura inválida', false)
    return;
   }

   const imc = getImc(peso, altura)
   const percentualImc = getPercentualImc(imc)

   const msg =`Seu Imc é ${imc} (${percentualImc}).`;
   setResultado(msg, true)
});


function getPercentualImc(imc){
    const percentual = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9) return percentual[5]
    if(imc >= 34.9) return percentual[4]
    if(imc >=29.9) return percentual[3]
    if(imc >= 24.9) return percentual[2]
    if(imc >= 18.5) return percentual[1]
    if(imc <= 18.5) return percentual[0]
}
function getImc(peso, altura){

    const imc = peso / altura ** altura
    return imc.toFixed(2)
}

function criarParagrafo(){
    const paragrafo = document.createElement('p')
    return paragrafo
}

function setResultado(msg, isValid){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    
  const p = criarParagrafo()   
  if(isValid){
    p.classList.add('paragrafo-resultado')
  }else{
    p.classList.add('bad')
  }
  p.innerHTML = msg
  resultado.appendChild(p)

}