/** Data posso receber segundos */

const criaHoraDosSegundos = (segundos) =>{
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'

    })
}

console.log(criaHoraDosSegundos(10))
// const relogio = document.getElementById('tempo')
// const inciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')

