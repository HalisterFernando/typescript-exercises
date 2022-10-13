// Palavra reservada para nos referirmos ao objeto em si
// Conseguimos acessar as suas propriedades

class Truck {
    model: string
    hp: number
    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`O caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck('Volvo', 400);
volvo.showDetails()