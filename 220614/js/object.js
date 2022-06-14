const dog = {
    name:"루시",
    age:10,
    color:"white",
    weight:3.5,
}
console.log(dog);
console.log("");
// 호출
console.log(dog.name);
console.log(dog.age);
console.log(dog.color);
console.log(dog.weight);
console.log("");
// 대괄호를 이용한 호출
console.log(dog["name"]);
console.log(dog["age"]);
console.log(dog["color"]);
console.log(dog["weight"]);
console.log("");
let arr = [10, 20, 30, 40, 50];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    console.log(`index의 값: ${i}`);
}

console.log("");
for(let i in arr){
    console.log(arr[i]);
    console.log(`index의 값: ${i}`);
}
console.log("===================================================================");

for(let i in dog){
    console.log(i);
    console.log(dog[i]);
}

