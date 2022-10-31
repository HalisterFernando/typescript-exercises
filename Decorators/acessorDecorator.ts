// Semelhante so decorator de médoto;
// porém este serve apenas para getters e setters
// Podemos alterar a execução de um set ou get
import { enumerable } from "./decoratorDeMetodo"


class Monster {
    constructor(public name?: string, public age?: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return console.log(this.name)
    }

    @enumerable(true)
    get showAge() {
        return console.log(this.age)
    }
} 

const charmander = new Monster('Charmander', 10)

console.log(charmander)