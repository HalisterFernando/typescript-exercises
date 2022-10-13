// Podemos criar tipos com template literals;
// É uma forma de customizar tipos de maneiras infinitas
// O texto formado pode depender de variáveis

type testA = 'text';

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'

type a1 = 'testando';
type a2 = 'union';
type a3 = `${a1}` | `${a2}`
