// Types
{
    let testing = 1;

    // Example of unsetting variable type
    let unknownType;
    unknownType = 1;
    unknownType = true;
    unknownType = 'a';
    // Example of setting variable type
    let numberType: number;
    let booleanType: boolean;
    let stringType: string;
    let anyType: any;
    anyType = 1;
    anyType = true;

    let numberArr: number[] = [1, 2, 5];
    let anyArr: any[] = [true, 1, 'a'];

    // Constant
    const COLORRED = 0;
    const COLORGREEN = 1;
    const COLORBLUE = 2;

    // Enum
    enum Color { Red = 0, Blue = 1, Green = 2 };
    let bgColor = Color.Red;
}


// Assertion type
{
    let message;
    message = 'abc';
    let endsWithC = (<String>message).endsWith('c');
    let alternativeWay = (message as String).endsWith('c');
}

// Arrow function
{
    let log = function (message) {
        console.log(message);
    }

    let doLog1 = (message) => { console.log(message); }
    let doLog2 = message => console.log(message);
    let returningOne = () => { return 1; }
}

// Interfaces
{
    let drawPoint1 = (x, y) => { };
    let drawPoint2 = (point: { x: number, y: number }) => { };// Inline annotation

    // We do not want to create this kind of declaration all time, so we create Interface
    interface Point{
        x: number,
        y: number
    }

    let drawPoint3 = (point: Point) => { }
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