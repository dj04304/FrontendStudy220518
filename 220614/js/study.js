// var

var num1 = 10; //전역변수 num

function func1() {
    console.log(num1); //10
    num1=20;
}

func1();
console.log(num1); //20

var num2 = 30; //num2 선언

function func2() {
    var num2 = 40;//지역변수 선언 40
    console.log(`num2: ${num2}`);
    // 안에서 새로 선언하면, 전역변수는 변하지 않는것을 볼 수 있다.
}

func2();
console.log(`num2: ${num2}`); //전역변수 30


var num3 = 50;

if(num3 == 50){
    num3 = 100;
    console.log(`num3: ${num3}`);
}

console.log(num3);

var num4 = 50;

if(num4 == 50){
    var num4 = 100;
    console.log(`num4: ${num4}`); //100출력
}

// var의 단점: 50이 출력되야 하나, 100이 출력된다. 젤 위의 예시와 비교해보면 모순이 드러남.
console.log(num4); //100출력

// let

let num5 = 50;
if(num5 == 50){
    let num5 = 100;
    console.log(`num5: ${num5}`); //100
}

console.log(num5); //50출력