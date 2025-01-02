//creating an http server
//express
const express = require("express");

function sum(n){
    let ans= 0;
    for(i=0; i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

const app = express();
app.get("/", function(req, res){
    const n= req.query.n;
    const answer = sum(n) 
    res.send("hi there your answer is "+ answer)

}
)
app.listen(3000);