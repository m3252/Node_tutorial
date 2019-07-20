var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var static = require('serve-static');
app.set('port', process.env.PORT || 3000);

app.use('/public', static(path.join(__dirname,'public')));



app.get('/process/login', function(req,res){
    var id = req.query.id;
    var pw = req.query.pw;
    var userAgent = req.header('User-Agent');
    console.log('userAgent',userAgent);
    res.end(`user id=${id}, user pw=${pw}`);
});



var server = http.createServer(app);
server.listen(app.get('port'), ()=>{
   console.log('http:localhost:3000', app.get('port')); 
});
