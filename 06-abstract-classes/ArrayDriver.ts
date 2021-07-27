import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);
let rect = new Rectangle(1, 2, 3, 4);

let shapes: Shape[] = [];

shapes.push(myCircle);
shapes.push(rect);

for(let shape of shapes){
    console.log(shape.getInfo());
    console.log(shape.calcArea());
    console.log();
}