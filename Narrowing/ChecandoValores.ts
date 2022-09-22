// Verificando se valor existe 

function operations(arr: number[], operation?: string | undefined) {
    if (!operation) return console.log('Por favor defina uma operação');
    if (operation === 'sum') return console.log(arr.reduce((acc, curr) => acc + curr));
    if (operation === 'multiply') return console.log(arr.reduce((acc, curr) => acc + curr));    
}

operations([1,2,3])
operations([1,2,3], 'sum');
operations([1,2,3], 'multiply')