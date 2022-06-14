const Dog1 = class {
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
        this.family = "포메리안";
    }
    play(){
        return `${this.name}이(가) 즐겁게 놉니다.`;
    }
}

    const rucy1 = new Dog1("루시1", 10, "흰색");
    console.log(rucy1);
    console.log(rucy1.name);
    console.log(rucy1.age);
    console.log(rucy1.color);
    console.log(rucy1.family);
    console.log(rucy1.play());
    console.log("")
    //값 수정
    rucy1.age = 11;
    console.log(rucy1.age);