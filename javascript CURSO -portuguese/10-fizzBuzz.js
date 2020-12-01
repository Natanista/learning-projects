function fizzBuzz(a){
    if(a % 5 == 0 && a % 3 == 0){
        return "FizzBuzz!";
    }
    if(a % 5 == 0){
        return "Buzz!";
    }
    if(a % 3 == 0){
        return "Fizz";
    }
    if(typeof a !== 'number'){
        return "Não é um número!";
    }
    return a;
}

console.log(fizzBuzz("ok"))