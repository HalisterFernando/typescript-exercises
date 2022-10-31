// O decorator de classe está ligado ao constructor
// Ou seja, sempre que este for executado, teremos a execução do decorator
// Isso nos permite acrescenter algo a criação de classes;
// Vamos ver na prática!

function classDec(constructor: Function) {
    console.log(constructor.name)
    if (constructor.name === "User") {
        console.log('Criando usuário')
    }
}

@classDec
class User {
    constructor(public name: string) {
        this.name = name
    }
}

const halister = new User('halister')
console.log(halister)