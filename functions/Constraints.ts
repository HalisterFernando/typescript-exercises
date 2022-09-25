// Reduz o escopo das generic functions por constraints;
// Limita os tipos que podem ser utilizados no Generic;

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a;
    } else {
        biggest = b;
    }

    return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
// console.log(biggestNumber(5, '3')); // Como usamos apenas um tipo, ele estente que ambos argumentos precisam ser number ou string;



