/*jslint devel: true */

/* eslint-disable no-console */

/*eslint no-undef: "error"*/

/*eslint-env node*/


// sunday01_ex01_console.js

// 쌍따옴표 홑따옴표 구분 없다. 모두 문자열이다.
//console.log("Hello world");
//console.log('Hello world!');
//
//console.log('hello', 'world');
//console.log('hello ' + 'world!');
//
//console.log('age : %d', 11);
//console.log('address : %s', '서울시 은평구 응암동');
//console.log('%j', {'person':{name: '유인나', age:11}});
//
//// 포멧 문자열 ``(~키 아래에 있는 따옴표)
//var name = 'HONG-GILDONG';
//var address = '서울시 종로구 관철동';
//
//console.log(`성명:${name}, 주소:${address}`);


// console 객체를 이용해서 반복문의 실행 시간을 체크하는 예제

var result = 0;

console.time('time check');
for(var i=1; i<=10000; i++) {
    result += i;
}
console.timeEnd('time check');

console.log('1~10000까지 더한 결과 : %d', result);


// __dirname : 현재 실행 경로
// __fimename : 현재 실행 파일 경로

console.log(__dirname);
console.log(__filename);



