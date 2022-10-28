// Podemos criar um objeto com base em outra classe;
// Quando as classes são idênticas o TS não reclama sobre esta ação
// Precisamos que as duas sejam exatamente iguais

class Dog {
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()