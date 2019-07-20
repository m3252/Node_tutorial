// sunday01_ex14_fs_04.js

var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists){
    if(exists){
        // 기존 파일이 존재하면 일단 파일 삭제.
        fs.unlink(outname, function(err) {
            if(err) throw err;
            console.log(`기존 파일 ${outname}을 삭제 함.`);
        });
    } // end of if
    
    // pipe를 이용한 파일 복제
    var infile = fs.createReadStream(inname, {flag: 'r'});
    var outfile = fs.createWriteStream(outname, {flag: 'w'});
    infile.pipe(outfile);
    console.log(`파일 복사 ${infile} --> ${outfile}`);
});