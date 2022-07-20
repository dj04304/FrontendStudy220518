import React from "react";


import styles from '../css/main.module.css';

import Footer from "./footer";


function MainCom() {
    return(
        <div>
            {/* contents 1 */}
            <div>
                <video src="/video/Hit2.mp4" autoPlay muted loop></video>
                <div className={styles.main}>
                    <div className={styles.main_title}>
                        <h4>We Make Games Better</h4>
                        <h2>NEXON GAMES</h2>
                        <span></span>
                    </div>
                    <div className={styles.main_group}>
                        <div className={styles.main_text}>
                            <p>우리는 더 좋은 게임(Better Game)을 <br/>
                                만들고 세상에 보여주기 위해 모였습니다.
                            </p>
                            <p>
                                유저가 더 즐겁게 게임을 즐길 수 있도록,<br/>
                                세상보다 먼저 한 발자국 더 나아갑니다.
                            </p>
                            <p>
                                넥슨게임즈의 방식으로<br/>
                                더 좋은 게임을 만듭니다.
                            </p>
                        </div>
                        <img src="img/main_mid_img_01_new.png" alt="#"/>
                    </div>
                </div>
            </div>
            {/* content 2 */}
            <div className={styles.contents}>
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
            {/* content 3 */}
            <div>
                <div>
                    <h2>News</h2>
                    <div>
                        <p>more</p>
                        <img src="/img/slide_next.png" alt="#"/>
                    </div>
                    <div className={styles.news}>
                        <div>
                            <img src="/img/content_img01.png" alt="블루아카이브" />
                            <div>
                                <p>블루아카이브</p>
                                <span></span>
                                <p>2022.07.20</p>
                            </div>
                            <h4>'미래시'로'미래'밝힌 블루 아카이브</h4>
                            <p>
                                일본 블루 아카이브가 향후 업데이트 계획을 공개했다.
                                콘텐츠 분량과 이벤트 내용 모두 역대급 수준이다.
                            </p>
                        </div>
                        <div>
                            <img src="/img/content_img02.png" alt="블루아카이브" />
                            <div>
                                <p>블루아카이브</p>
                                <span></span>
                                <p>2022.07.20</p>
                            </div>
                            <h4>'미래시'로'미래'밝힌 블루 아카이브</h4>
                            <p>
                                일본 블루 아카이브가 향후 업데이트 계획을 공개했다.
                                콘텐츠 분량과 이벤트 내용 모두 역대급 수준이다.
                            </p>
                        </div>
                        <div>
                            <img src="/img/content_img03.png" alt="블루아카이브" />
                            <div>
                                <p>블루아카이브</p>
                                <span></span>
                                <p>2022.07.20</p>
                            </div>
                            <h4>'미래시'로'미래'밝힌 블루 아카이브</h4>
                            <p>
                                일본 블루 아카이브가 향후 업데이트 계획을 공개했다.
                                콘텐츠 분량과 이벤트 내용 모두 역대급 수준이다.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        
    );
}

export default MainCom;