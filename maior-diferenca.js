const numeros = [8, 11, 4, 1];
let maior = -1;
let menor = 99999999999999;

//maior
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maior){
        maior = numeros[i];
    }
}
//menor
for (i = 0; i < numeros.length; i++){
    if (numeros[i] < menor){
        menor = numeros[i];
    }
}
//resultado 10
let resultado = maior - menor;
console.log(`A maior diferença entre o maior (${maior}) e o menor (${menor}) é ${resultado}.`);