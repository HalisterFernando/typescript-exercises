// Utilizamos generics quando uma função pode aceitar mais de um tipo
function showData<T>(arg: T): string {
    return `O dado é ${arg}`
}

console.log(showData(5));
console.log(showData('testando generics'))