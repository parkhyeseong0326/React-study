setTimeout(() => {
    console.log('1초마다 실행됩니다.')
}, i*1000)

let count = 0;
setInterval(()=> {
    console.log(`1초마다 실행됩니다.(${count}번째 시행)`);
    count++
}, 1 * 1000);

let id
let count2 = 0
id = setInterval(() => {
    console.log(`1초마다 실행됩니다2(${count2}반째)`);
    count2++
}, 1 * 1000);
console.log(`타이머 id는 ${id}`);
setTimeout(()=> {
    console.log(`타이머를 종료합니다.`)
    clearInterval(id);
},5*1000);





let pi = 3.14
console.log(`main.js의 pi는${pi}`);




function sample() {
    let pi = 3.141592
    console.log(`test.js의 pi는 ${pi} 입니다.`);
}
sample();


let 익명_함수
익명_함수 = function() {
    console.log('1번째 익명 함수 입니다.')
}
익명_함수 = function() {
    console.log('2번째 익명 함수 입니다.')
}
익명_함수();

