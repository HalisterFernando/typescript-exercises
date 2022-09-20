// Cria uma referência única para um valor;
// Ou seja, mesmo que ele possua o mesmo valor de outra variável, teremos valores sendo considerados diferentes
// ES2020


let symbolA: symbol = Symbol('a');
let symbolB: symbol = Symbol('b');

console.log(symbolA == symbolB); // false
console.log(symbolB === symbolA) // false