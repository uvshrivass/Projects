const mongoose = require("mongoose");

const Connection = mongoose.connect("mongodb://ujjwal:connectmenow12@ds347665.mlab.com:47665/hollywood",{ useNewUrlParser: true },(err)=>{
    if(err){
        throw err;
    }
    console.log("Connected to Database");
});

module.exports = Connection;