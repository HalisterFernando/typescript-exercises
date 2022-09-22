// Verifica se um dado é uma instancia de uma classe

class User {
    constructor(public name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const john = new User('John');
const paul = new SuperUser('Paul');

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        return console.log(`Olá ${user.name} deseja ver os dados do sistema?`)
    }
    if (user instanceof User) {
        return console.log(`Olá ${user.name}`)
    }
}

// Dependendo de qual classe o objeto foi instanciado a função tem um retorno diferente

userGreeting(john);
userGreeting(paul)