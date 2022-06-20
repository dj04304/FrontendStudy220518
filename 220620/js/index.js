
// 객체 생성
const object = {
    name: "혼자 공부하는 파이썬",
    price: 18000,
    publisher: "한빛 미디어"
}

// if문
if(object.name !== undefined) {
    console.log("name 속성이 있습니다.")
} else {
    console.log("name 속성이 없습니다.")
}

if(object.author !== undefined) {
    console.log("author 속성이 있습니다.")
} else {
    console.log("author 속성이 없습니다.")
}


//삼항 연산자
object.name = object.name !== undefined ? object.name : "name을 찾을 수 없습니다.";
object.author = object.author !== undefined ? object.author : "author을 찾을 수 없습니다.";


console.log(object.name) // name 출력
console.log(object.author) // author를 찾을 수 없습니다. 출력


