import React from "react";
import { Link, Route } from 'react-router-dom';

import styles from '../css/footer.module.css';

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footer_in}>
                <div className={styles.footer_address}>
                    <img src="/img/footer_logo.png" alt="" />
                    <p>
                        넥슨게임즈 SEOUL<br/>
                        서울특별시 강남구 남부순환로 2621 디앤오 강남빌딩 5층
                    </p>
                    <p>
                        넥슨게임즈 PANGYO<br/>
                        경기 성남시 분당구 판교로 256번길 25 판교 테크노벨리
                    </p>
                </div>
                <div className={styles.footer_nav}>
                    <ul className={styles.footer_link}>
                        <li>
                            <Link to='/components/nexonGames'>넥슨게임즈</Link>
                            <ul className={styles.footer_link_in}>
                                <li>넥슨게임즈</li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/components/games'>게임</Link>
                            <ul className={styles.footer_link_in}>
                                <li>V4</li>
                                <li>서든어택</li>
                                <li>블루아카이브</li>
                                <li>HIT2</li>
                                <li>베일드 엑스퍼트</li>
                                <li>퍼스트 디센던트</li>
                                <li>프로젝트 ZEUS</li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/components/employment'>인재채용</Link>
                            <ul className={styles.footer_link_in}>
                                <li>기업문화</li>
                                <li>피플</li>
                                <li>복지</li>
                                <li>채용</li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/components/investment'>투자정보</Link>
                            <ul className={styles.footer_link_in}>
                                <li>기업지배구조</li>
                                <li>주가정보</li>
                                <li>재무정보</li>
                                <li>공시/공고</li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/components/news'>미디어</Link>
                            <ul className={styles.footer_link_in}>
                                <li>뉴스</li>
                                <li>보도자료</li>
                                <li>Multimedia</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_line}>
                <div className={styles.footer_line_in}>
                    <p>
                        ⓒ Nexon Games. All Rights Reserved.
                    </p>
                    <button>관련 사이트</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;