// sunday01_ex02_process.js

//console.log(process.argv.length);
//console.dir(process.argv);// node.exe 위치, __filename

// nodejs 파일 실행 시 전달되는 파라미터의 정보를 확인.
//console.log(process.argv[2]);
//console.log(process.argv[3]);

if(process.argv.length > 2) {
    for(var i=2; i<process.argv.length; i++) {
        console.log(process.argv[i]);
    }
}

process.argv.forEach(function(item, index) {
    console.log(index>2 ? item : '');
});

// process의 env 객체
console.log('os 환경변수의 값: ', process.env['os']);
console.log('path 환경변수의 값: ', process.env['path']);


