import React from "react";
import style from "./main.module.css";

function Main() {
    return(
        <div className={style.main}>
            <video className={style.video} src="video/hit2.mp4" autoPlay muted loop></video>
        </div>
    
    )
}

export default Main;