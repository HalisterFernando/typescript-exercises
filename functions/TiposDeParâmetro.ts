// Em generic functions temos que utiliza parâmetros de tipos semelhantes
// se não receberemos um erro
// Porém há a possibilidade de determinado o tipo também dos parâmetros aceitos com uma sintaxe especial
// Assim a validação do TS só aceita os tipos escolhidos

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [5,6]))
// definimos os tipos no generics para pode usar mais de um tipo no argumento
console.log(mergeArrays<number | string>([1,2,3], ['teste', 'testando']))