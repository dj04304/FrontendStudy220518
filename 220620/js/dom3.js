window.addEventListener("load", () => {
    const ball = document.querySelector(".ball");

    ball.addEventListener("dblclick", (e) => { //더블클릭 이벤트
        e.target.classList.toggle("on")
    });
});