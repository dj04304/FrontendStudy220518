import React from "react";

import Careers from "./careers";

import styles from '../css/employment.module.css';

function Employment() {

    return(
        <div className={styles.employment}>
            {/* employment 1 */}
            <div className={styles.employment_in}>
                <div className={styles.employment_menu}>
                    <h2>기업문화</h2>
                    <div className={styles.employment_menu_group}>
                        <img src="/img/news_home.png" alt="#" />
                        <span>Home</span>
                        <span className={styles.employment_media_span}>인재채용</span>
                        <span>기업문화</span>
                    </div>
                </div> 
                <Careers/>
                <p className={styles.employment_text}>
                    우리는 더 좋은 게임(Better Game)을 만들고 세상에 보여주기 위해 모였습니다. <br />
                    유저가 더 즐겁게 게임을 즐길 수 있도록, 세상보다 먼저 한 발자국 더 나아갑니다. <br />
                    넥슨 게임즈의 방식으로 더 좋은 게임을 만듭니다.
                </p>
            </div>
            {/* employment 2 */}
            <div className={styles.culture}>
                <h2 className={styles.culture_title}>넥슨게임즈가 일하는 방식</h2>
                <div className={styles.culture_group}>
                    <div className={styles.culture_group_in}>
                        <ul className={styles.culture_round}>
                            <li>
                                <div>
                                    <h2>유저중심</h2>
                                    <p>
                                        가장 먼저 유저 입장에서<br /> 
                                        생각합니다.
                                    </p>
                                    <span>User,First</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h2>용기</h2>
                                    <p>
                                        개척자로서의 <br />
                                        용기를 냅니다.
                                    </p>
                                    <span>
                                        Get up the Courage as <br />
                                        a Pathfinder
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h2>효율성</h2>
                                    <p>
                                        정말 필요한 일에 <br />
                                        집중합니다.
                                    </p>
                                    <span>No Waste</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h2>권한과 책임</h2>
                                    <p>
                                    자율적 조직 안에서 전문가들이 <br />
                                    스스로 일합니다.
                                    </p>
                                    <span>
                                        Empowered to Studios,<br />
                                        Self-Motivated Members
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <ul className={styles.culture_round}>
                            <li>
                                <div>
                                    <h2>주인의식/오너십</h2>
                                    <p>한 발자국 더 나아갑니다.</p>
                                    <span>One More Step Further</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h2>솔직함</h2>
                                    <p>솔직하게 말합니다.</p>
                                    <span>Honesty</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h2>커뮤니케이션/명확성</h2>
                                    <p>명확하게 커뮤니케이션 합니다.</p>
                                    <span>
                                        Be Clear and Always <br />
                                        Synchronized
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
            
        </div>
    );
}

export default Employment;