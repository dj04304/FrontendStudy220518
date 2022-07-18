import React from "react";
import styles from "./contents.module.css";

function Contents() {
    return(
        <div className={styles.container}>
            <div className={styles.mainText}>
                <h4>We Make Games Better</h4>
                <h2>NEXON GAMES</h2>
                <span></span>
            </div>
            <div className={styles.main_mid_content}>
                <div className={styles.subText}>
                    <p>우리는 더 좋은 게임(Better Game)을<br></br>
                        만들고 세상에 보여주기 위해 모였습니다.
                    </p>
                    <p>
                        유저가 더 즐겁게 게임을 즐길 수 있도록,<br></br>
                        세상보다 먼저 한 발자국 더 나아갑니다.
                    </p>
                    <p>
                        넥슨게임즈의 방식으로<br></br>
                        더 좋은 게임을 만듭니다.
                    </p>
                </div>
                <div>
                    <img src="img/main_mid_img_01_new.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contents;