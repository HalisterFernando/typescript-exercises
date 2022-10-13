// Com interfaces podemos criar tipos mais complexos

interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco'}
const myPen: Pen = {name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul'}