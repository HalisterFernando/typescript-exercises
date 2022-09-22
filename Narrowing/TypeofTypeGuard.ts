// É uma validação do tipo typeof
// Comparar retorno do operador com um possível tipo 
// Identifica um tipo para tratar e ter um retorno correto


type param = string | number

function sum(a: param, b: param) {
    if (typeof a === 'string' && typeof b === 'string') {
        return parseFloat(a) + parseFloat(b)
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }

    return 'Não é possível realizar esta operação'
}

