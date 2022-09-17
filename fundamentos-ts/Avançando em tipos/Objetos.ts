// Caso uma função receba um objeto como parâmetro, devemos tipar o valor das chaves

function passCoordinates(coord: {x: number, y: number}) {
    console.log(`Coordinates: ${x}, ${y}`);
}

const objCoord = {x: 329, y: 84.2};

passCoordinates(objCoord)
// Só serão aceitos objetos que correspondam chave e valor tipados no parâmetro
passCoordinates({nome: 'Halister', sobrenome: 'Santos'})

// Propriedades opcionais;
// Usamos ? ao lado do nome da propriedade que queremos deixar como opcional

function showNumbers(a: number, b: number, c?: number) {
    console.log(a)
    console.log(b)
    if (c) {

        console.log(a)
    }
}

showNumbers(1, 2, 3); // Com parâmetro opcional
showNumbers(1, 2); // Sem parâmetro opcional
showNumbers(1); // A função deve conter até dois parâmetros obrigatórios