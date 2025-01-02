const oldArray = [1,2,3,4,5,6];

// const newArray = [];

// for(i=0; i< oldArray.length; i++){
//     newArray.push(oldArray[i] *2);
// }
// console.log(newArray);

//alternate sol

const ans = oldArray.map(function transform(i){
    return i*2;
});
console.log(ans);