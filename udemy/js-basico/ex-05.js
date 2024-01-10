

const nome = 'Bento'
const sobrenome = 'Rodrigues'
const idade = 38
const peso = 84
const alturaEmM = 1.8
const resultado = `${nome} ${sobrenome} - Peso:${peso} kg`
let indiceMassaCorporal = peso /(alturaEmM * alturaEmM)
let resultadoImc = indiceMassaCorporal
let anoDeNascimento = 2023 - idade

 
// console.log(nome +' ' + sobrenome + 'tem' + idade +'anos, pesa' + peso + 'kg')
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal} `)
console.log(`${nome} nasceu em, ${anoDeNascimento}.`)

