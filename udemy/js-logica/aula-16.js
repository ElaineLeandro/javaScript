/** Tratamento e lançamendo erros (try, catch, throw) */

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw ReferenceError("x e y precisam ser números...");
  }
  return x + y;
}
try {
  console.log(soma(1, 2));
  console.log(soma(1, "2"));
} catch (error) {
//   console.log(error);
  console.log('Front-and erro lançamos alguma coisa amigável para o usuário');
}
