const express = require("express");
var bodyParser = require('body-parser');
const dbConnect= require("./dbConnect");
const Visitor = require("./models/visitor");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/",express.static(__dirname+"/public"))

app.post("/",function(req,res,next){
    var user = new Visitor();
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.email = req.body.email;
    user.subject = req.body.subject;
    user.message = req.body.message;
    
    user.save(function(err){
        if(err){
            throw err;
        }
        else{
            res.sendFile(__dirname + '/public/thankyou.html');
        }
    });

})


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});