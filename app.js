var express = require("express");
var app = express();
const chalk = require('chalk');
const path = require('path');
const cors = require('cors');
var bodyParser = require("body-parser");
var validator = require("email-validator");
var nodemailer = require('nodemailer');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')));
//Setting up ejs engine and ejs file path
app.set('views', './src/views');
app.set('view engine', 'ejs');

//Routing
app.get('/', function (req, res) {
    res.render("index",
        {
            
        
        });
})

app.post('/login', function (req, res) 
    
        {
            var name = req.body.username;
            var batch = req.body.batch;

          
           res.render("welcome",
                    {
                        name,batch
                    });
        
        });

app.get('/home', function (req, res) {
   
    res.render("home",
        {
            
        });
})

app.post('/emailvalidate', function (req, res) {
   var email = req.body.useremail;
   console.log(email);

   if (validator.validate(email)){
       
       var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'grvcheradil@gmail.com',
          pass: 'GRV3*cheradil'
        }
      });
       var mailOptions = {
        from: 'grvcheradil@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'Finally!!!!! I did it!!! Coding competition 2 completed..Thank you'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send("Email id is valid but not sent.");
          console.log('Something went wrong: ' +error);
        } else {
            res.send("Email id is valid and mail sent.");
          console.log('Email sent: ' + info.response);
        }
      });
      
   }else{
       res.send("Email id is invalid");
   }
    
})





app.listen(3333);
console.log("portnumber is 3333");






