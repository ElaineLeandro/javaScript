const calcularDezena = (numero) => {
    if (numero < 1 || numero > 100) {
        return "O número fornecido está fora do intervalo de 1 a 100.";
    }
        const dezena = Math.floor(numero / 10);

    switch (dezena) {
        case 0:
            return "O número está na primeira dezena (1-10).";
        case 1:
            return "O número está na segunda dezena (11-20).";
        case 2:
            return "O número está na terceira dezena (21-30).";
        case 3:
            return "O número está na quarta dezena (31-40).";
        case 4:
            return "O número está na quinta dezena (41-50).";
        case 5:
            return "O número está na sexta dezena (51-60).";
        case 6:
            return "O número está na sétima dezena (61-70).";
        case 7:
            return "O número está na oitava dezena (71-80).";
        case 8:
            return "O número está na nona dezena (81-90).";
        case 9:
            return "O número está na décima dezena (91-100).";
        default:
            return "O número fornecido é inválido.";
    }
}

const numero = 50;
console.log(calcularDezena(numero));
