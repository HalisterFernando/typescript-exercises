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

function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id: number
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id: number
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook.createdAt)
console.log(newPen.createdAt)