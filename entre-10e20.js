//guardar no novo array os numeros entre 10 e 20 e depois de 100
const original = [5, 7, 13, 17, 26, 34, 118, 245];
let novo = [];

for (let numero of original){
    if ((numero >= 10 && numero <= 20) || numero > 100){
        novo.push(numero);
    }
}
console.log (novo);