// Precisamos determinar todos os tipos a serem destruturados

function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$:${price}`
}

const shirt = {name: 'tee', price: 49.99 }

console.log(showProductDetails(shirt));
showProductDetails([1,2, 3]) // tipo incorreto passado no parâmetro
showProductDetails({sureName: 'teste', age: 40})  // tipo incorreto passado no parâmetro