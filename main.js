"use strict";
// var message = 'In the name of Allah';
exports.__esModule = true;
// // Lesson 2 X-Team 
// function doSomething2()  {
//     console.log(message);
// }
// doSomething2();
// // Lesson 3 X-Team
// function doSomething3() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }
// doSomething3();
// // Lesson 4 X-Team 
// let a; 
// let b: number;
// let c: string;
// let d: boolean;
// let e: any;
// let f: number[] = [1, 2, 3, 4];
// let g: any[] = [1, true, 'a', false];
// // Lesson 5 X-Team
// let messageX;
// messageX = 'abc';
// let endsWithC = (<string>messageX).endsWith('c');
// let alternativeWay = (messageX as string).endsWith('c');
// // Lesson 6 X-Team 
// let log = function(message) {
//     console.log(message);
// }
// let log = (message) => console.log(message);
// // Lesson 7 X-Team
// interface Point {
//     x: number,
//     y: number
// }
// let drawPoint = (point: Point) => {}
// drawPoint({
//     x: 1, 
//     y: 2
// });
// // Lesson 8, 9, 10, 11 X-Team
// class Point {
//     x: number;
//     y: number;
//  // private z: number;
//     // constructor(x?: number, y?: number) {
//     //     this.x = x;
//     //     this.y = y;
//     // }
//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }
//     getDistance(another: Point) {
//         // ...
//     }
// }
// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.draw();
// // Lesson 12 X-Team 
// class Point {
//     constructor(private x?: number, private y?: number) {
//     }
//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }
// }
// let point = new Point(1, 2);
// point.draw();
// // Lesson 13 Properties;
// class Point {
//     constructor(private _x?: number, private _y?: number) {
//     }
//     draw() {
//         console.log('X: ' + this._x + ', Y: ' + this._y);
//     }
//     getX() {
//         return this._x;
//     }
//     // get x() {
//     //     return this._x;
//     // }
//     setX(value) {
//         if (value < 0 ) {
//             throw new Error('value cannot be less than 0.');
//         }
//         this._x = value;
//     }
//     // set x(value) {
//     //     if (value < 0) {
//     //         throw new Error('value cannot be less than 0.');
//     //     }
//     //     this._x = value;
//     // }
// }
// let point = new Point();
// let x = point.getX();
// point.setX(10);
// // let x = point.x;
// // point.x = 10;
// point.draw();
// // Lesson 14 X-Team 
// import { Point } from "./point";
// let point = new Point(1, 2);
// point.draw();
// Lesson 15 X-Team 
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
