/**Operação Ternario */
// (condição) ? 'valor para verdadeiro' : 'valor para falso'
const pontuacaoUsuario = 105
const nivelUsuario = pontuacaoUsuario >= 100 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)
// if(potuacaoUsuario >= 1000){
//     console.log('Usuario Vip')
// }else{
//     console.log('Usuário normal')
// }