const nome= prompt('Digite o seu nome completo:')
window.document.body.innerHTML += `O seu é: <strong>${nome}</strong> <br />`
window.document.body.innerHTML += `O seu nome tem:<strong> ${nome.length}</strong>letras<br />`
window.document.body.innerHTML += `A segunda letra do seu nome é:<strong>${nome.charAt(1)}</strong> <br />`
window.document.body.innerHTML += `Qual o primeiro índice da Letra "e "no seu nome?<strong>${nome.indexOf("e")} </strong><br />`
window.document.body.innerHTML += `Qual o último índice da LETRA "e" no seu nome?<strong>${nome.lastIndexOf("e")}</strong> <br />`
window.document.body.innerHTML += `As últimas 3 letras do seu nome são:<strong>${nome.slice(-3, nome.length)}</strong><br />`
window.document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br />`
window.document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()} </strong><br />`
window.document.body.innerHTML += `Seu nome com letras minúsculas:<strong> ${nome.toLowerCase()} </strong><br />`

