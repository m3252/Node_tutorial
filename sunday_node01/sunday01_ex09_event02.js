// sunday01_ex09_event02.js
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function() {
    this.on('stop', function() {
        console.log('Calc에 stop event 전달 됨.');
    });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b) {
    return a + b;
}

module.exports = Calc; // 클래스를 담았다.
module.exports.title = 'calculator';