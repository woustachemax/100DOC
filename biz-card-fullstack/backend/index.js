const express = require("express");
const app = express();
const { cardContents } = require("./types")
const { card } = require('./db');

app.use(express.json());

app.post("/data", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = cardContents.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Please enter correct inputs"
        })
    }
    await card.create({
        name: createPayload.name,
        description: createPayload.description,
        interests: createPayload.interests,
        socialLinks: createPayload.socialLinks,

    })
    res.json({
        msg: "Data, recieved"
    })


})

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is up and running on port ${PORT}`)
})