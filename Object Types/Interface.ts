// Simplificar os parâmetros do objeto de funções com interface;

interface Product {
    name: string
    price: number
    isAvailable: true
}

function showProdutDetails(product: Product) {
    console.log(`O nome do produto é ${product.name}, e seu preço é ${product.price}`)
    if (product.isAvailable) {
        console.log('O produto está disponível')
    }
}

// os objetos também podem ser tipados a fim de facilitar o código

const shirt: Product = {
    name: 'Tee',
    price: 19.99,
    isAvailable: true

}

showProdutDetails(shirt);