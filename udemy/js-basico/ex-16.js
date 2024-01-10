// function meuEscopo() {
//     const formulario = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');

//     const pessoas = []

//     function recebeEventoForm(evento) {
//         evento.preventDefault()

//         const nomeInput = formulario.querySelector('.nomeN');
//         const sobrenomeInput = formulario.querySelector('.sobrenome');
//         const pesoInput = formulario.querySelector('.peso');
//         const alturaInput = formulario.querySelector('.altura');

//         const nome = nomeInput.value;
//         const sobrenome = sobrenomeInput.value;
//         const peso = pesoInput.value;
//         const altura = alturaInput.value;

//         const criaPessoa = {
//             nome: nome,
//             sobrenome: sobrenome,
//             peso: peso,
//             altura: altura
//         }

//         pessoas.push(criaPessoa);

//         resultado.innerHTML = ''; // Limpar o resultado anterior

//         for (const pessoa of pessoas) {
//             resultado.innerHTML += `
//                 Nome: ${pessoa.nome} <br>
//                 Sobrenome: ${pessoa.sobrenome} <br>
//                 Peso: ${pessoa.peso} <br>
//                 Altura: ${pessoa.altura} <br>
//                 <br>
//             `;
//         }

//         // Limpar os campos do formulário após a submissão
//         nomeInput.value = '';
//         sobrenomeInput.value = '';
//         pesoInput.value = '';
//         alturaInput.value = '';
//     }

//     formulario.addEventListener('submit', recebeEventoForm);
// }

// meuEscopo();

//Resolução do professor....
function meuEscopo() {
    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []

    function recebeEventoForm(evento) {
        evento.preventDefault()

        const nomeInput = formulario.querySelector('.nomeN');
        const sobrenomeInput = formulario.querySelector('.sobrenome');
        const pesoInput = formulario.querySelector('.peso');
        const alturaInput = formulario.querySelector('.altura');


        pessoas.push({
            nome: nomeInput.value,
            sobrenome: sobrenomeInput.value,
            peso:pesoInput.value,
            altura:alturaInput.value
        });

        resultado.innerHTML += `<p>${nomeInput.value} ${sobrenomeInput.value}</p>` + `${pesoInput.value} <br/>${alturaInput.value}` 

    }
    formulario.addEventListener('submit', recebeEventoForm);
}

meuEscopo();