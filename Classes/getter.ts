// Método para ler propriedades
// É possível alterar o valor antes de retornar a informação ao usuário

class Person {
    name: string
    surename: string
    
    constructor(name: string, surename: string) {
        this.name = name 
        this.surename = surename
    }

    get fullName() {
        return `${this.name} ${this.surename}`
    }
}

const derp = new Person('Derp', 'Derpson');

// não utilizamos () para chamar um getter
console.log(derp.fullName)