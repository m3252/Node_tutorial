// 콜백함수

function fn02(callback){
    console.log('두번째 함수가 해야 할 일');
    if(callback){
        callback();
    }
}

function fn01() {
    console.log('첫번째 함수가 해야 할 일');
    
    setTimeout(function(){
        fn02(()=> {
            console.log('두번째 함수 호출이 끝나면 해야 할 일');
        });
    }, 1000);
    
    
    
}

(()=>{
    console.log('자동으로 호출');
})();

fn01();
