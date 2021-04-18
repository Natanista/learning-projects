function log(message) {
    console.log(message);
}
var message1 = 'Hello World';
log(message1);
var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //  console.log('Finaly: ' + i); return error
}
doSomething();
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, true, 'a'];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var messagem;
messagem = 'abc';
var endsWithC = messagem.endsWith('c');
var alternativeWay = messagem.endsWith('c');
//arrow function
var logger = function (mensagem) {
    console.log(mensagem);
};
var doLog = function (mensagem) { return console.log(mensagem); };
//Interface
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('Y: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 20;
point.draw();
