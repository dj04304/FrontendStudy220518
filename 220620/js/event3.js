window.addEventListener("load", () => {
    const newNode = document.createElement("div"); // div 태그생성
    const ball = document.querySelector(".ball");
    const body = document.body;
    // newNode.classList.add("box");
    newNode.setAttribute("class", "box");//속성값 set
    let a = newNode.getAttribute("class");
    console.log(a); //box class 추출
    
    newNode.innerText = "waiting event!!";
    
    //추가된 태그에 추가할 위치를 설정
    body.appendChild(newNode); //새로 생성된 태그를 body 에 추가. 마지막에
    
    ball.addEventListener("mouseover", () => {
        newNode.innerText ="mouseover event!!!"; //mouseover 했을 때, text출력
    });
    
    ball.addEventListener("mouseout", () => {
        newNode.innerText = "mouseout event!!!"; //mouseout 했을 때, text출력
    });

});