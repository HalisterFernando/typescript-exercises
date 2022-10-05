// Utilizamos Extending Types como uma herança para criar tipos mais complexos por meio de uma interface
// Uma interface herda propriedades e tipos definidos de outra interface
// Usamos a intrução extends

interface Human {
    name: string
    age: number
}

// Evitamos repetir codigo ao extender uma interface
interface SuperHuman extends Human {
    superpowers: string[]
}

const halister: Human = {
    name: 'Halister',
    age: 32
}

const goku: SuperHuman = {
    name: 'Goku',
    age: 50,
    superpowers: ['kamehameha', 'genki dama']
}

console.log(halister);
console.log(goku)