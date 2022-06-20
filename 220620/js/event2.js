// window.addEventListener("load", () => {
//     const ball = document.querySelector(".ball"); //class ball 선언

//     //mouseover 이벤트 mouse를 올렸을 때 on 추가
//     ball.addEventListener("mouseover", (e) => {
//         e.target.classList.add("on");
//     });

//     //mouseout 이벤트 mouse가 영역 밖으로 나갔을 때 on 제거
//     ball.addEventListener("mouseout", (e) => {
//         e.target.classList.remove("on");
//     });

// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const ball = document.querySelector(".ball");
const on = document.querySelector(".on");

ball.onmouseover = () => {
    ball.classList.toggle("on");
}

ball.onmouseout = () => {
    ball.classList.toggle("on");
}