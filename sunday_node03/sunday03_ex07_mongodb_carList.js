// sunday03_ex06_mongodb_express.js
var http = require('http');
var express = require('express');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObejctID;

var app = express();
var router = express.Router();

var bodyParser = require('body-parser');

app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// mongodb 모듈 2버전과 3버전이 약간 다르다.
var db;

function connectDB() {
    //var dbUrl = 'mongodb://localhost/vehicle';
    var dbUrl = 'mongodb://localhost';
    MongoClient.connect(dbUrl, function (err, conn) {
        if (err) {
            console.log('DB 접속 오류!');
            throw err;
        }
        db = conn.db('vehicle');
        console.log("DB접속 성공 : " + dbUrl);
    });
}

router.route('/car/:_id/detail').get(function(req, res) {
    console.log('/car/:_id/detail 요청 ...');
    
    var _id = req.params._id;
    //res.end("_id => " + _id);
    
    if(db) {
        var car = db.collection('car');
        car.findOne({_id:new mongodb.ObjectID(_id)}, function(err, doc) {
            if(err) throw err;
            
            req.app.render('car_detail', {car:doc}, function(renderErr, html) {
                if(renderErr) throw renderErr;
                res.end(html);
            });
        });
    }
});

router.route('/car/list').get(function (req, res) {
    console.log('/car/list 접속 ...');
    if (db) {
        // db에서 collection을 받아온다.
        // collection의 doc목록을 가져온다.
        // 목록가져오기 성공하면 ejs 렌더링
        var car = db.collection('car');
        car.find({}).toArray(function (err, docs) {
            if (err) throw err;

            // 목록 가져오기 성공
            req.app.render('car_list', {carList: docs}, function (err, html) {
                if (err) throw err;
                res.end(html);
            });
        });
    }
});

router.route('/car/:_id/modify').get(function(req,res) {
    console.log('GET /car/:_id/modify');
    
    // ejs 렌더링
    if(db) {
       var car = db.collection('car');
        var _id = req.params._id;
       car.findOne({_id:new mongodb.ObjectID(_id)}, function(err, doc) {
            if(err) throw err;
            
            req.app.render('car_modify', {car:doc}, function(renderErr, html) {
                if(renderErr) throw renderErr;
                res.end(html);
            });
        });
    }
});

router.route('/car/:_id/modify').post(function(req,res) {
    console.log('POST /car/:_id/modify');
    
    var _id = req.params._id;
    var paramName = req.body.name;
    var paramPrice = req.body.price;
    var paramCompany = req.body.company;
    var paramYear = req.body.year;
    
    var carObject = {
        name : paramName,
        price : paramPrice,
        company : paramCompany,
        year : paramYear
    }
    
    // db에 업데이트
    if(db) {
        var car = db.collection('car');
        car.update({_id:new mongodb.ObjectID(_id)}, {$set:carObject}, function(err, result) {
            if(err) throw err;
            
            //console.log("수정 성공 >>> ", result);
            res.redirect('/car/list');
        });
    } else {
        console.log('db 접속 안됨!');
        res.end('db connection error!');
    }
});

app.use('/', router);

var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('http://localhost:%d', app.get('port'));
    connectDB();
});


// 참고 : https://writingdeveloper.tistory.com/208
