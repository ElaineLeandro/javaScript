/**
 * Entre 0 - 11 - bom dia
 * Entre 12 - 17 - boa noite
 * Entre 18 - 23 - Boa noite
 */

/**
 * If pode ser usado sozinho
 * Sempre que utilizo a palavra else, preciso de um if antes
 * Possor ter vários else ifs na checagem
 * Só posso ter um else na checagem
 */
const hora = 25;

if(hora >=0 && hora <= 11){
    console.log("Bom dia!")
}else if(hora >= 12 && hora<= 17){
    console.log('Boa tarrde!')
}else if(hora >= 18 && hora <= 23){
    console.log('Boa noite!')
}else{
    'Olá'
}