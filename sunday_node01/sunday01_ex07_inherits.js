//sunday01_ex07_inherits.js

class Parent {
    // 생성자 (constructor)
    constructor() {
        this.name = "HONG";
    }
    sayHello() {
        console.log('sayHello. from Parent --> ', this.name);
    }
}

// ES6 방식의 상속
class Child extends Parent {
    constructor() {
        super(); // 부모 생성자 호출
        this.name = "KIM";
    }
}

//var p = new Parent();
//p.sayHello();
var c = new Child();
c.sayHello();