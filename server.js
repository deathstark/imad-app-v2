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
 
  app.get('/',function (req,res){
    var Username = req.query.Username;
    var Email = req.query.Email;
    var Password = req.query.Password;
    var Fname = req.query.Fname;
    var Mname = req.query.Mname;
    var Lname = req.query.Lname;
    var Dob = req.query.Dob;

     pool.query('INSERT INTO "signup" ("Username","Email","Password","Fname","Mname","Lname","Dob") VALUES ($1,$2,$3,$4,$5,$6,$7)',[Username,Email,Password,Fname,Mname,Lname,Dob],function(err,rows){
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
