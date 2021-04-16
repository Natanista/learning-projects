function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
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
