// const x: number = 1;
// console.log(x); 

//adding some sort of an error
// const x: number = 1;
// x="siddharth"
// console.log(x); 

//exploring basic types

// const greeting = (firstName: string, lastName: string)=>{
//     console.log("Hello "+ firstName + " " + lastName);
// }

// greeting("Siddharth", "Thakkar"); 

//type inference, typescript knows that a is number and b is also a number so it'll infer it but good practice to explicitly state
// const sum = (a:number, b:number): number =>{
//     return a + b;
// }

// const val = sum(7,5);
// console.log(val)


// const isLegal = (age: number):boolean=>{
//     if(age>18){
//         return true;
//     }
//     else{
//         return false;
//     }

// }

// let x  = isLegal(19);


// const runAfter1S = (fn: ()=> void)=>{
//     setTimeout(fn, 1000);
// }

// runAfter1S(()=>{
//     console.log("Hi there");
// })


//interfaces

// interface User{
//     firstName: string,
//     lastName: string,
//     email?: string,//optional ?
//     age: number,
// }
// const isLegal = (user: User):boolean=>{
//     if(user.age>18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const greet = (user: User)=>{
//     console.log("Hey " + user.firstName)
// }

// isLegal({
//     firstName: "Siddharth",
//     lastName: "Thakkar",
//     age: 20,
//     email: "sid@tmail.com"
// })


// interface Person{
//     name: string,
//     age: number,
//     greet(phrase: string): void,
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

//unions
// type greetArg = number | string;
// const greet = (id: greetArg)=>{
//     console.log("Hi "+ id)
// }

// greet("Sid");

// greet(2);

//intersextuon

// type Employee = {
//     name: string,
//     startDate: Date,
// }

// type Manager = {
//     name: string,
//     department: string,
// }

// type TechLead = Employee & Manager;

//arrays
const maxValue = (arr: number[])=>{
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}


maxValue([1,2,2,4,5,5,5555])

