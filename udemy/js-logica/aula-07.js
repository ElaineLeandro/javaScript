/**Switch/Case */

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto
        case 2:
             diaSemanaTexto = 'Terça-feira'
             return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto
        default:
            diaSemanaTexto = "Morri"
    }

}

const data = new Date('1985-07-26 20:00:00')
const diaSemana = data.getDay();

const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
// diaSemana= 7
// let diaSemanaTexto;

// switch(diaSemana){
//     case 0:
//         diaSemanaTexto = 'Domingo'
//         break
//     case 1:
//         diaSemanaTexto = 'Segunda'
//         break
//     case 2:
//          diaSemanaTexto = 'Terça-feira'
//         break
//     case 3:
//         diaSemanaTexto = 'Quarta-feira'
//         break
//     case 4:
//         diaSemanaTexto = 'Quinta-feira'
//         break
//     case 5:
//         diaSemanaTexto = 'Sexta-feira'
//         break
//     case 6:
//         diaSemanaTexto = 'Sábado'
//         break
//     default:
//         diaSemanaTexto = "Morri"
// }

// if(diaSemana === 0){
//     diaSemanaTexto = 'Domingo'
// }else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda'
// }else if (diaSemana === 2){
//     diaSemanaTexto = 'Terça-feira'
// }else if (diaSemana === 3){
//     diaSemanaTexto = 'Quarta-feira'
// }else if(diaSemana === 4){
//     diaSemanaTexto = 'Quinta-feira'
// }else if(diaSemana === 5){
//     diaSemanaTexto = 'Sexta-feira'
// }else if(diaSemana === 6){
//     diaSemanaTexto = 'Sábado'
// }else{
//     diaSemanaTexto = '';
// }


console.log(diaSemana, diaSemanaTexto)