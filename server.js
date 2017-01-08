var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var app = express();

app.use(bodyParser.json());
app.use(cors());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1857treytre',
    database: 'InfWebSite'
});


/*recomendMessageMe*/
var transport = nodemailer.createTransport(
    smtpTransport({
        service: 'gmail',
        auth: {
            user: 'tarasbeyda@gmail.com',
            pass: '1857treytre'
        }
    })
);

app.post('/sendRecommendMessageMe', (req, res) => {
    var recommendMessageMe = {
        from: 'tarasbeyda@gmail.com', 
        to: 'byratino50@gmail.com', 
        subject: req.body.recommendSubject,
        text: `Повідомлення від користувача: ${req.body.recommendName}
        Його Email: ${req.body.recommendEmail}
        ${req.body.recommendMessage}`
    };
    transport.sendMail(recommendMessageMe, function (err, res) {
        if (err) {
            console.error(err);
        }
    });
    res.send(200);
});


/*Repeat post in slider*/
app.post('/postInSlider', (req, res) => {
    connection.query('select * from Posts order by Posts.id_post desc limit 3', (err, postSlider) => {
        if (err) throw err;
        res.send(postSlider);
    });
});


/*Repeat post in mainPage*/
/*Repeat post with navigation button*/
app.post('/navigationPage', (req, res) => {
    connection.query('select * from Posts where Posts.id_post between ? and ?', [req.body.buttonActiveStart, req.body.buttonActiveEnd],(err, posts) => {
        if (err) throw err;
        res.send(posts);
    });
});


/*Sign in Adm panel*/
app.post('/admSignIn', (req, res) => {
    connection.query('select * from Admin', (err, admData) => {
        if (err) throw err;
        res.send(admData);
    });
});


var server = app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server start on port 3000!');
});