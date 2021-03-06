var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var app = express();
var path = require("path");

app.use(bodyParser.json());
app.use(cors());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1',
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
    var count = 0;
    connection.query('select * from Admin', (err, admData) => {
        for (var i=0; i<admData.length; i++) {
            if (req.body.login === admData[i].login_adm && req.body.pass === admData[i].pass_adm) {
                res.send(admData);
            } else if (req.body.login !== admData[i].login_adm || req.body.pass !== admData[i].pass_adm) {
                count++;
            } else if (count === admData.length-1) {
                throw err;
            }
        }
    });
});


/*Send in mysql new post*/
app.post('/sendNewPost', (req, res) => {
    connection.query('insert into Posts(title_post, content_post, short_description, category) values (?, ?, ?, ?)', [req.body.subject, req.body.content_post, req.body.short_description, req.body.category], (err) => {
        if (err) throw err;
    });
    res.send(200);
});


/*All posts*/
app.post('/showAllPosts', (req, res) => {
    connection.query('select * from Posts', (err, allposts) => {
        if (err) throw err;
        res.send(allposts);
    });
});


/* Paginations */
app.get('/api/paginations/start', function (req, res) {
    var data = {
        "Data": ""
    };

    connection.query("select * from Posts order by id_post desc limit 0,9", function (err, rows) {
        if (err) throw err;
        if (rows.length != 0) {
            data["Data"] = rows;
            res.json(data);
        } else {
            data["Data"] = "No data found..";
            res.json(data);
        }
    })
});

app.get('/api/inf-category', function (req, res) {
    var data = {
        "Data": ""
    };

    connection.query("select categ_inf from InformationCategory", function (err, rows) {
        if (err) throw err;
        if (rows.length != 0) {
            data["Data"] = rows;
            res.json(data);
        } else {
            data["Data"] = "No data found..";
            res.json(data);
        }
    })
});

app.post("/api/paginations/change", function (req, res) {
    var currentPage = (req.body.currentPage-1)*9;
    var data = {
        "Data": ""
    };

    connection.query("select * from Posts order by id_post desc limit ?, ?", [currentPage, 9], function (err, rows) {
        if (err) throw err;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "Error post paginations";
            res.json(data);
        }
    })
});
app.post("/api/category/paginations/change", function (req, res) {
    var currentPage = (req.body.currentPage-1)*9;
    var category = req.body.category;
    var data = {
        "Data": ""
    };

    connection.query("select * from Posts where category like ? order by id_post desc limit ?, ?", ['%' + category + '%', currentPage, 9], function (err, rows) {
        if (err) throw err;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "Error post paginations";
            res.json(data);
        }
    })
});
app.post("/api/select-post", function (req, res) {
    var selectPost = req.body.selectPost+1;
    var data = {
        "Data": ""
    };

    connection.query("select * from Posts order by id_post desc limit ?, ?", [selectPost, 1], function (err, rows) {
        if (err) throw err;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "Error post paginations";
            res.json(data);
        }
    })
});

app.post("/api/agreements", function (req, res) {
    var agreementsSend1 = req.body.agreementsSend1;
    var agreementsSend2 = req.body.agreementsSend2;
    var data = {
        "Data": ""
    };

    connection.query("select * from AgreementsTitle join AgreementsItem on AgreementsTitle.id_agree_title = AgreementsItem.agree_title_item;", [agreementsSend1, agreementsSend2], function (err, rows) {
        if (err) throw err;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "Error post paginations";
            res.json(data);
        }
    })
});

app.post("/api/search/select-post", function (req, res) {
    var titlePost = req.body.titlePost;
    var data = {
        "Data": ""
    };

    connection.query("select * from Posts where title_post like ?", ['%' + titlePost + '%'], function (err, rows) {
        if (err) throw err;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "Error post paginations";
            res.json(data);
        }
    })
});

app.post("/api/category/post", function (req, res) {
    var category = req.body.category;
    var data = {
        "Data": ""
    };

    connection.query("select * from Posts where category like ? order by id_post desc limit 0,9", ['%' + category + '%'],function (err, rows) {
        if (err) throw err;
        if (rows.length != 0) {
            data["Data"] = rows;
            res.json(data);
        } else {
            data["Data"] = "No data found..";
            res.json(data);
        }
    })
});
app.post("/api/post/comments", function (req, res) {
    var commentsPost = req.body.IdPostComments;
    var data = {
        "Data": ""
    };

    connection.query("select * from Comments where Comments.post_comments = ?;", commentsPost, function (err, rows) {
        if (err) throw err;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "Error comments post";
            res.json(data);
        }
    })
});
app.post("/api/search/posts", function (req, res) {
    var inputSearch = req.body.inputSearch;
    var data = {
        "Data": ""
    };

    connection.query("select * from Posts where title_post like ?", ['%' + inputSearch + '%'], function (err, rows) {
        if (err) throw err;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "Error comments post";
            res.json(data);
        }
    })
});
app.post("/api/post/add/comment", function (req, res) {
    var newComments = req.body.newComments;
    var id = req.body.id;
    var data = {
        "Data": ""
    };

    connection.query("insert into Comments(text_coments, post_comments) values(?,?)", [newComments, id], function (err, rows) {
        if (err) throw err;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "Error comments post";
            res.json(data);
        }
    })
});


/*Send remove post*/
app.post('/sendRemovePost', (req, res) => {
    connection.query('delete Posts.* from Posts where id_post = ?', [req.body.id_post], (err) => {
        if (err) throw err;
    })
    res.send(200);
});

app.get('/', function (req, res) {
    app.use(express.static(__dirname + '/'));
    res.sendfile('index.html');
})


var server = app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server start on port 3000!');
});