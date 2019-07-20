// sunday01_ex05_module.js

// 외장모듈 불러오기

// 모듈 설치
// 글로발환경에 설치 : -g
// 현재 프로젝트에 설치 : --save
// npm install -g 모듈명
// npm i -g 모듈명
// npm i 모듈명 --save

var nconf = require('nconf');

nconf.env();

// nconf 모듈을 이용한 환경변수 확인
var os = nconf.get('OS');

console.log(`os 환경변수의 값 : ${ os }`);