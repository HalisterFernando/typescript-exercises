// É utilizado nas propriedades de uma classe
// Ou seja, na hora da definição da mesma podemos ativar uma função.
// Isso nos ajuda a modificar ou validar algum valor

function formatNumber() {
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        }) 
    }
}

class ID {
    @formatNumber()
    id: string
    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID("1")
console.log(newItem.id)

function Max(limit: number) {
    return function(target: Object, propertyKey: string) {
        let value: string 

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no méximo ${limit}`)
            } else {
                value = newVal
            }
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class Admin {
    @Max(10)
    username: string
    constructor(username: string) {
        this.username = username;
    }
}

const pedro = new Admin('pedroAdmin123')
const lee = new Admin('Lee')
console.log(pedro)
console.log(lee)