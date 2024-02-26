//Função para calcular o IMC

const calculateIMC = () =>{
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value)

    // calcular IMC
    const imc = calculateIMCFromWeightHeight(weight, height)

    //Exibir o resultado

    displayResult(imc)
}

// Função para calcular o IMC com base no peso e altura fornecidos

const  calculateIMCFromWeightHeight = () =>{
    const imc = weight / (height * height);
    return imc.toFixed(2)
}