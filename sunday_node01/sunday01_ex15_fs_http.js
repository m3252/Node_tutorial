// sunday01_ex15_fs_http.js
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
    var inStream = fs.createReadStream('./output.txt');
    
    res.writeHead(200, {'Content-type': 'text/html;charset=utf8'});
    inStream.pipe(res);
    
    //res.end("안녕하세요");
});

//server.on('request', function(req, res) {
//    // 서버로 요청이 들어오면 처리하는 이벤트 핸들러
//    // console에 출력
//    console.log('request ok ....');
//    // 브라우저 화면에 출력
//    res.end('request ok ....');
//});

server.listen(3000, function() {
    console.log('서버 실행 >>> http://localhost:3000');
});