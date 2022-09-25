// Podemos declarar parâmetros opcionais em uma função;

function modernGreeting(name: string, greet?: string) {

    if (greet) return `Olá ${name}, ${greet}`    

    return `Olá ${name}`
}

console.log(modernGreeting('Halister'));
console.log(modernGreeting('Pedro', 'Olá Doutor'));
