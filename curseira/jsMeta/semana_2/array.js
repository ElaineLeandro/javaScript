// const alimentos = [
//     {
//       nome: "Maçã",
//       cor: "Vermelha",
//       preço: 2.5,
//       tipo: "Fruta"
//     },
//     {
//       nome: "Espinafre",
//       cor: "Verde",
//       preço: 1.8,
//       tipo: "Verdura"
//     },
//     {
//       nome: "Cenoura",
//       cor: "Laranja",
//       preço: 1.0,
//       tipo: "Legume"
//     },
//     {
//       nome: "Banana",
//       cor: "Amarela",
//       preço: 1.2,
//       tipo: "Fruta"
//     }
//   ];
  
//   console.log(alimentos);

  const alimentos = [
    {
      nome: "Maçã",
      cor: "Vermelha",
      preço: 2.5,
      tipo: "Fruta"
    },
    {
      nome: "Espinafre",
      cor: "Verde",
      preço: 1.8,
      tipo: "Verdura"
    },
    {
      nome: "Cenoura",
      cor: "Laranja",
      preço: 1.0,
      tipo: "Legume"
    },
    {
      nome: "Banana",
      cor: "Amarela",
      preço: 1.2,
      tipo: "Fruta"
    }
  ];
  
  function exibirNomesFrutas(arrayDeAlimentos) {
    let index = 0;
    
    while (index < arrayDeAlimentos.length) {
      const alimento = arrayDeAlimentos[index];
  
      
      if (alimento.tipo === "Fruta") {
        console.log(alimento.nome);
      }
  
      index++;
    }
  }
  
  
  exibirNomesFrutas(alimentos);
  