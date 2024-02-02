/** Data posso receber segundos */

// const criaHoraDosSegundos = (segundos) =>{
//     const data = new Date(segundos * 1000)
//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'UTC'

//     })
// }

// console.log(criaHoraDosSegundos(10))
const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')




// iniciar.addEventListener('click', function(event) {
//     iniciarRelogio();
// });

// pausar.addEventListener('click', function(event) {
//     pausarRelogio();
// });

zerar.addEventListener('click', function(event) {
    zerarRelogio();
});

function iniciarRelogio() {
    alert('Clique no botão Iniciar');
    // Adicionar lógica de iniciar o relógio, se necessário
}

function pausarRelogio() {
    alert('Clique no botão Pausar');
    // Adicionar lógica de pausar o relógio, se necessário
}

function zerarRelogio() {
    alert('Clique no botão Zerar');
    // Adicionar lógica de zerar o relógio, se necessário
}
