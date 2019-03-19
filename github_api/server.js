const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const jade = require('jade');
const axios = require('axios');
const dbconnect= require("./dbconnect.js");
const User = require("./models/user.js");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set("view engine","jade");

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})

app.get('/',function(req,res,next){
    res.render(path.join(__dirname,"/views/index.jade"))
})

app.post("/userget",async(req,res,next) =>{
    const username = req.body.user;
    
    const data = await axios.get('https://api.github.com/users/' + username )
    .then(function(res){
        return {"followers":`${res.data.followers}`,"following":`${res.data.following}`,"public_repos":`${res.data.public_repos}`}
    })
  
    res.render('index',data);
})

app.post("/userpost", function(req,res){
    var user = new User();
    user.followers = req.body.followers;
    user.following = req.body.following;
    user.public_repos = req.body.public_repos;
    
    
    user.save(function(err){
        if(err){
            throw err;
        }
        else{
            res.json({"Status":"Data Sent"});
        }
    })

})


