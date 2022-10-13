// Para gerar uma herança utilizamos a palavra reservada extends
// Depois vamos precisar passar as propriedades da classe pai para ela
// Isso será feito com a função super

class Machine {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine('Trator');

class KillerMachine extends Machine {
    guns: number

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine('destroyer', 5);

console.log(trator);
console.log(destroyer);
