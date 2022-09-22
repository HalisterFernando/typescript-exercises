// Usado para checar se uma propriedade existe no objeto
// Propriedades podem ser opcionais

class Dog {
    name
    breed
    constructor(name: string, breed?: string) {
        this.name = name;
        if (breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');

function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
        return console.log(`O cachorro é da raça ${dog.breed}`)
    }
    return console.log(`O cachorro é um SRD`);
}

showDogDetails(turca);
showDogDetails(bob);