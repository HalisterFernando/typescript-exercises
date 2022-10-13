// Ajuda a limitar os tipos aceitos 
// Filtra os tipos aceitos em generics

function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const myObj = {name: 'Porta', color: 'Branca'}
const otherObj = {name: 'Carro', wheels: 4}
const thirdObj = {price: 19.99}
 

console.log(showProductName(myObj))
console.log(showProductName(otherObj))
// Não aceita objeto pois não possui propriedade definida no generics
console.log(showProductName(thirdObj))

