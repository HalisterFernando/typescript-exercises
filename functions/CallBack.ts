// Inserir uma callback como argumento de uma função
// Nela conseguimos definir o tipo de argumento aceito pela callback;
// Assim como o tipo de retorno da mesma

function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log('Preparando a função');
    const greet = f(userName);
    console.log(greet);
}

preGreeting(greeting, 'Halister');