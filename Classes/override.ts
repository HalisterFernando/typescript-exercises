// Usado para substituir um método de uma classe que herdamos algo
// criar o mesmo méodo com o mesmo nome

class Base {
    someMethod() {
        console.log("alguma coisa")
    }
}

class Nova extends Base {
    someMethod(): void {
        console.log("testando outra coisa")
    }
}

const myObj = new Nova()

myObj.someMethod()
