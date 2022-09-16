const firstName = 'Halister';
const anotherName = 1;
const x = true; 

function greeting(name: string) {
    console.log('Olá' + name)
}

greeting(firstName)

// O TypeScript verifica a definição do tipo do parâmetro name que é uma string
// Sendo assim ele não irá compilar caso o parâmetro passado para a função greeting não seja uma string