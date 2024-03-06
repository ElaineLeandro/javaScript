// Exemplo 1: Solicitar a quantidade de parcelas
function exibirValorParcelas() {
    const quantidadeParcelas = document.getElementById('quantidadeParcelas').value;
    let valorParcela = 100; 
    let resultado = "";
  
    for (let i = 1; i <= quantidadeParcelas; i++) {
      resultado += `Parcela ${i}: R$ ${valorParcela}<br>`;
    }
  
    document.getElementById('resultadoParcelas').innerHTML = resultado;
  }
  
  // Exemplo 2: Simular um empréstimo
    function exibirValorParcelasDecrescentes() {
    const valorEmprestimo = parseFloat(document.getElementById('valorEmprestimo').value);
    let valorParcela = valorEmprestimo; // Valor inicial da parcela
    const valorDesconto = 100; // Valor do desconto a ser aplicado em cada parcela
  
    let resultado = "";
    while (valorParcela > 0) {
      resultado += `Valor da Parcela: R$ ${valorParcela.toFixed(2)}<br>`;
      valorParcela -= valorDesconto; // Decrementa o valor da parcela pelo valor do desconto
    }
  
    document.getElementById('resultadoEmprestimo').innerHTML = resultado;
  }
  
  
  
  // Exemplo 3: Solicitar entrada até digitar "sair"
  function solicitarEntrada() {
    let entrada;
    let resultado = "";
  
    do {
      entrada = prompt("Digite algo (digite 'sair' para finalizar):");
      resultado += `Entrada: ${entrada}<br>`;
    } while (entrada !== 'sair');
  
    document.getElementById('resultadoEntrada').innerHTML = resultado;
  }
  
  // Exemplo 4: Inserir valores e exibir soma e média
  let valores = [];
  function calcularSomaEMedia() {
    const novoValor = parseFloat(prompt("Digite um valor:"));
    valores.push(novoValor);
  
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
      soma += valores[i];
    }
    const media = soma / valores.length;
  
    document.getElementById('resultadoSomaMedia').innerHTML = `Soma: ${soma.toFixed(2)}, Média: ${media.toFixed(2)}`;
  }
  
  
  