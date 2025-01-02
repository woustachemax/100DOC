const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todos } = require("./db")
const app = express();

app.use (express.json());
app.use(cors());

//Title - string
// desc - string

app.post("/todo", async function(req, res){
    const createPayLoad =  req.body;
    const parsedPayload =  createTodo.safeParse(createPayLoad);
    if(!parsedPayload.success){
        res.status(411).json({msg: "wrong i/ps"})
        return;
    }

   await todo.create({
        title: createPayLoad.title,
        desc: createPayLoad.desc,
        completed: false,
    })

    res.json({msg: "To-Do created!"})

})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    });
})

app.put("/completed", async function(req, res){
    const updatePayload =  req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(300).json({
            msg: "Wrong i/ps",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true,
    })

    res.json({ 
        msg: "To-Do marked as completed"
    })
})

app.listen =3000;
