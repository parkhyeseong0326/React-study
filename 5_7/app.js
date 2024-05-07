const 함수 = function() {
    console.log("함수 내부 코드입니다..")
    console.log("함수 내부 코드입니다..")
    console.log("함수 내부 코드입니다..")
}
함수();
console.log(typeof(함수()));
console.log(함수());

function 함수1() {
    console.log("함수 1 입니다...");
}
함수1();
let a = prompt('string 문자열을 넣으면');
console.log(a);

function min(array) {
    let output = array[0];
    for (const item of array){
        if (output < item) {
            output = item;
        }
    }
    return output
}

function sample(...items){
    console.log(items);
}
sample(1,2);
sample(3,4,5,6,7);

function min(...items) {
    let output = items;
    for (const item of items){
        if (output > item){
            output = item
        }
    }
    return output
}
console.log(min(33,22,11,55,52));

function sample2 (a,b,...c) {
    console.log(sample2(a,b,c));
}

console.log(Array.isArray(testArray));

function prt (...items) {
    console.log(items);
}

const array = [1,2,3,4];

console.log("전개ㅐ 연산자를 사용하지 않을 경우");
prt(array);
console.log("전개 연산자를 사용할 경우");
prt(...array);

function earning (name, wage = 5000, hours = 40) {
    console.log(`${name} 님의 정보`);
    console.log(`${name} 님의 급여 ${wage}`);
    console.log(`${name} 님의 근로시간 ${hours}`);
}

earning('서정훈');
earning('서정훈', 10000);
earning('서정훈', 10000, 50);

let numbers1 = [263,11,103,32,12];
numbers1 = numbers1.map(function (value, index, array){
    return value = value
});

numbers1.forEach(console.log);


const numbers2 = [0,1,2,3,4,5];
const evenNumbers = numbers2.filter(function (value) {
    return value % 2 === 0
});


let numbers3 = [0,1,2,3,4,5,6,7,8,9];

numbers3
    .filter((value) => value % 2 === 0)
    .map((value) => value * value)
    .forEach((value) => {
        console.log(value);
    });