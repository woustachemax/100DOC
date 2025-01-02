//arrays
// const ages = ["22","33","36","23","51","56"]

// for (let i=0; i<=ages.length; i++){
//     if(ages[i] % 2 !=0 ) {
//         console.log(ages[i]);
//     }
// }

// const names = ["Siddharth", "Srushti", "Rithik"];
// const gender = ["male", "female", "male"];
// for(let i =0; i<names.length; i++)
// {
//     if(gender[i]== "male"){
//         console.log(names[i]);
//     }
// }

//objects
const users = [{
    fName: "Siddharth",
    gender: "male",
},
{
    fName: "Srushti",
    gender: "female",
},
{
    fName: "Rithik",
    gender: "male",
}
]
 for(let i =0; i<users.length; i++)
{
    if(users[i]["gender"]== "male"){
        console.log(users[i]["fName"]);
    }
}