const express = require('express');
const app = express();
const zod = require('zod');


const schema = zod.array(zod.number());
app.use(express.json());



app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    // const kidneyLength = kidneys.length;

    res.send({
        response
    });
})

//global catch
app.use(function(err, req, res, next){
    res.json({msg:"sorry something's up w our server"})
})

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`App is listening on port ${PORT}`)
})