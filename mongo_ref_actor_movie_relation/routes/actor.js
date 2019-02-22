const express = require('express');
const router = express.Router();

const Actor = require('../models/actor');

router.route('/').get(async (req,res,next) => {

    const actor = await Actor.find({});
    res.json(actor);
}).post(async(req,res,next) => {
    const newActor = new Actor(req.body);
    await newActor.save();
    res.json(newActor);
});

module.exports = router;