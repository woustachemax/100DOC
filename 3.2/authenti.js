//Authentication--key

const express = require("express");
const app = express();
const z = require('zod');

    //4 imp things before auth
    //hashing --- password as such isn't saved, it's saved as gibberish(weird format- its called hashing.)
    //encryption --- locking something, converting into gibberish but can be decrypted and saved to its og format
    //json web tokens --- its hashing/encryption but only works for JSON i/p
    //                    its just converting a big object to a string, anyone who has the o/p can convert it back to the i/p

    //local storage
    app.post("/signin", function(req, res){
        
    })


const PORT = 3000;
app.listen(PORT, function(){
    console.log(`App is running on port ${PORT}`);
})