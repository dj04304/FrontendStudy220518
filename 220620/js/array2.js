let c = 100;
let d = 200;

let test = (a, b) => {
    console.log(a)
    console.log(b)
}

test(c,d);

const object = {
    name: "혼자 공부하는 파이썬",
    price: 18000,
    publisher: "한빛미디어"
}

// 배열 내에 있는 값을 출력하기
const{name, price} = object;
console.log(name, price);

//배열 내에 있는 값을 변수에 담아 출력하기
const {a = name, b = price } = object;
console.log(a, b);
