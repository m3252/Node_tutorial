// sunday03_ex05_mongodb.js
// > npm install mongodb --save

var MongoClient = require('mongodb').MongoClient;

/*MongoClient.connect('mongodb://localhost', function(err, client) {
    if(err) throw err;
    var db = client.db('vehicle');
    var car = db.collection('car');
    car.findOne(function(findErr, doc) {
        if(findErr) throw findErr;
        console.log(`${doc.name} | ${doc.price} | ${doc.company} | ${doc.year}`);
        client.close();
    });
});*/

MongoClient.connect('mongodb://localhost', function(err, client) {
    if(err) throw err;
    var db = client.db('vehicle');
    var car = db.collection('car');
    car.find({}).toArray(function(findErr, results) {
        if(findErr) throw findErr;
        
        //console.dir(results);
        for(var doc of results) {
            console.log(`${doc.name} | ${doc.price} | ${doc.company} | ${doc.year}`);
            console.log();
        }
        
        client.close();
    });
});