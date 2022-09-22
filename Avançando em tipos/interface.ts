// Podemos usar interfaces para definir tipos a fim de enxugar o código

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`x ${obj.x}, y ${obj.y}, z ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// Ao contratio do type alias, a interface pode ser alterada ao longo do código

interface Person {
    name: string
}

interface Person {
    age: number
}

// ambas as declarações acima implementam propriedades na mesma interface person

const somePerson: Person = {
    name: 'Halister',
    age: 32
}

type personType = {
    name: string
}

type personType = {
    age: number
}

// o type age como uma constante, por isso é como se estivessemos tentando redeclarar a variável com mesmo nome

