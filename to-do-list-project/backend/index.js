const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

//title- string
//desc- string
app.post("/todo", async function(req, res){
const createPayload = req.body;
const parsedPayload = createTodo.safeParse(createPayload);
if(!parsedPayload.success){
    res.status(411).json({
        msg: "your i/ps are incorrect"
    })
    return;
}
   await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "your i/ps are incorrect"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Your to-do is done, HAHAHAHAHAHAHAHAHA"
    })
})

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is up and running on port  ${PORT}`)
})