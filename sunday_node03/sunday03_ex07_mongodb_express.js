var http = require('http');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var router =express.Router();


app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
var db;

function connectDB(){
    var dbUrl ='mongodb://localhost';
    MongoClient.connect(dbUrl, { useNewUrlParser: true }, function(err, conn){
        
        if(err) throw err;
        db = conn.db('vehicle');
        console.log('db connect');
    });
}
//car/5d2196377ed5a7994239e962/detail
router.route('/car/:_id/detail').get((req,res)=>{
    console.log('/car/:_id/detail 요청...');
    
    var _id = req.params._id;
    console.log(_id);
    req.app.render('car_detail',{car_id:_id}, (err, html)=>{
       if(err) throw err;
        res.end(html);
    });
    
});

router.route('/car/list').get((req,res)=>{
    console.log('/car/list 접속');
    if(db){
        //db에서 collection을 받아온다
        //collection의 doc목록을 가져온다
        //목록을 가져오면 ejs rendering
        var car = db.collection('car');
        car.find({}).toArray((err,docs)=>{
            if(err) throw err;
            //목록가져오기 성공
            req.app.render('car_list',{carlist:docs}, (err,html)=>{
                if(err) throw err;
                res.end(html);
            });
        })
    }
});


app.use('/',router);


var server = http.createServer(app);
server.listen(app.get('port'), function(){
   console.log('localhost:%d', app.get('port')); 
    connectDB();
});
