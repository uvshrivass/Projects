
const express = require("express");
const DBConnect = require("./dbconnect")
const app = express();
const port = process.env.PORT || 8080;
const actorroute = require("./routes/actorRoute");
const movieroute = require('./routes/movieRoute');


const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use("/sendactor", express.static(__dirname+"/public/sendactor.html"));
app.use("/sendmovie", express.static(__dirname+"/public/sendmovie.html"));


app.use("/", actorroute);
app.use('/',movieroute);

app.listen(port,function(){
    console.log(`Server connected at ${port}`);
});