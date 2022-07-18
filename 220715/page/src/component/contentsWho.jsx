import React from "react";
import styles from './contentsWho.module.css';

function Who() {
    return(
        <div className={styles.container}>
            <div className="main_who">
                <h2 className={styles.who_we_are}>Who we are</h2>
                <div className={styles.info}>
                    <img src="/img/man.png" alt="#" />
                    <div>
                        <span>interviewee.</span>
                        <h2>윤진홍 님<span>아트실 캐릭터팀</span></h2>
                        <h3>"제안하고 논의하며 성장합니다."</h3>
                        <p>
                            우리는 같은 장르, 전형적인 룰로 게임을 만들지 않아요.<br></br>
                            타 장르의 재미요소와 게임 외 재미들을 융합해 새로운 재미를 만듭니다.<br></br>
                            제 아이디어가 개발로 이어지기도, 이어지지 않기도 하지만,<br></br>
                            뛰어난 동료들과 함께 논의하는 과정에서 매일 한 걸음 씩 더 성장합을 느껴요. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Who;