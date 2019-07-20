// sunday01_ex10_event03.js

var Calc = require('./sunday01_ex09_event02')

var calc = new Calc();

calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달함.');
