// Podemos modificar a execução dos métodos
// Inserimos o decorator antes da declaração do método
// Ele é executado antes do método

export function enumerable(value: boolean) {
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

function checkIfUserPosted() {
    return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function(...args: any[]) {
            if (args[1]) {
                console.log('Usuário já postou')
            } else {
                return childFunction.apply(this, args)
            }
        }
        return descriptor
    }
}

class Post {
    alreadyPosted = false
    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuário ${content}`)
    }
}

const newPost = new Post()

newPost.post('Meu primeiro post', newPost.alreadyPosted)
newPost.post('Meu primeiro post', newPost.alreadyPosted)