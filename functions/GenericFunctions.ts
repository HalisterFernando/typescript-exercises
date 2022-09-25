//Tipo de retorno é relacionado ao tipo do argumento;
// Um item de um array pode ser string, boolean ou number;
// Letras T ou U são usadas para definir generics;

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: 'Halister'}, {age: 30, job: 'web-dev'})

console.log(newObject)