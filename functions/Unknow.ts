// Usado de forma semelhante ao any
// Ele aceita qualquer tipo de dado
// Ele não deixa algo ser executado se não houver validação de tipo
// Ele adiciona uma trava de segurança

// Precisamos verificar o tipo para realizar uma operação;

function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === 'number') {
        console.log('x é um número')
    }
}

doSomething([1,2,3]) 
doSomething(5)