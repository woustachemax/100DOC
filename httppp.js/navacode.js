const newArray = [1,2,3,4,5,6];

// for(i=0; i<newArray.length; i++){
//     newArray[i]=newArray[i]*2;
// }
// console.log(newArray)


// cleaner version
// function transform(i){
//     return i*2;
// }

// const ans = newArray.map(transform);
// console.log(ans);

function even(i){
    if(i%2==0){
        return true;
    }
    else{
        return false;
    }
}

const ans = newArray.filter(even);
console.log(ans);