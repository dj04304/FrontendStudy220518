import React, {useEffect, useRef, useState} from "react";

import styles from '../css/main.module.css';
import styled from "styled-components";

import Contents from "./contents";
import Item from "./item";
import MoreItem from "./moreItem";
import Careers from "./careers";
import Footer from "./footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// add react-slick 설치


function MainCom() {
    //slick의 기본 속성

    const settings = {
        //dots: true, //이미지순서를 알려줌
        infinite: true,// loop 사용유뮤
        speed: 500, // 지나가는 속도
        autoplay:true, // 자동 실행 유뮤
        autoplaySpeed:20000,// 자동실행되는 속도
        slidesToShow: 1, //  한번에 보여줄 슬라이드쇼의 갯수
        slidesToScroll: 1 //  슬라이드로 넘김 갯수
    }

    return(
        <div>
            {/* contents 1 */}
            <div>
                <div>
                    <Slider {...settings}>
                        <div className={styles.video}>
                            <video src="/video/Hit2.mp4" autoPlay muted loop></video>
                        </div>
                        <div className={styles.video}>
                            <video src="/video/BlueArchive.mp4" autoPlay muted loop></video>
                        </div>
                        <div className={styles.video}>
                            <video src="/video/ProjectD.mp4" autoPlay muted loop></video>
                        </div>
                        <div className={styles.video}>
                            <video src="/video/ProjectMagnum.mp4" autoPlay muted loop></video>
                        </div>
                    </Slider>   
                </div>
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
            <Contents/>
            {/* content 3 */}
            <div className={styles.news}>
                <div className={styles.news_title}>
                    <h2>News</h2>
                    <div className={styles.more}>
                        <p>more</p>
                        <img src="/img/slide_next.png" alt="#"/>
                    </div>
                </div>
            </div>
            <MoreItem/>
            {/* content 4 */}
            <div className={styles.career}>
                <div className={styles.career_title}>
                    <h2>Careers</h2>
                    <div className={styles.more}>
                        <p>more</p>
                        <img src="/img/slide_next.png" alt="#"/>
                    </div>
                </div>
            </div>
            <Careers/>
            

            {/* video controller */}

            <div className={styles.controller}>
                <div className={styles.controller_group}>
                    <span className={styles.controller_btn}>
                        <img src="/img/video_next_btn.png" alt="#" />
                    </span>
                    <div className={styles.controller_bar}></div>
                    <p className={styles.controller_page}>01 / <span>04</span></p>
                </div>
            </div>

        </div>
        
    );
}

export default MainCom;