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
var error = require('express-error-handler');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser());
app.use('/', static(path.join(__dirname, 'public')));
app.use('/', router);
app.use(cors());

var errorHandler =  error({
    static: {
        '404':__dirname+'/public/404.html'
    }
});
app.use(error.httpError(404));
app.use(errorHandler);

var server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});

        

