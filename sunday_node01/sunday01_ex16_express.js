// sunday01_ex16_express.js

// express 외장 모듈 설치
// npm install express --save

// express는 단독으로 실행 가능하다.
// 그러나 express와 http를 함께 사용할것을 권장한다.

// ES6 버전에서는 const와 let이 추가되었다.
// var 대신 let 사용.
// let은 오직 하나만 선언.

// 상수로 모듈 선언
const http = require('http');
const express = require('express');
const app = express(); // getInstance() 같은것.

// REST 방식으로 요청을 받을 수 있다.
// get(), post(), put(), delete() ...
// 요청 방식 method에 따라 다른 함수를 호출 할수 있다.

// 브라우저에 http://localhost:3000/hello
app.get('/hello', function(req, res) {
    res.end('/hello ...');
});

app.get('/test', function(req, res) {
    res.end('/test ...');
});

// 브라우저에 http://localhost:3000
app.get('/', function(req, res) {
    res.end('/ ...');
});

// http와 express를 결합한 형태가 된다.
const server = http.createServer(app); // express app 객체를 인자로 사용.
let port = 3000;
server.listen(port, ()=>{
    /// 속된 말로 화살표 함수
    console.log('http://localhost:%d', port);
});

