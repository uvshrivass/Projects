const mongoose = require("mongoose");

module.exports= mongoose.connect('mongodb://ujjwal:connectmenow12@ds129085.mlab.com:29085/visitordetails',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})
