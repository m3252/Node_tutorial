var http = require('http');
var express = require('express');
var app = express();
app.set('port', 3000)

app.get('/google', function(req, res){
    console.log('/google 요청받음');
    res.redirect('https://google.com');
})




var server = http.createServer(app);
server.listen(app.get('port'), ()=>{
   console.log('http:localhost:3000'); 
});
