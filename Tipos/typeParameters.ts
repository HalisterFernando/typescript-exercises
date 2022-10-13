//Utilizado para dizer que algum parâmetro de uma função é a chave de um objeto que também é um parâmetro
// Dessa forma conseguimos criar uma ligação entre o tipo genérico e sua chave

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))