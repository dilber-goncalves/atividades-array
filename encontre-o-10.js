const numeros = [54, 22, 14, 1, 1, 87, 284];
let resposta = -1;
let possui = false;

for (let i = 0; i < numeros.length; i++){
    let numero = numeros[i];
    if (numero === 10) {
        resposta = i;
        possui = true;
        break;
    }
}
if (possui){
    console.log(`O 10 está na posição ${resposta} do array`);
}else{
    console.log(`O array não possui o numero 10`);
}