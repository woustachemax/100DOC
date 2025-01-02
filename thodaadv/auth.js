const express = require('express');
const app = express();


app.get("/health-checkup", function(req, res){
    //do health-checkups
    const kidneyId = req.query.kidneyId;
    const username= req.headers.username;
    const password = req.headers.password;


    if(username!="siddharth" || password!="pass"){
        res.status(400).json({msg: "kaun hai bey tu?"});
        return;
    }


    if(kidneyId !=1 && kidneyId !=2){
        res.status(400).json({msg: "nai hai kidney barabar"});
        return;
    }



    //pre checks happen before the actual logic kicks in
    //middleware
    res.json({msg: "Your heart is healthy"});
});

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`App is up and running on port ${PORT}`)
})