var express = require('express');
var http = require('http');
var path = require('path');

var static = require('serve-static');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var session = require('express-session');
var multer = require('multer');


app.set('port', process.env.PORT || 3000);

app.use(bodyParser());
app.use('/', static(path.join(__dirname, 'public')));
app.use('/', router);
app.all('*', (req,res)=>{
    res.status(404).send('ERROR');
})
app.use(cors());

//파일 업로드 설정
//npm i multer --save
//storage 객체와 uload객체 준비
var storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        //업로드 경로 지정
        callback(null, 'uploads');
    },
    filename: (req, file, callback)=>{
        //파일명 중복방지
        callback(null, Date.now()+file.originalname);
    }
});

var upload = multer({
    storage : storage,
    limits:{
        files:10,
        fileSize:1024*1024*1024
    }
});


//파일 업로드 라우팅 함수
router.route('/process/photo').post(upload.array('file', 1), (req,res)=>{
   console.log('포토요청'); 
    //저장된 파일 경로 읽어오기
    try{
        console.log('업로드 성공');
        var files = req.files;
        console.log(Array.isArray(files));
        console.dir(files);
        res.end('ok');
    }catch(err){
        console.log(err);
        res.end('fail');
    }
});

var server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});

        

