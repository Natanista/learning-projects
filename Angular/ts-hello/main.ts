function log(message) {
    console.log(message);
}
var message1 = 'Hello World';
log(message1);

var number = 1;
let count = 2;

function doSomething(){
    for(let i =0; i < 5; i++){
        console.log(i);
    }

  //  console.log('Finaly: ' + i); return error
}

doSomething();


let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3,4];
let f: any[] = [1, true, 'a'];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color {Red = 0, Green = 1, Purple = 3};
let backgroundColor = Color.Red;

let messagem;
messagem = 'abc';
let endsWithC = (<String>messagem).endsWith('c');
let alternativeWay = (messagem as String).endsWith('c');

//arrow function
let logger = function(mensagem) {
    console.log(mensagem);
} 

let doLog = (mensagem) => console.log(mensagem);


//Interface
 class Point{

    constructor(private x?: number, private y?:number) {
    }

    draw() {
        console.log('Y: ' + this.x + ', Y: ' + this.y )
    }

    get X(){
        return this.x;
    }

    set X(value){
        if(value < 0)
            throw new Error('Value cannot be less than 0');
        
        this.x = value;
        
    }

}

let point = new Point(1,2);
let x = point.X;
point.X = 10;
point.draw();
