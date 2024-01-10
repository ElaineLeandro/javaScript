/** setInterval e setTimeout */

const mostraHora = () =>{
    let data = new Date ()

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    })
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

setTimeout(function (){
    clearInterval(timer)
}, 4000)

setTimeout(function(){
    console.log("Olá vendo Js")
}, 5000)

// const timer = setInterval(function(){
//     console.log(mostraHora())
// }, 1000)

// const funcaDoInterval = () =>{
//     console.log(mostraHora())
// }
// setInterval(funcaDoInterval, 1000)