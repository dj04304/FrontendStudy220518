//tag 이름으로 접근 getElementsByTagName
const tag = document.getElementsByTagName("li"); //li tag를 지정해 변수 선언
console.log(tag);
console.log(tag[1]);
console.log(tag.length);


//for문을 이용해 배열을 불러와 li 전체에 색을 줌
for(let i = 0; i < tag.length; i++){
    tag[i].style.backgroundColor = "#666";
    tag[i].style.color = "white";
}



//class 이름으로 접근 getElementsByClassName
const html = document.getElementsByClassName("html"); //html class 를 지정해 변수 선언
console.log(html);
console.log(html[0]);
//html class의 위치를 정해 색깔을 줄 수 있다.
html[0].style.backgroundColor = "blue";
html[1].style.backgroundColor = "red";
html[2].style.backgroundColor = "brown";

//id로 접근
const tutorial = document.getElementById("tutorial"); //tutorial id를 지정해 변수 선언

tutorial.style.backgroundColor = "black";

//css 기법으로 첫번째 노드 선택 querySelector
const css = document.querySelector("#tutorial > li") //li 를 변수 선언(첫번째 노드만)
css.style.backgroundColor = "pink";

//css 기법으로 전체 노드 선택 querySelectorAll
const css2 = document.querySelectorAll("#tutorial > li") //li를 변수 선언(전체)

for(let i = 0; i < css2.length; i++){
    css2[i].style.backgroundColor = "pink";
    let html1 = css2[i].textContent === "HTML"
    let css3 = css2[i].textContent === "CSS"
    if(html1 || css3){
        css2[i].style.backgroundColor = "red";
    }
}


