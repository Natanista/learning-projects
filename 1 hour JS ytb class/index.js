 // This is my first js code
//console.log('Hello World');

//let name = 'Natan'; // STring Literal
//let age = 21; //Number Literal
//let isApproved = true;// Bolean Literal
//let firstName = undefined;
//let selectedColor = null;


//console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number(1name)
// Cannot contain a space or hypen
//Are case-sensitive


// const interestRate = 0.3; if u don't wanna change in the future use cons
// interestRate = 1;
//console.log(interestRate);

//Primitives: String, Number, Boolean, undefined, null


let person = {
    name: 'Natan',
    age: 21,
};

// Dot Notation
person.name = 'Neitan'

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);


// Performing a task
function greet(name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName);
}

greet('Natan','Silva');

// Calculatiing a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);







