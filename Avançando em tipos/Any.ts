// Evitar ao máximo usar 
// Dois casos de uso - quando o tipo de dado realmente não importa e arrays com dados de múltiplos tipos;

const arr1: any = [1, 'teste', true, [], {nome: 'Halister'}] // O array aceita qualquer tipo de valor

arr1.push([1, 2, 3])