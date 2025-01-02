// const express = require("express");
// const app = express();

//return name, dynamic programming
// function name(n){
//     let n = [];
//     return n;
// }
// const greeting = "hello";
// app.get("/greet/:name", function(req,res){
//     const name= req.params.name;
//     if(!name){
//         res.send(404).json({error: "no name"});
//     }
//     else{
//         res.send('hello,  ${name}');
//     }
// });
// const PORT =3000;
// app.listen(PORT, function(){
//     console.log("App is ruuning on port " + PORT);
// })

//CRUD Application
const express = require("express");
const { parse } = require("handlebars");
const app = express();



let items = ["comb", "tothbrush", "facewash", "coffee"];

app.post("/items", function(req, res){
    const newItem = req.params.newItem;
    items.push(newItem);
    res.json("Added new item");
    
})
app.get("/items", function(req, res){
    if(items.length == 0){
        res.status.json({error: "items are empty"});
    }
    else{
        res.send(items);
    }
})
app.put("/items/:id", function(req, res){
    const id = parseInt(req.params.id, 10);
    const newItem = req.body.newItem;
    if(!newItem){
        res.status(400).json({error: "add an item"})
    }
    if(id>=0 && id<items.length)
        {
        items[id]=newItem;
        res.json("Items updates");
    }
    else{
        res.status(404).json({error: "404 items not found"});

    }
})

app.delete("items/:id", function(req, res){
    const id = parseInt(req.params.id, 10);
    if(!id){
        res.status(400).json({error: "items are empty"})
    }
    if(id>=0 && id<items.length){
        items.slice(id, 1)
        res.json("Items deleted");
    }
    else{
        res.status(404).json({error: "Id is empty"})
        
    }
})


const PORT = 3000;
app.listen(PORT, function(){
    console.log('App is succesfully running on port ${PORT}')
})