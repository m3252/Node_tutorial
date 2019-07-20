// sunday01_ex03_exports.js

var calc = {};
calc.minus = function(a, b) {
    return a - b;
}

// 모듈을 등록한다.
module.exports = calc;