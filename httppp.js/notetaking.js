const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

let todos =[];
let nextId=1;

app.get("./todos", function(req, res){
    if(todos.length == 0){
        return res.status(200).json({error:"Todo List is empty"})
    }
    else{
        return res.status(200).json(todos);
    }
})

app.get("./tod0s/:id", function(req, res){
const 

})


app.post("./todos/:id", function(req, res){
    const newTask = res.json()

})


app.listen(3000);
const PORT = process.env.PORT;
app.listen(PORT, function(){
    console.log('App is up and running on port 3000');
})
