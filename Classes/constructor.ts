// É uma função que nos da possibilidade de iniciar um objeto com valores nos campos;
// Isso faz com que não seja necessário usar "!"
// Provavelmente todos os campos serão preenchidos na hora de instanciar um objeto;

class NewUser {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const halister = new NewUser('Halister', 32);

console.log(halister)