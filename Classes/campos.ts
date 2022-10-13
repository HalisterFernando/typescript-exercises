// Em ts podemos aficionas novos campos a uma classe, iniciar uma classe com campos para os futuros dados dos objetos
// Que serão as propriedades dos objetos instanciados
// Estes campos podem ser tipados
// Um campo sem valor inicial deve ser declarado com "!"

class User {
    name!: string
    age!: number
}

const jão = new User()

console.log(jão)