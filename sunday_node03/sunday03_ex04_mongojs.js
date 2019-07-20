// mongojs 모듈 사용
// > npm instasll mongojs --save
var mongojs = require('mongojs');

var db = mongojs('vehicle', ['car']);
db.car.find(function(err, data) {
    console.log(data);
});