const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesComA = [];

for (let nome of nomes){
    const inicial = nome[0];

    if(inicial === "A" || inicial === "a"){
        nomesComA.push(nome);
    }
}
console.log(nomesComA);