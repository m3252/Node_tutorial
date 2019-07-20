const http = require('http');
const express = require('express');
const app = express();

const path = require('path');
const static = require('serve-static');
const router = express.Router();
const mongose = require('mongoose');


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use('/public', static(path.join(__dirname, 'public')));
app.use('/', router);

//DB, Schema, model을 지정하는 전역변수 선언
//호이스팅(끌어올림) 주의
//이벤트 핸들러외 비동기 처리(setTimeout, setInterval, Ajax) this는 다른 의미를 가진다.
var database;
var userSchema;
var userModel;

const connectDB = () => {
    var dbUrl = 'mongodb://localhost:27017/local';
    console.log('database connecting try...');
    mongose.promise = global.Promise;
    mongose.connect(dbUrl);
    database = mongose.connection;
    
    database.on('error', 
       console.error.bind(console, 'mongose connection error!'));
    
    database.on('open', ()=>{
        console.log(`데이터베이스 연결 성공 ${dbUrl}`);     
        
        userSchema = mongose.Schema({
            id: String,
            name: String,
            password: String
        });
        console.log('userSchema 정의 :', userSchema);
        
        userModel = mongose.Model('users', userModel);
        console.log('userModel 정의 :', userModel);
    });
    
    //연결이 끊어졌을때 5초후 재연결
    database.on('disconnected', ()=>{
        console.log('연결이 끊어졌습니다. 다시 연결합니다');
        setTimeout(connectDB, 5000);
    })
}

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log(`localhost:3000:${app.get('port')}`);
    connectDB();
});