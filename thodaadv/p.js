//real optimimum for a bunch of prechecks is a middleware

const express = require("express");
const app = express();
app.use(express.json());

    // function userMiddleware(req, res, next){
    //     if(username != "siddharth" || password != "pass"){
    //         res.status("400").json({error: "your inputs are incorrect"});
            
    //     }
    //     else{
    //         next();
    //     }
    
    // }
   
    // function kidneyMiddleware(req, res, next){
    //     if(kidneyId !=1 && kidneyId !=2){
    //         res.status(420).json({msg: "Wrong i/p"})
    //     }
    //     else{
    //         next();
    //     }
    // }

    // app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){

    //     res.send("your heart is healthy");
    // })

    // app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function(req, res){

    //     res.send("your heart is healthy");
    // })

    // app.get("/heart-checkup", userMiddleware, function(req, res){

    //     res.send("your heart is healthy");
    // })


    app.post("/health-checkup", function(req,res){
        const kidneys= req.body.kidneys;
        const kidneyLength = kidneys.length;

        res.send("you have "+ kidneyLength);
    })

//global catches
app.use(function(err, req, res, next){
    res.json({msg: "Sorry error w our server!"})
})

const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
})