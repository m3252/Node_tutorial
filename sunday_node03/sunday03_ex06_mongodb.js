//npm install mongodb --save
const MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost', (err,client)=>{
    if(err) throw err;
    const db = client.db('vehicle');
    const car = db.collection('car');
    car.find({}).toArray(function(findErr, result){
        if(findErr) throw findErr;
        
        for(var doc of result){
            console.log(`${doc.name} | ${doc.price} | ${doc.company} | ${doc.year}`);
        }
        client.close();
    });
});


//MongoClient.connect('mongodb://localhost', function(err,client){
//    if(err) throw err;
//    let db = client.db('vehicle');
//    let car = db.collection('car');
//    car.findOne({},function(findErr, result){
//        if(findErr) throw findErr;
//        console.log(result.name);
//        console.log(result.company);
//        console.log(result.price);
//        console.log(result.year);
//        
//        for(var doc of results){
//            console.log(`${doc.name} | ${doc.price} | ${doc.company} | ${doc.year}`);
//        }
//        client.close();
//    });
//});