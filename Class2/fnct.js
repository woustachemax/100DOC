// numbers 
// parseInt - parseFloat
// console.log(parseInt("42"));
// console.log(parseInt("432px"));
// console.log(parseInt("3.14"));

// push -unshift doesthe same thing but from the front of the array
// const initialArray = [1,2,3];
// initialArray.push(2);
// console.log(initialArray);

// pop - shift doesthe same thing but from the front of the array
// const initialArray = [1,2,3];
// initialArray.pop();
// console.log(initialArray);

//concat
// const initialArray = [1,2,3];
// const secondArray = [4,5,6];
// console.log(initialArray.concat(secondArray))

const initialArray = [1,2,3];
// for(i=0; i< initialArray.length; i++)
// {
//     console.log(initialArray[i])
// }

function logThing(str){
    console.log(str);
}
 initialArray.forEach(logThing);

