//Propriedades readonly podem ser alteradas apenas uma vez na criação do novo dado
// é uma forma de criar um valor constante em um objeto
// Podemos adicionar as interfaces

interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: 'vw',
    wheels: 4
}

fusca.wheels = 5 // equivalente a um const, a propriedade não pode ser reatribuida a outro valor