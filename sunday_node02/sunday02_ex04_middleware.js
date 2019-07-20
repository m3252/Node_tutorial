// 사용자 정의 미들 웨어

const http = require('http');
const express = require('express');
const app = express();


//사요자정이의 미들웨어
app.use(function(req, res, next){
    console.log('첫번째 미들웨어 요청 처리 완료,,,');
    res.writeHead(200,{'COntent-Type':'text/html;charset=utf8'});
//    res.end('<h1>서버에서 응답한 결과입니다.</h1>')
    res.write('<h2>첫번째 미들웨어 연습</h2>');
    
    next();
});

app.use('/',(req,res,next)=>{
    console.log('두번째 미들웨어 호출');
    res.write('<h2>두번째 미들웨어 연습');
    next();
});

//express에서 요청 받을때 실행
app.get('/', (req,res)=>{
    console.log(' / 요청 받음');
//    res.writeHead(200, {'COntent-Type':'text/html;charset=utf8'});
    res.end('<h1>길동이의 홈페이지</h1>')
});
const server = http.createServer(app);
server.listen(3000, function(){
    console.log('localhost:3000 실행....')
});