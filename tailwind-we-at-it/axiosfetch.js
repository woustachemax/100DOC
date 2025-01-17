//just a file to make me understand axios vs fetch

//fetch is defined in the console (is a part of js)

//axios is a popular external library

// One way to do it 

// const main = ()=>{
//     fetch("https://handlers.education.launchcode.org/static/planets.json")
//      .then(async response =>{
//         const json = await response.json();
//         console.log(json)
//     })
// }

// const main = async ()=>{
//     const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
//     const json = await response.json();
//     console.log(json);
// }

//for post put we do //     const response = await fetch("https://handlers.education.launchcode.org/static/planets.json",{
// method: POST
// });



const axios = require("axios")

const main = async ()=>{
    const response = await axios.get("https://handlers.education.launchcode.org/static/planets.json");
    console.log(response)
}
main();

//for post in axios we have to just do axios.get