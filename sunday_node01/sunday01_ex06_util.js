// sunday01_ex06_util.js
var util = require('util');

function Parent() {
    this.name = "parent";
}
Parent.prototype.sayHello = function() {
    console.log('Hello. from parent Class --> ', this.name);
}
function Child() {
    this.name = "child";
};
// 고전적인 방식의 자바스크립트 상속.
//Child.prototype = new Parent();
//Child.prototype.constructor = Child;

// util 모듈을 이용한 상속.
util.inherits(Child, Parent);

//var p = new Parent();
//p.sayHello();

var c = new Child();
c.sayHello();