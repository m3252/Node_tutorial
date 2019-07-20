// sunday01_ex18_router.js
const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const router = express.Router();
const cors = require('cors');

app.set('port', 3000);

// 크로스 도메인 문제 해결
app.use(cors());

// router 패스 경로 설정
// 우아한 URL (파이썬 Django식 url 표기)
router.route('/plus/:x/:y').get(function (req, res) {
    let x = Number(req.params.x); // 숫자로 파싱 방법 1
    let y = Number(req.params.y); // 숫자로 파싱 방법 2

    console.log(x + y);

    // end()함수의 인자는 문자열 or Buffer여야 한다.
    res.end(x + y + "");
});

router.route('/minus/:x/:y').get(function (req, res) {
    res.end(Number(req.params.x) - Number(req.params.y) + "");
});

router.route('/multi/:x/:y').get(function (req, res) {
    res.end(Number(req.params.x) * Number(req.params.y) + "");
});

router.route('/div/:x/:y').get(function (req, res) {
    res.end(Number(req.params.x) / Number(req.params.y) + "");
});

// server 실행 전에 router 미들웨어 등록한다.
app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});
