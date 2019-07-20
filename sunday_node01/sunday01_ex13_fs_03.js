// sunday01_ex13_fs_03.js

var fs = require('fs');

var msg = 'Hello world, ' + '안녕하십니까?';

// 쓰기 모드에서는 파일이 없으면 만든다.
fs.writeFile('./output.txt', msg, function (err) {
    if (err) throw err;

    console.log('output.txt 파일에 쓰기 완료!');
});
