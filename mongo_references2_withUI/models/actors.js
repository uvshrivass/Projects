const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const  actorSchema = new Schema({
    name : {
        type: String
    },
    dob : {
        type: String
    },
    worth : {
        type: String
    },
    leadroles : {
        type: String
    },
    movies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'movie'
        }

    ]
});

module.exports = mongoose.model('actor',actorSchema);