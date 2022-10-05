// Utilizamos quando não sabemos o nome das chaves, mas já sabemos quais os tipos de um objeto ou array;
// Isso restringe a tipos que não devem ser utilizados
// Uma barreira de segurança a mais na nossa variável
// Vamos ver na prática

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

// é possível adicionar mais propriedades ao objeto desde que elas estejam de a cordo com o que foi definido na interface
coords.y = 15

console.log(coords);