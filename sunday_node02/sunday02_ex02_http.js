const http = require('http');

var server = http.createServer();
server.listen(3000, function () {
    console.log('localhost:3000');
});
server.on('connection', function (socket) {
    var addr = socket.address();
    console.log('클라이언트 접속 >>>', addr.address, addr.port);
});
server.on('request', function (req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    //console.log(req);
    res.end('request ok...');
    server.close();

});

server.on('close', function () {
    console.log('서버가 종료되었습니다.');
});
