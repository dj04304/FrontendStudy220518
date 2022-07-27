import React from "react";

import NexonMap from "./nexonMap";

import styles from '../css/nexonGames.module.css';


function NexonGames() {
    return(
    <div className={styles.main}>
        <div className={styles.main_in}>
            <div className={styles.main_img}>
                <div className={styles.main_img_in}>
                    <div className={styles.span_group}>
                        <span><img src="/img/home_visual_white.png" alt="#" /></span>
                        <span>HOME</span>
                        <span>넥슨게임즈</span>
                    </div>
                </div>
                <div className={styles.main_img_text}>
                    <h3>넥슨게임즈</h3>
                    <p>일상을 뛰어넘는 참신한 재미를 만듭니다.</p>
                    <p>놀라운 경험을 선사하는 새로운 세계를 창조합니다.</p>
                </div>
            </div>
            <div className={styles.content_info_text}>
                <p>
                넥슨게임즈는 넥슨 컴퍼니의 게임 개발사로서, PC, 모바일, 콘솔 플랫폼을 아우르는<br /> 
                다양한 장르의 게임을 개발, 국내는 물론 세계 각국에 선보이고 있습니다.<br />
                넥슨게임즈는 기존의 게임보다 한층 돋보이는 재미를 담은 다양한 신작들을 통해 한국을 넘어<br />
                세계로부터 주목받는 글로벌 개발사로 성장해 나갈 것입니다.
                </p>
                <span></span>
            </div>
            <h2 className={styles.title}>우리의 비전</h2>
            <div className={styles.vision_img}>
                <div className={styles.vision_img_group}>
                    <div className={styles.vision_title}>
                        <span className={styles.line}></span>
                        <h3>We make games better</h3>
                        <span className={styles.line}></span>
                    </div>
                    <p className={styles.vision_text}>
                    우리는 더 좋은 게임(Better Game)을 만들고 세상에 보여주기 위해 모였습니다. <br />
                    유저가 더 즐겁게 게임을 즐길 수 있도록, 세상보다 먼저 한 발자국 더 나아갑니다.<br />
                    넥슨게임즈의 방식으로 더 좋은 게임을 만듭니다.
                    </p>
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.title}>게이머와 함께 걸어온 길</h2>
                <span></span>
                <div className={styles.road_section}>
                    <div className={styles.road01}>
                        <img src="/img/road_img01.png" alt="서든어택" />
                        <div className={styles.road01_in}>
                            <div className={styles.road01_text}>
                                <h3>서든어택</h3>
                                <p>2006년 대한민국 게임대상 <br />
                                <span>온라인게임 우수상</span></p>
                                <p>누적 회원 수 <span>3,000만 명</span> <br />
                                    동시 접속자 수 최고 <span>26만 명</span></p>
                            </div>
                            <img className={styles.line_img01} src="/img/road_line01.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.road02}>
                        <img src="/img/road_img02.png" alt="서든어택" />
                        <div className={styles.road02_in}>
                            <div className={styles.road02_text}>
                                <h3>HIT</h3>
                                <p>2016년 대한민국 게임대상 <br />
                                <span>대상(대통령상) 인기게임상</span></p>
                                <p>정식 오픈 후 15일 만에 <span>200만</span>다운로드 돌파</p>
                            </div>
                            <img className={styles.line_img02} src="/img/road_line02.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.road03}>
                        <img src="/img/road_img03.png" alt="서든어택" />
                        <div className={styles.road03_in}>
                            <div className={styles.road03_text}>
                                <h3>AxE</h3>
                                <p>2017년 대한민국 게임대상</p>
                                <span>모바일게임 우수상
                                    기술창작상 게임기획/시나리오 부문</span><br />
                                <p>출시 3일만에 누적 다운로드 <span>100만건 돌파</span><br />
                                100일 후 다운로드 <span>300만 돌파</span>
                                </p>
                            </div>
                            <img className={styles.line_img03} src="/img/road_line03.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.road04}>
                        <img src="/img/road_img04.png" alt="서든어택" />
                        <div className={styles.road04_in}>
                            <div className={styles.road04_text}>
                                <h3>오버히트</h3>
                                <p>오픈하루만에 구글 플레이 및 애플스토어 <br />
                                <span>인기 1위 기록</span></p>
                            </div>
                            <img className={styles.line_img04} src="/img/road_line04.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.road05}>
                        <img src="/img/road_img05.png" alt="서든어택" />
                        <div className={styles.road05_in}>
                            <div className={styles.road05_text}>
                                <h3>V4</h3>
                                <div className={styles.road05_text_group}>
                                    <p>2020년 대한민국 게임대상</p>
                                    <div className={styles.road05_span_group}>
                                        <span>대상(대통령상)</span>
                                        <span>사운드 분야 기술·창작상</span>
                                        <span>그래픽 분야 기술·창작상</span>
                                        <span>우수 개발자상(기획/시나리오 부문)</span>
                                    </div>
                                    <div>
                                        <p>한국, 일본, 태국 구글플레이 및 애플 앱스토어 <br />
                                        <span>인기 순위 1위 기록</span>
                                        </p>
                                    </div>
                                </div>     
                            </div>
                            <img className={styles.line_img05} src="/img/road_line05.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.road06}>
                        <img src="/img/road_img06.png" alt="서든어택" />
                        <div className={styles.road06_in}>
                            <div className={styles.road06_text}>
                                <h3>블루아카이브</h3>
                                <p>한국 구글플레이, 애플 앱스토어, 원스토어 <br />
                                <span>인기순위 1위 기록</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* location */}
                <div>
                    <div>
                        <h2 className={styles.title}>CONTACT US</h2>
                        <ul className={styles.address_group}>
                            <li>
                                <img src="/img/mail_icon.png" alt="" />
                                <span>dj43045@gmail.com</span>
                            </li>
                            <li>
                                <img src="/img/call_icon.png" alt="" />
                                <span>010.****.****</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <NexonMap/>
    </div>
    );
}

export default NexonGames;