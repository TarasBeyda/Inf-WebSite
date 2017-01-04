var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(cors());

var smtpTransport = require('nodemailer-smtp-transport');
var transport = nodemailer.createTransport(
    smtpTransport({
        service: 'gmail',
        auth: {
            user: 'tarasbeyda@gmail.com',
            pass: '1857treytre'
        }
    })
);

var params = {
    from: 'tarasbeyda@gmail.com', 
    to: 'byratino50@gmail.com', 
    subject: 'Hi, body!',
    text: 'Let\'s read some articles on Web Creation'
};
transport.sendMail(params, function (err, res) {
    if (err) {
        console.error(err);
    }
});

var server = app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server start on port 3000!');
});