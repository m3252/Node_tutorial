var express = require('express');
var http = require('http');
var path = require('path');

var static = require('serve-static');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var session = require('express-session');

app.set('port', process.env.PORT || 3000);
//ejs 연결 설정
app.set('view engine', 'ejs');
app.set('views', static(path.join(__dirname, 'views')));

app.use(session({
 secret: 'my key',
 resave: false,
 saveUninitialized: true
}));
app.use(bodyParser());
app.use('/', static(path.join(__dirname, 'public')));
app.use('/', router);
app.use(cors());

router.route('/process/product').get(function(req, res){
    console.log('/process/product');
   // 세션에 따라 화면 출력 유무 결정 
    if(req.session.user != undefined){
        // 로그인 전
        console.log('로그인 전');
        res.redirect('/login.html');
    }else{
        // 로그인 후
        console.log('로그인 후')
        req.app.render('', {}, function(err, html){
            if(err) throw err;
            res.end(html);
        });
    }
    
});

router.route('/process/login').post(function(req, res){
    console.log('/process/login' + req.body);
    var paramId = req.body.id;
    var paramPw = req.body.pw;
    
    console.log(paramId, ",", paramPw);
    
    if(req.session.user != undefined){
        console.log('이미 로그인됨');
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<p><a href="/process/logout">로그아웃</a>')
        res.end('<a href="/process/product">상품 안매 페이지로 이동</a>');
    }else{
        req.session.user={
            id:paramId,
            name:'문승찬',
            authoried:true
        }
        console.log('로그인 정보 세션저장', req.session.user);
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<p><a href="/process/logout">로그아웃</a>')
        res.end('<a href="/process/product">상품 안매 페이지로 이동</a>');
    } 
  
});

router.route('/process/logout').get(function(req, res){
    console.log('/process/logout');
    if(req.session.user != undefined){
        console.log('로그아웃 합니다');
        req.session.destroy(function(err){
            if(err) throw err;
            console.log('세션 삭제하고 로그아웃');
            res.redirect('/login.html');
        });
    }else{
        console.log('아직 로그인 전입니다');
        res.redirect('/login.html');
    }
})

var server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});

        

