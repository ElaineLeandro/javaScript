/**
 * Outro estilo é aprogramação orientada a objetos (OOP). Nesse estilo, agrupamos dados e funcionalidades como propriedades e métodos dentro de objetos.
 * 
 * Por exemplo, se eu tiver um objetovirtualPet, posso atribuir a ele uma propriedade sleepy e um métodonap():
 * 
 */

const virtualPet ={
    sleepy: true,
    nap: function(){}
}

console.log(virtualPet.sleepy) // false

/**
 * Na OOP, os métodosatualizam as propriedades armazenadas no objeto em vez de gerar novos valores de retorno.
 * Por exemplo, se eu verificar a propriedadesleepy no objetovirtualPet, posso confirmar que ela está definida comotrue.
 * Entretanto, depois que eu executar o métodonap() no objetovirtualPet, o valor da propriedadesleepy será alterado?
 */
