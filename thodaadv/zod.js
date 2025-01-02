const { response, response } = require('express');
const z = require('zod');

function validateInput(obj){

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(5)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}


// app.post("/login")