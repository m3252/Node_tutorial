const async = require('async');

async.waterfall([
    function task1(callback){
        callback(null, 'value');
    },
    function task2(arg1, callback){
        callback(null, arg1, 'value2');
    },
    function task3(arg1, arg2, callback){
        console.log(arg1, arg2);
        callback(null, arg1 + arg2 + 'results');
    }
],function(err, results){
   console.log('results = >', results); 
});