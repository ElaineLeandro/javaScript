/** Tratamento e lançamendo erros (try, catch, finally) */

// try{
//     // console.log(a)
//     console.log('Abrir um arquivo')
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log('Fechei o arquivo')

//     try{
//         console.log(b)
//     }catch(e){
//         console.log('Deu erro')
//     }finally{
//         console.log('Finally:Tambem eu sempre sou executado')
//     }
// }catch(e){
//     console.log('Tratando o erro')
// }finally{
//     console.log('Finally:Eu sempre sou executado')
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância e Date.')
    }

    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
}catch(e){
    //tratar o erro
    // console.log(e)
}finally{
    console.log('Tenha boa tarde')
}

