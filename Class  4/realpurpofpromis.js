function siddharthsAsynFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there")
         } , 2000)

});
    return p;
}


// const value = siddharthsAsynFunction();
// value.then(function(){
//     console.log("Hi there");
// })

async function main() {
    let value = await siddharthsAsynFunction()
    // console.log("fuckyou")
        console.log(value);
    }
    console.log("fuckyou") 

    main();
