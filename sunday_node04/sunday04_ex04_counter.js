const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors());

var cnt = 0;

app.use('/', router);

router.route('/count/:size').get((req,res)=>{
    cnt ++;
    var size = req.paramas.size;
    
    if(cnt > size){
        res.end("");
    }else{
        console.log('변경된 내용이 있다');
        res.end("" + cnt);
    }
});
const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log('localhost:3000');
});