// Podemos criar classes com tipos genéricos
// As propriedades dos argumentos podem ter os tipos definidos na hora da criação da instancia
// Isso nos permite maior flexibilidade em uma classe

class Item<T, U> {
    first: T
    second: U

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst()  {
        return `O first é ${this.first}`
    }
}

const newItem = new Item('Caixa', 'surpresa');

console.log(newItem.first)