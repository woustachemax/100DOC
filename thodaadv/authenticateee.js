// const zod = require("zod");


// function validateInput(array){
//     const schema = zod.array(zod.number());
//     const response = schema.safeParse(array);

//     console.log(response);
// }

// validateInput([1, 2, 3]);



const zod = require("zod");

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);

    console.log(response);
}

validateInput({email: 'sid2011thakkar@gmail.com',
    password: 'siddharthth'
});