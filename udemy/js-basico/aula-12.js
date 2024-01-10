const numero = Number(prompt('Digite um número:'))
const numeroTitulo = document.getElementById('n-titulo')
const texto = document.getElementById('texto')
// const raizQuadrada = Math.floor(numero / numero)

numeroTitulo.innerHTML = numero
texto.innerHTML = ''
texto.innerHTML += `<p> Seu número + 2 é ${numero + 2} , <br/> `
texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}.</p>`
texto.innerHTML += `<p> ${numero} é inteiro:${Number.isInteger(numero)}.</p>`
texto.innerHTML += `<p> É NaN:${Number.isNaN(numero)}.</p>`
texto.innerHTML += `<p> Arredondando para baixo:${Math.floor(numero)}.</p>`
texto.innerHTML += `<p> Arredondando para cima:${Math.ceil(numero)}.</p>`
texto.innerHTML += `<p> Duas casas decimais:${numero.toFixed(2)}.</p>`