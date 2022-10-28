// É um recurso para criar uma classe anônima
// Podemos também utilizar generics junto deste recurso;
// Encapsular a classe em uma variável

const myClass = class<T> {
    name: T
    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass('Johnes')