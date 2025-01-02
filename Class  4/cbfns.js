// function square(n){
//     return n*n;
// }

// function sumOfSquares (i,j){
//     const val1 = square(i);
//     const val2 = square(j);
//     return val1 + val2;
// }

// let ans = sumOfSquares(4,5);
// console.log(ans);

// callbacks  

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sOS(a, b, fn){
    const val1 = fn(a);
    const val2= fn(b);
    return val1 + val2;
}

let ans = sOS(1, 2, cube);
console.log(ans);