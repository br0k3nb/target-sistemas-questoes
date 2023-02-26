const stringNormal = 'normal';
let stringInvertida = '';

for (let counter = stringNormal.length - 1; counter >= 0; counter--) {
    stringInvertida += stringNormal[counter];
}

console.log(stringInvertida);