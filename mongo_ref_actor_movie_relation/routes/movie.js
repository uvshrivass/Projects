const express = require('express');
const router = express.Router();


const Movie = require('../models/movie');
const Actor = require('../models/actor');

router.route('/:aid').get(async(req,res,next)=>{
    const {aid} = req.params;
    const actor = await Actor.findById(aid).populate('movies','name -_id');
    res.json(seller);
// const seller = await Seller.findById(sid);
// res.json(seller);

}).post(async(req,res,next)=>{
    const {aid} = req.params;
    const newMovie = new Movie(req.body);
    const actor = await Actor.findById(aid);
    newMovie.actor = actor;

    await newMovie.save();

    actor.movies.push(newMovie);
    await actor.save();

    res.json(newMovie);
});

module.exports = router;