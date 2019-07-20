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

var multer = require('multer');

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

// 파일 업로드 설정
// > npm install multer --save
// storage 객체와 upload 객체 준비
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'uploads');
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname + Date.now());
    }
});
// 파일 최대 10개까지, 1기가 까지 제한
var upload = multer({
    storage: storage,
    limits: {
        files: 10, 
        fileSize : 1024*1024*1024
    }
});

// 파일 업로드 라우팅 함수
router.route('/process/photo').post(upload.array('photo', 1), function(req, res) {
    console.log('/process/photo 요청 ...');
    // 저장 된 파일 정보 읽어오기
    try {
        console.log('업로드 성공');
        var files = req.files;
        console.log("배열인가? ", Array.isArray(files));
        console.dir(files);
        res.end('업로드 성공!');
    } catch(err) {
        console.log(err.stack);
        res.end('업로드 실패!');
    }
});

app.use('/', router);

app.all("*", function(req, res) {
   res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다!</h1>');
});

var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('http://localhost:%d', app.get('port'));
});
