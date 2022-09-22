// É um recurso que permite colocar calores como tipos
// Isso restringe o uso não só a tipos, como também os próprios valores
// Muito utilizado em union types

let test: 'testando'

test = 'testando'

// Ao tipar a variável com um valor, você determina que ela só poderá receber aquele valor

function showDirection(direction: "left" | "right") {
    console.log(`O usuário vai para ${direction}`)
}

showDirection("right");

// a função só irá aceitar os valores definitos na tipagem do direction, left ou right