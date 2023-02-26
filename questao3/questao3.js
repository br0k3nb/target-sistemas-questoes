const faturamentM = require('./faturamentoM.json');
const valores = [];
let soma = 0;
let dias = 0;

for(const [_, valor] of Object.entries(faturamentM)) {
    valores.push(valor);
    if(valor !== 0) soma += valor;
}

valores.forEach(valor => {
    const media = soma / 22; // subtraindo os dias com 0
    if(valor > media) dias++;
});

if(dias) console.log(`dias que tiveram um faturamento maior que a média mensal: ${dias}`);

console.log(`O maior faturamento foi de: R$ ${Math.max(...valores)}`);
console.log(`O menor faturamento foi de: R$ ${Math.min(...valores)}`);