const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click', function(event) {
    alert('Clique no botão Iniciar');
});

pausar.addEventListener('click', function(event) {
    alert('Clique no botão Pausar');
});

zerar.addEventListener('click', function(event) {
    alert('Clique no botão Zerar');
});

// function iniciarRelogio() {
//     alert('Clique no botão Iniciar');
//     // Adicionar lógica de iniciar o relógio, se necessário
// }

// function pausarRelogio() {
//     alert('Clique no botão Pausar');
//     // Adicionar lógica de pausar o relógio, se necessário
// }

// function zerarRelogio() {
//     alert('Clique no botão Zerar');
//     // Adicionar lógica de zerar o relógio, se necessário
// }