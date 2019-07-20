var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');
var bodyParser = require('body-parser');



app.set('port', process.env.PORT || 3000);

app.use('/public', static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/process/login', function(req,res){
    // bodyParser 미들웨어 사용.
    // npm Install body-parser --save
    
    var id = req.body.id || req.query.id;
    var pw = req.body.pw || req.query.pw;
    
    res.end(`user id=${id}, user pw=${pw}`);
});



var server = http.createServer(app);
server.listen(app.get('port'), ()=>{
   console.log('http:localhost:3000', app.get('port')); 
});
