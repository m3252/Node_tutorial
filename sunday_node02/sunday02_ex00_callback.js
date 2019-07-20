// sunday02_ex00_callback.js

// 콜백함수 - 호출한 기능이 모두 끝나면 실행한다.
// 함수

// 자바스크립트 함수 선언 방법


// 첫번째
function fn01(){
    console.log('fn01() Func Call');
}

function fn02(name, age){
    console.log(name + '님은 ' + age + '세 입니다');
}

fn01();
fn02('홍','25');



// 두번째
// 변수에 함수를 담았다.
var fn03 = function() {
    console.log('fn03 () 함수 호출');
}

var fnArr = [
    function() {return '첫번째 배열에 들어있는 함수'},
    function() {return '두번째 배열에 들어있는 함수'},
    function() {return '세번째 배열에 들어있는 함수'}
]

fn03();
console.log(fnArr[0]());
console.log(fnArr[1]());
console.log(fnArr[2]());

// 매개변수로 함수를 전달 하는 방법
function fn04(callback){
    console.log('fn04() 함수 호출...');
    if(callback){
        callback();
    }
}
function fn05(){
    console.log('fn05() 함수 호출...');
}

fn04(fn05);

fn04(function(){
   console.log('요청 파라미터 익명 함수 호출...'); 
});

fn04(() => {
   console.log('익명 화살표 호출...'); 
});