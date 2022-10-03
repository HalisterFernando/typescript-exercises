//Definir o tipo de dado com a sintaxe rest
function sumAll(...n: number[]) {
    return n.reduce((acc, curr) => curr + acc);
}

console.log(console.log(sumAll(1,2,3,4,5)));