// sunday01_ex12_fs_02.js

// 파일을 비동기식으로 읽어 들이기

var fs = require('fs');

fs.readFile('./package.json', 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data);
});

// 비동기 방식으로 파일을 읽으므로 아래 코드가 먼저 실행 할수도 있다.
console.log('프로젝트 안에 package.json 파일을 읽어온다.');