// Podemos modificar a execução dos métodos
// Inserimos o decorator antes da declaração do método
// Ele é executado antes do método

function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value

    }
}

class Machine {
    constructor(public name: string) {
        this.name = name
    }
    
    @enumerable(false) // deixa o método invisível na classe
    showName() {
       console.log(this.name)
    }
}



const trator = new Machine('Trator');