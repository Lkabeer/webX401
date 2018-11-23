TypeScript X-Team

Lesson 1 
	What is TypeScript
- Strong typing
- Object-Oriented features
- Compile-time errors
 
- TypeScript > Transpile to  > JavaScript

Lesson 2
$ npm i -g typescript
$ tsc —version 

$ code main.ts
$  tsc main.ts 

- All JavaScript code is also valid TypeScript Code 

$ node  main.js

Lesson 3
	JavaScript Versions 
- ES5: Supported by all browsers
- ES6
- var vs let variables 

$ tsc main.ts && node main.js

Lesson 4
	Data Types
- let a: number;

Lesson 5
	Type Assertions
- let messageX;
- (<string>messageX)
- (messageX as string) 

Lesson 6
	Arrow Functions
- let doSome = () => { }

Lesson 7
	Interfaces
- interface Point {
	x: number,
	y: number
}

Lesson 8
	Classes
- class Point {
	x: number;
	y: number;
	draw() { 
		console.log('X: ' + this.x + ', Y: ' + this.y);
	}
	getDistance(another: Point) { }
}

Lesson 9
	Objects
- let point = new Point();

	point.x = 1;
	point.y = 2;
	point.draw();

Lesson 10
	Constructors
-     constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

Lesson 11
	Access Modifiers
- public
- private
- protected

- private x: number

Lesson 12
	Access Modifiers constructor
- constructor(private x?:number, private y: number) { }

Lesson 13
	Properties
- constructor(private _x?:number, private _y: number) { }

get x() {
	return this._x;
}

	set x(value) {
		if(value < 0) {
			throw new Error(‘Value cannot be less than 0’);		
		}
	}

Lesson 14
	Modules
- export class Point { }

- import { Point } from “./point”;

Lesson 15
	Example
$ *.ts —target ES5 && node main.js