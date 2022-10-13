// São como funções da classe
// Podemos criá-los junto das classes e os objetos podem utiliza-los
// É uma maneira de adicionar funcionalidades as classes

class Dwarf {
    name: string
    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log('Hey stranger!')
    }
}

const jimmy = new Dwarf('Jimmy')

jimmy.greeting()