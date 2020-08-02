import { Point } from './point';

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
    interface Point {
        x: number,
        y: number,
        draw: () => void
    }

    let drawPoint3 = (point: Point) => { }
}

// Class object
{
    // create a class object
    class Point {
        x: number;
        y: number;

        draw() {
            console.log('X: ' + this.x + ', Y : ' + this.y);
        }

        getDistance(anotherPoint: Point) {
            // ...
        }
    }

    let point = new Point();
    point.x = 1;
    point.y = 2;
    point.draw();
}

// Constructor
{
    class Point {
        x: number;
        y: number;

        // In typescript we can not have multiple constructors
        // x: number => x?: number make x a optional parameter
        // Rule: if set normal parameter to optional parameter, we have to declare all the parameters on it's right parameters optional
        constructor(x?: number, y?: number) {
            this.x = x;
            this.y = y;
        }

        draw() {
            console.log('X: ' + this.x + ', Y : ' + this.y);
        }
    }

    let point = new Point();
    point.draw();
}


// Access modifier: public, private, protected
{
    class ConcreatePointA {
        private x: number;
        private y: number;

        // In typescript we can not have multiple constructors
        // x: number => x?: number make x a optional parameter
        // Rule: if set normal parameter to optional parameter, we have to declare all the parameters on it's right parameters optional
        constructor(x?: number, y?: number) {
            this.x = x;
            this.y = y;
        }

        draw() {
            console.log('X: ' + this.x + ', Y : ' + this.y);
        }
    }

    let point = new ConcreatePointA();
    point.draw();


    class ConcreatePointB {
        // In typescript we can not have multiple constructors
        // x: number => x?: number make x a optional parameter
        // Rule: if set normal parameter to optional parameter, we have to declare all the parameters on it's right parameters optional
        constructor(private x?: number, private y?: number) {
        }

        draw() {
            console.log('X: ' + this.x + ', Y : ' + this.y);
        }
    }
}


// Properties
{
    class ConcreatePoint {
        // In typescript we can not have multiple constructors
        // x: number => x?: number make x a optional parameter
        // Rule: if set normal parameter to optional parameter, we have to declare all the parameters on it's right parameters optional
        constructor(private _x?: number, private _y?: number) {
        }

        draw() {
            console.log('X: ' + this._x + ', Y : ' + this._y);
        }

        // Setter method
        get x() {
            return this._x;
        }

        // Getter method
        set x(value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');

            this._x = value;
        }
    }

    let point = new ConcreatePoint(1, 2);
    let x = point.x;
    point.x = 10;
}

// Properties
{
    class ConcreatePoint {
        constructor(private _x?: number, private _y?: number) {
        }

        draw() {
            console.log('X: ' + this._x + ', Y : ' + this._y);
        }
    }

    let point = new ConcreatePoint(1, 2);
    point.draw();
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