const express = require('express');
const actorRouter = express.Router();
const Actor = require('../models/actors');

const bodyParser = require("body-parser");
actorRouter.use(bodyParser.urlencoded({ extended: false }));
actorRouter.use(bodyParser.json());



actorRouter.route("/sendactor").post(async (req,res,next)=>{
    var actor = new Actor();
    actor.name = req.body.actorname;
    actor.dob = req.body.dob;
    actor.worth = req.body.worth;
    actor.leadroles = req.body.leadroles;
    
    await actor.save(function(err){
        if(err){
            throw err;
        }
        else{
            console.log("Data Sent");
            res.json({"Status":"Actor data sent"});
        }   
    });

});

actorRouter.route("/getactorr").get(async(req,res)=>{
    const actordata = await Actor.find({});
    res.json(actordata);
    
});



module.exports = actorRouter;