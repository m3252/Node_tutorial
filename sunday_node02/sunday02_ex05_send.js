var http = require('http');
var express = require('express');
var app = express();
app.set('port', 3000)

app.get('/', function(req, res){
    console.log('/요청받음');
    res.send({name:'방탕소년단', age:25});
})




var server = http.createServer(app);
server.listen(app.get('port'), ()=>{
   console.log('http:localhost:3000'); 
});
