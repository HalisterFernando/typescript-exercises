// Pode servir como molde para outra classe
// Todos os métodos dela devem ser implementados nas classes que herdam
// Não podemos instanciar objetos a partir das classes

abstract class  AbstractClass {
    abstract showName(): void 
}

class AbstractExamples extends AbstractClass {
    constructor(public name: string) {
        super()
        this.name = name
    }

    showName(): void {
        console.log(`O nome é ${this.name}`)
    }
}

const newAbstractObject = new AbstractExamples('Jão')