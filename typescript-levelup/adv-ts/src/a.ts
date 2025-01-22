//enums in ts
//enums - e-numeration
// without enum
// type keyInput =  "up" | "down" | "left" | "right";
// const doSomething = (keyPressed: keyInput)=>{

// import { number, string } from "zod";

// }


// doSomething("up");
// doSomething("down");
// doSomething("downramndom"); //this is buggy

// with enum-- with enums it doesn't reflect on the js file, js just converts
//shit to 0,1,2,3, so you can give em' a type if you want to but you gotta give
//everything a value
// enum Direction{
//     Up = 1,
//     Down = 2,
//     Left = 3,
//     Right = 4,
// }
// const doSomething = (keyPressed:Direction )=>{

// }


// doSomething(Direction.Down);
// doSomething(Direction.Right);

//Generics

// const identity  = <T> (arg:T)=>{
//     return arg;
// }

// let output1 = identity<string>("myString");
// let output2 =  identity<number>(100);





const identity = <T> (op: T[])=>{
    return op[0];
}

const el = identity(["siddharth", "thakkar"]);
console.log(el.toUpperCase());