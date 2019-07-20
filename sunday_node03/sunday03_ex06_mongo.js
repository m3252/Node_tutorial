//mongjs module 사용
//npm install mongojs --save

const mongo = require('mongojs');
const db = mongo('vehicle', ['car']);

db.car.find((err, data)=>{
    console.log(data);
})