const valorEstado = {
    sp: 6783643,
    rj: 3667866,
    mg: 2922988,
    es: 2716548,
    outros: 1984953
};

const {sp, rj, mg, es, outros} = valorEstado;

let valorTotal = 0;

for(const [_, valor] of Object.entries(valorEstado)) {
   valorTotal += valor;
}

console.log(`A porcentagem do estado de São paulo foi de: ${((sp * 100) / valorTotal).toFixed(2)} %`);
console.log(`A porcentagem do estado do Rio de Janeiro foi de: ${((rj * 100) / valorTotal).toFixed(2)} %`);
console.log(`A porcentagem do estado de Minas Gerais foi de: ${((mg * 100) / valorTotal).toFixed(2)} %`);
console.log(`A porcentagem do estado do Espírito Santo foi de: ${((es * 100) / valorTotal).toFixed(2)} %`);
console.log(`A porcentagem do estado dos outros estados foi de: ${((outros * 100) / valorTotal).toFixed(2)} %`);