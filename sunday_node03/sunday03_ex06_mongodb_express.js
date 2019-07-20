// sunday03_ex06_mongodb_express.js
var http = require('http');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.set('port', 3000);

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

var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('http://localhost:%d', app.get('port'));
    connectDB();
});
