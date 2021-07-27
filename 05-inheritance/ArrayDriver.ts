import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let rect = new Rectangle(1, 2, 3, 4);

let shapes: Shape[] = [];

shapes.push(myShape);
shapes.push(myCircle);
shapes.push(rect);

for(let shape of shapes){
    console.log(shape.getInfo());
}