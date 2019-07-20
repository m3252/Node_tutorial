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
// ejs 연결 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser());

app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));

router.route('/process/product').get(function (req, res) {
    console.log('/process/product');
    // 세션에 로그인 되면 보여진다.
    if (req.session.user == undefined) {
        console.log('로그인 전 - 로그인 페이지로 이동.');
        res.redirect('/public/login.html');
    } else {
        // 로그인 되었으므로 상품 페이지 보여주기
        req.app.render('product', {}, function (err, html) {
            if (err) throw err;
            res.end(html);
        });
    }
});

router.route('/process/login').post(function (req, res) {
    console.log('/process/login');
    var paramId = req.body.id;
    var paramPwd = req.body.pwd;
    console.log(paramId, ", ", paramPwd);
    
    // session에 로그인 정보가 저장 되도록 한다.
    if(req.session.user != undefined) {
        console.log('이미 로그인 되어 있다!');
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<p><a href="/process/logout">로그아웃</a> | ');
        res.end('<a href="/process/product">상품 안내 페이지로 이동</a> </p>');
    } else {
        // 세션에 저장
        req.session.user = {
            id: paramId,
            name: '소녀시대',
            authoried: true
        }
        
        console.log('session에 로그인 정보 저장!');
        console.log(req.session.user);
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<p><a href="/process/logout">로그아웃</a> |');
        res.end('<a href="/process/product">상품 안내 페이지로 이동</a> </p>');
    }
});

router.route('/process/logout').get(function (req, res) {
    console.log('/process/logout');
    if(req.session.user != undefined) {
        console.log('로그아웃 합니다.');
        req.session.destroy(function(err) {
            if(err) throw err;
            
            console.log('세션을 삭제하고 로그아웃 됨.');
            res.redirect('/public/login.html');
        });
    } else {
        console.log('아직 로그인 전입니다.');
        res.redirect('/public/login.html');
    }
});


app.use('/', router);

var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('http://localhost:%d', app.get('port'));
});
