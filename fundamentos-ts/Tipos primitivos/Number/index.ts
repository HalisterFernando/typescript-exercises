// Garante que o dado seja apenas número

let x: number = 10; // tipagem vem logo após ao nome da variável após o :

x = 'teste' // uma vez definido o tipo da variável, o TS não aceita que o tipo dela seja outro
x = 16 // variável redeclarada com o mesmo tipo

const y: number = 15.5 // números float também são do tipo number

