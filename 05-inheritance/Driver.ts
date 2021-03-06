import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log("myShape: " + myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log("myCircle: " + myCircle.getInfo());

let rect = new Rectangle(1, 2, 3, 4);
console.log("rect: " + rect.getInfo());