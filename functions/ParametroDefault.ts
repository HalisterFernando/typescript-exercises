// Deixa um valor padrão no parâmetro, onde se ele não for preenchido usará o valor setado;

function somaDefault(n: number, m = 10) {
    return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(10, 10));
