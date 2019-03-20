var express = require("express");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var randomString = require("randomstring");
const nodemailer = require("nodemailer");
var db = require("./dbconnect");
var User = require("./models/user");
var path = require("path")

var app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

var transporter = nodemailer.createTransport({
  host: "gains.arrowsupercloud.com",
  port: 465,
  secure: true,
  auth: {
    user: "mail@uvshrivas.com",
    pass: "**********"
  }
});

app.get("/", function(req,res,next){
  res.sendFile(path.join(__dirname,"/index.html"))
})

app.post("/", function(req, res) {
  req.checkBody("name", "Invalid name").notEmpty();
  req.checkBody("email", "Invalid email").isEmail();
  // req.checkBody("password", "Password not matched").equals(req.body.password2);

  var errors = req.validationErrors();
  if (errors) {
    res.json(errors);
  } else {
    const token = randomString.generate();
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.token = token;

    user.save(function(err) {
      if (err) throw err;
      res.json({ Status: "Success" });
    });

    var mailOptions = {
      from: '"Ujjwal" <uvshrivas@gmail.com>',
      to: user.email,
      subject: "Vefification",
      text: "Hello world?",
      html: `<a href="http://localhost:3000/verify/${user.token}">verify</a>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  }
});

app.get("/verify/:code", function(req, res) {
  User.findOneAndUpdate(
    { token: req.params.code },
    { $set: { active: true } },
    function(err, user) {
      if (!user) res.json({ Status: "Not found" });
      else res.json({ Status: "Conformed and active changed to true" });
    }
  );
});

app.delete("/:id", function(req, res) {
  User.remove({ email: req.params.id }, function(err) {
    if (err) throw err;
    res.json({ Status: "Success" });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function(err) {
  if (err) throw err;
  console.log(`Server is running at port ${port}`);
});
