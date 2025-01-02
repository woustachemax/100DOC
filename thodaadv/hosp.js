const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res){
    const kidneyId = req.query.kidneyId;
    const username= req.headers.username;
    const password = req.headers.password;

    if(username != "siddharth" && password != "pass"){
        res.status("400").json({error: "your inputs are incorrect"});
        return;
    }


    if(kidneyId !=1 && kidneyId !=2){
        res.status(420).json({msg: "Wrong i/p"})
        return;
    }

    res.send("Your heart is healthy!")
})


const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
})