const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();


//my understanding of the code:
//fs.readdir goes into fules with err, data used in fs if there's an error it returns status 5000 error in reading files else responds with reading files
app.get("/files/", function(req, res){
   fs.readdir(path.join(__dirname,"./files"), function(err, files){
        if (err){
            return res.status(500).json({error: "Error reading files"})
                }
        else{
            return res.json(files);
        }
    })
})

app.get(".files/fileName", function(req, res){
    const filepath = path.join(__dirname, "./files", req.params.fileName)
     fs.readFile(filepath, "utf8", function(err,data){
        if (err){
            return res.status(404).json({error: "file not found"})
        }
        else{
             res.send(data);
        }
    })
})

app.all('*', function(req,  res){
    res.status(404).send({error: "404 file not found"});
})


