// podemos tipar cada parâmetro da função

// Ao tipar os parâmetros, só serão aceitas variáveis do mesmo tipo ao chamar a função

function sum(a: number, b: number) {
    console.log(a + b)
}

sum(10, 15)

// Podemos também tipar o retorno da função
// Só será aceito o retorno do tipo string

function greeting(name: string): string {
    return `Olá ${name}`
}

greeting('Halister')

// O typescript também ajuda com funções anônimas validando o código digitado

setTimeout(function() {
    const sallary: number = 1000
    console.log(parseFloat(sallary)) // Ele avisa que o método parseFloat não funciona em tipo number
}, 4000)