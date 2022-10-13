// Podemos iniciar um campo com o valor read-only
// O valor será disponível apenas para consulta

class Car {
    name: string
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car('fusca');

console.log(fusca);
fusca.name = 'fusca turbo';
console.log(fusca);

fusca.wheels = 5 // não é permitido mudar o nome da propriedade diretamente
