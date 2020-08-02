// Types
{
    let testing = 1;
    // Example of unsetting variable type
    let unknownType;
    unknownType = 1;
    unknownType = true;
    unknownType = 'a';
    // Example of setting variable type
    let numberType;
    let booleanType;
    let stringType;
    let anyType;
    anyType = 1;
    anyType = true;
    let numberArr = [1, 2, 5];
    let anyArr = [true, 1, 'a'];
    // Constant
    const COLORRED = 0;
    const COLORGREEN = 1;
    const COLORBLUE = 2;
    // Enum
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 1] = "Blue";
        Color[Color["Green"] = 2] = "Green";
    })(Color || (Color = {}));
    ;
    let bgColor = Color.Red;
}
// Assertion type
{
    let message;
    message = 'abc';
    let endsWithC = message.endsWith('c');
    let alternativeWay = message.endsWith('c');
}
// Arrow function
{
    let log = function (message) {
        console.log(message);
    };
    let doLog1 = (message) => { console.log(message); };
    let doLog2 = message => console.log(message);
    let returningOne = () => { return 1; };
}
// Interfaces
{
    let drawPoint1 = (x, y) => { };
    let drawPoint2 = (point) => { }; // Inline annotation
    let drawPoint3 = (point) => { };
}
// Cohension
{
}
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
}
doSomething();
function log(message) {
    console.log(message);
}
var message = "Hello world";
log(message);
