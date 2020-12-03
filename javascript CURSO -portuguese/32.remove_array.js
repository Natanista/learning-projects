const numeros = [1,2,3,4,5,6];
console.log(numeros);
//tirar do final
const ultimo = numeros.pop();
console.log(ultimo);

//inicio
const primeiro = numeros.shift();
console.log(primeiro);

//meio
const meio = numeros.splice(2,1);
console.log(meio);
