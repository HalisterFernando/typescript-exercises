// Podemos substituir o union type por type alias a fim de deixar o código mais exugado

type ID = string | number;

// o parâmetro da função recebe o tipo ID que pode ser uma string ou number
function showId(id: ID) {
    console.log(`O ID é ${id}`)
}

showId(1);
showId('2');