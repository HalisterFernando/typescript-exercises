// É possivel determinar que uma variável tenha mais de 1 tipo

function showBalance(balance: string | number) {
    console.log(`O Saldo na conta é, R$${balance}`)
}

showBalance(500); // Aceita parâmetros tipo number
showBalance('500'); // Aceita parâmetros tipo string

const arr: Array<number | string | boolean> = [1, 'teste', false]

// Validando union types 

function showUserRole(role: boolean | string) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado'
    }

    return ` A função do usuário é ${role}`
}

showUserRole(false);
showUserRole('Admin')
