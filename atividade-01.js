// criar array
const paises = ['Brasil', 'Portugal', 'Japao', 'Suecia', 'Inglaterra'];
console.log(paises);
//remover do fim da lista
paises.pop();
console.log(paises);
//adicionar ao inicio
paises.unshift('Alemanha');
console.log(paises);
//remover do inicio da lista
paises.shift();
console.log(paises);
//imprimir o ultimo da lista
const ultimo = paises[paises.length -1];
console.log(ultimo);
//imprimir o segundo
console.log(paises[1]);
//imprimir o indice 2
console.log(paises[2]);

console.log(paises.indexOf('Brasil'));

