// Permite criar um novo tipo com base em if/else
// Não são aceitas expressões tão amplas 
// Usamos a sintaxe ternário

interface A {}
interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string;

const someVar: myType = 5
const someVar2: myType = 'teste' // como B extende de A, myType acaba sendo number e não string

type myTypeB = Teste extends {showNumber(): number} ? string : boolean;

