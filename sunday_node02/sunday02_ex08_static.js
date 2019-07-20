var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');
app.set('port', process.env.PORT || 3000);

app.use('/public', static(path.join(__dirname,'public')));



app.get('/', function(req,res){
    var paramName = req.query.name;
    var paramAge = req.query.age;
    console.log('/요청받음 name=>', paramName);
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.end(`성명=> ${paramName}, 나이 => ${paramAge}`);
});



var server = http.createServer(app);
server.listen(app.get('port'), ()=>{
   console.log('http:localhost:3000', app.get('port')); 
});
