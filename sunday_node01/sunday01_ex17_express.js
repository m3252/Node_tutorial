// sunday01_ex17_express.js

// html 페이지가 보여지도록 한다.

const http = require('http');
const express = require('express');
const app = express();
// static 미들 웨어 사용.
// npm i serve-static --save
const static = require('serve-static');

// static 미들웨어 등록
app.use('/public', static(__dirname + '/public'));

app.get('/', function(req, res) {
    console.log('/ 요청 됨.');
    
    res.writeHead(200, {'Content-type':'text/html;charset=utf8'});
    res.write('<h1>Hello world</h1>');
    res.write('<h3>길동이의 홈페이지</h3>');
    res.write('<img src="/public/img01.jpg"/>');
    res.end(); // 닫아줘야 한다.(안하면 무한루프)
});

const server = http.createServer(app);
server.listen(3000, function() {
    console.log('http://localhost:3000');
});