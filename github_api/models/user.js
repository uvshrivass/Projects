const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    followers : {
        type : String
    },
    following : {
        type : String
    },
    public_repos : {
        type : String
    }
});

module.exports = mongoose.model('User',userSchema, 'newusers');
