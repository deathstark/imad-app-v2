var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var bodyParser = require('body-parser');

var config = {
  host: 'db.imad.hasura-app.io',
  user: 'deathstark',
  password: 'db-deathstark-12849',
  port: '5432' ,
  database: 'deathstark'
};

var app = express();
app.use(morgan('combined'));

var pool = new Pool(config);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/test-db',function(req,res){
    
    pool.query('SELECT * FROM signup',function(err,result){
        
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result));
        }
        
    });
});

app.get('/CSS/welcomePage.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'CSS', 'welcomePage.css'));
});

app.get('/CSS/site.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'CSS', 'site.css'));
});

app.get('/CSS/sit.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'CSS', 'sit.css'));
});

app.get('/CSS/sign.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'CSS', 'sign.css'));
});

app.get('/Html/Signin.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Html', 'Signin.html'));
});

app.get('/Html/signup.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Html', 'signup.html'));
});

app.get('/CSS/signInPage.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'CSS', 'signInPage.css'));
});

app.get('/CSS/signUpPage.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'CSS', 'signUpPage.css'));
 });
 
 app.get('/CSS/sit.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'CSS', 'sit.css'));
 });
 
 app.get('/js/sign.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'sign.js'));
 });
 
  app.post('/signup/user',function (req,res){
   // var Username = req.query.Username;
    var email = req.body.email;
    var password = req.body.password;
    var fname = req.body.fname;
    //var Mname = req.query.Mname;
    var lname = req.body.lname;
    //var Dob = req.query.Dob;

     pool.query('INSERT INTO "signup" ("Email","Password","Fname","Lname") VALUES ($1,$2,$3,$4)',[email,password,fname,lname],function(err,rows){
        if(err){
            console.log("fail");
        }
        else{
            res.send("success");
        }
    });
    
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
