const primeiro = [1,2,3,4,5];
const segundo = [6,7,8,9];

//const combinado = primeiro.concat(segundo);
const combinado =[...primeiro,...segundo];
console.log(combinado);

//dividir
const cortado = combinado.slice();
console.log(cortado);

const clonado = [...combinado];
console.log(clonado);

//spread
