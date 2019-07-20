// sunday03_ex01_cookie.js
var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');
var cors = require('cors');

var app = express();
var router = express.Router();
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

app.set('port', process.env.PORT || 3000);

app.use('/public', static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser());
app.use(cookieParser());

router.route('/process/showCookie').get(function(req, res) {
    console.log('/process/showCookie');
    
    // 쿠키 객체를 바로 끄집어 내서 화면에 보여준다.
    res.send(req.cookies);
});

router.route('/process/login').post(function(req, res) {
    console.log('/process/login');
    
    var paramId = req.body.id;
    var paramPwd = req.body.pwd;
    
    console.log(paramId,", ", paramPwd);
    
    // 전달 받은 파라미터를 쿠키에 저장
    res.cookie('user', {
        id: paramId,
        password : paramPwd,
        name: '소녀시대',
        authorized: true
    });
    
    //res.end();
    // 쿠키 확인 페이지로 이동
    res.redirect('/process/showCookie');
});


app.use('/', router);

var server = http.createServer(app);
server.listen(app.get('port'), function(){
    console.log('http://localhost:%d', app.get('port'));
});