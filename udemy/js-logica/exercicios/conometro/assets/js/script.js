const relogio = () => {
    const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

const criaHoraDosSegundos = (segundos) => {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

const iniciarRelogio = () =>  {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
};

document.addEventListener('click', (event) => {
    const clickedElement  = event.target;

    if(clickedElement .classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
    if(clickedElement.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciarRelogio();
    }
    if(clickedElement.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado')
  
    }
    
})

}

relogio()
