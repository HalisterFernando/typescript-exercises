// Recurso para definir a privacidade, nome e tipo no construtor
// resume a sintaxe

class ParameterProperties {
    constructor(public name: string, private _qty: number, private _price: number) {
        this.name = name
        this._qty = _qty
        this._price = _price
    }

    get price() {
        return `Preço total ${this._price}`
    }

    get qty() {
        return `Quantidade total ${this._qty}`
    }
}

