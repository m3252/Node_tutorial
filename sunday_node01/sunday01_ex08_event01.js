// sunday01_ex08_event01.js

process.on('exit', function() {
    console.log('exit 이벤트 발생함.');
});

process.on('tick', function() {
    console.log('tick 이벤트 발생함.');
})

setTimeout(function() {
    console.log('2초 후에 시스템 강제 종료!');
    process.emit('tick'); // 강제로 이벤트 발생.
    process.exit(); 
}, 2000);