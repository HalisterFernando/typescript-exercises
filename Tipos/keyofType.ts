// Podemos criar um novo tipo usando keyof type
// Ele aceita dados do tipo objeto, como object literals e arrays;
// Pode criar tipo baseado nas chaves de objeto passado como parâmetro

type Character = { name: string, age: number, hasDriverLicense: boolean};

type C = keyof Character

function showCharName(obj: Character, key: C): string {
    return `${obj[key]}`
}

const myChar: Character = {
    name: 'Halister',
    age: 32,
    hasDriverLicense: true
}

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'hasDriverLicense'));
