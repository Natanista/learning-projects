/* Functions
1. Create a fuction
2. Call the function
*/
// creating
function fun() {
  console.log("This is a function");
}
// calling
fun();

/*function greeting(yourName) {
  var result = `Hello ${yourName}`;
  console.log(result);
}
var nome = prompt("What is your name?");
greeting(nome);
*/

// arguments
function sumNumbers(a, b) {
  var result = a + b;
  console.log(result);
}

// arguments go here
sumNumbers(10, 10);

//Strings
let fruit = 'banana';
let moreFruits = 'banana\napple' //new line

console.log(moreFruits)
console.log(`A fruta tem:${fruit.length} letras`);
console.log(`Tem an no nome da fruta?: ${fruit.indexOf('an')} `);
console.log(fruit.slice(2,9));//corta a palavra de x até x
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));


 
