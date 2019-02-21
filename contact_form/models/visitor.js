const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    fname : {
        type : String
    },
    lname : {
        type : String
    },
    email : {
        type : String
    },
    subject : {
        type : String
    },
    message : {
        type : String
    }
});

module.exports = mongoose.model('Visitor',visitorSchema, 'newvisitors');
