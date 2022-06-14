// 리터럴 표기를 이용한 객체 생성
const Car = {
    name:"소나타",
    color:"black",
    start: function() {
       return "시동을 켭니다." 
    }
}
console.log(Car)
console.log(Car.name);
console.log(Car.color);
console.log(Car.start());//속성안에 있는 함수를 호출

// 생성자를 이용한 객체 생성
// 장점: 객체를 여러개 만들기 편하다.


function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.sleep = function() {
        return `${this.name}가 잠을 잡니다.`;
    }
}
console.log("----------------------------------------");

//생성자 1
let rucy = new Dog("루시", "black");
console.log(rucy);
console.log(rucy.name);
console.log(rucy.color);
console.log(rucy.sleep());
console.log("");

//생성자 2
const poppy = new Dog("뽀삐", "흰색");
console.log(poppy);
console.log(poppy.name);
console.log(poppy.color);
console.log(poppy.sleep());

