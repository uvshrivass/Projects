const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = process.env.port || 8080;
const dbconnect = require('./DBConnect');
var app = express();

const actorroute = require('./routes/actor');
const movieroute = require('./routes/movie');
app.use(bodyparser.json());

app.use("/", actorroute);
app.use('/',movieroute);

app.listen(port,(err)=>{
    if(err)
        throw err
    console.log(`Sever is started ${port}`);
});







