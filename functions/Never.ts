// Semelhante ao void
// Usado quando a função não retorna NADA 
// Exemplo retorno de erros

function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

showErrorMessage('Deu ruim');