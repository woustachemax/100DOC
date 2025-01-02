//kidney hospital

const express = require("express");
const app = express();
app.use(express.json());

const users =[{
    name: "Jon",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res){
    const jonk = users[0].kidneys;
    const numberOfKidneys = jonk.length;
    let numberOfHealthyKidneys=0;
    for(let i=0; i<jonk.length;i++){
        if(jonk[i].healhty){
        numberOfKidneys = numberOfHealthyKidneys+1;
        }}
        const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    })
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){

})

app.delete("/", function(req,res){

})


app.listen(3000);