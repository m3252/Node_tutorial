// sunday03_ex05_mongodb.js
// > npm install mongodb --save

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost', function(err, client) {
    if(err) throw err;
    var db = client.db('vehicle');
    var car = db.collection('car');
    car.findOne({}, function(findErr, result) {
        if(findErr) throw findErr;
        console.log("name : ", result.name);
        console.log("company : ", result.company);
        console.log("price : ", result.price);
        console.log("year : ", result.year);
        client.close();
    });
});