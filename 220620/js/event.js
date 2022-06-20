window.addEventListener("load", () => {
    const btns = document.querySelectorAll("button");
    const ball = document.querySelector(".ball");  
    let x = 200;
    let y = 200;

    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", (e) => {
          let idName = e.target.id;

            if(idName == "left"){ //왼쪽으로 이동
                x = x - 20;
            }else if(idName == "right"){ //오른쪽으로 이동
                x = x + 20;
            }else if(idName == "top"){ //위쪽으로 이동
                y = y - 20;
            }else if(idName == "bottom"){ //아래쪽으로 이동
                y = y + 20;
            }

            ball.style.left = x + "px";
            ball.style.top = y + "px";

        })
    }

});