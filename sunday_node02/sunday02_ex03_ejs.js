const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();

//ejs 뷰엔진 등록(동적 HTML 페이지)
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

router.route('/home').get(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    //res.end('<h1>HOME 페이지에 들어왔습니다! </h1>');
    req.app.render('home', {
        'person': {
            name: "홍길동",
            job: "도둑"
        }
    }, function (err, html) {
        if (err) {
            res.end('<h1>EJS redering Error! </h1>');
        } else {
            res.end(html);
        }

    });
});



router.route('/user_list').get((req, res) => {
    let userList = [
        {
            name: 'Moon',
            job: 'Dev'
        },
        {
            name: 'kim',
            job: 'back'
        },
        {
            name: 'lee',
            job: 'front'
        }];
    req.app.render('user_list', {'userList': userList}, (err, html) => {
        if (err) {
            throw err;
        } else {
            res.end(html);
        }
    });
});

app.use('/', router);
const server = http.createServer(app);
server.listen(3000, function () {
    console.log('http://localhost:3000');
});
