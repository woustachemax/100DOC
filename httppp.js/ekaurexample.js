const express = require("express");
const app = express();
let users = [];

app.post("/register", function(req, res){
    const newUser = req.params.newUser;
    const password = req.params.password;
    if(!newUser || !password){
        res.status(400).json({error: "Please add username or password!"})
    }
    
    else{
        users = res.send(newUser);
    }
})

app.post("/login", function(req, res){
    

})

const PORT = 3000;
app.listen(PORT, function(){
    console.log("Server is up and running")
})