const numeros = [1, 3, 4, 12, 7, 21, 8, 5, 10, 53, 88, 112];
let pares = [];

for (let numero of numeros){
    if (numero % 2 === 0){
        pares.push(numero); // coloca o numero dentro do array 
    }
}
console.log(pares);

//soma dos pares

let somaDosPares = 0;
for (let numero1 of numeros){
    if (numero1 % 2 === 0){
        somaDosPares += numero1;
    }
}
console.log(somaDosPares)