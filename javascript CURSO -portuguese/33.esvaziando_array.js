let numeros = [1,2,3,4,5,6];
let outros = numeros;
// solucao 1
//numeros = [];

//solucao 2
numeros.length = 0;
console.log(numeros);
console.log(outros);

//solucao 3
numeros.splice(0,numeros.length);
console.log(numeros);
console.log(outros);

