let numInformado = 13;

let soma = 0;
let anterior = 0;
let proximo = 1;
let resultado = [0,1]; // começando com 0,1

for (let counter = 1; counter < numInformado; counter++) {
    soma = anterior + proximo;
    anterior = proximo;
    proximo = soma;
    resultado.push(soma);
}

if(resultado.find(val => val === numInformado)) console.log("O número informado pertence a sequência!");
else console.log("O número informado NÃO pertence a sequência!")

console.log(resultado);