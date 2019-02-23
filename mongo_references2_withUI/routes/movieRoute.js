const express = require('express');
const movieRouter = express.Router();

const Movie = require('../models/movies');
const Actor = require('../models/actors');

movieRouter.route('/:aid').post(async(req,res,next)=>{
    const {aid} = req.params;
    
    const newMovie = new Movie(req.body);
    const actor = await Actor.findById(aid);
    newMovie.actor = actor;
    await newMovie.save();

    actor.movies.push(newMovie);
    await actor.save();
    res.json({"Status":"Movie data sent"});

});

movieRouter.route('/:aid').get(async(req,res,next)=>{
    const {aid} = req.params;
    
    const actor = await Actor.findById(aid).populate('movies','name year -_id');
    res.json(actor);
});

module.exports = movieRouter;