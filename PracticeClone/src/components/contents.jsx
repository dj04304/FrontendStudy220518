import React from "react";

import styles from '../css/contents.module.css';

function Contents() {
    return(
        <div className={styles.contents}>
            <div className={styles.contents_group}>
                <h2 className={styles.who_we_Are}>Who We Are</h2>
                <div className={styles.contents_imgGroup}>
                    <img className={styles.man} src="/img/man.png" alt="#" />
                    <div className={styles.contents_textGroup}>
                        <span className={styles.interview}>interviewee.</span>
                        <h2>박준형 님 <span className={styles.team}>아트실 캐릭터팀</span></h2>
                        <h3>"제안하고 논의하며 성장합니다."</h3>
                        <p className={styles.contents_text}>
                            우리는 같은 장르, 전형적인 룰로 게임을 만들지 않아요.<br/>
                            타 장르의 재미요소와 게임 외 재미들을 융합해 새로운 재미를 만듭니다.<br/>
                            제 아이디어가 개발로 이어지기도, 이어지지도 않지만<br/>
                            뛰어난 동료들과 함께 논의하는 과정에서 매일 한 걸음씩 더 성장함을 느껴요.
                        </p>
                        <div className={styles.arrow_group}>
                            <img src="/img/slide_prev.png" alt="#" />
                            <p>prev</p>
                            <span className={styles.arrow_line}></span>
                            <p>next</p>
                            <img src="/img/slide_next.png" alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Contents;