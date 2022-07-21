import React from "react";

import styles from '../css/item.module.css';


function MediaNews({user}) {
    return (
        <div className={styles.news_group}>
            <img src={user.src} alt={user.title} />
            <div className={styles.news_title}>
                <p>{user.title}</p>
                <span></span>
                <p className={styles.news_period}>{user.period}</p>
            </div>
            <h4>{user.mainTitle}</h4>
            <p className={styles.news_group_text}>{user.text}</p>
        </div>
    );
}


function Item() {


    const medias01 = [
        {
            id: 1,
            src: "/img/content_img01.png",
            title: "블루아카이브",
            period: "2022.07.20",
            mainTitle: "'미래시'로'미래'밝힌 블루 아카이브",
            text: "일본 블루 아카이브가 향후 업데이트 계획을 공개했다. 콘텐츠 분량과 이벤트 내용 모두 역대급 수준이다."
        
        },{
            id: 2,
            src: "/img/content_img02.png",
            title: "NEXON HIT2",
            period: "2022.07.20",
            mainTitle: "넥슨게임즈 '히트2', 원작과 무엇이 다를까?",
            text: "넥슨이 올해 하반기 정식 출시를 예고하며 지난달 30일 사전 등록에 돌입한 ‘히트2(HIT2)’에 대한 개발 비..."
        },{
            id: 3,
            src: "/img/content_img03.png",
            title: "퍼스트 디센던트",
            period: "2022.07.19",
            mainTitle: "퍼스트 디센던트, 한국산 '루트슈터'가 온다",
            text: "루트슈터는 온도차가 확실한 장르다. 해외와 달리 국내는 아직 이렇다 할 히트작이 없다.  ..."
        }
    ]

    const medias02 = [
        {
            id: 4,
            src: "/img/content_img04.png",
            title: "넥슨게임즈",
            period: "2022.07.21",
            mainTitle: "평생직장 넥슨게임즈? 퇴사율 1%대...개발자 마음 사로잡은 비결은",
            text: "넥슨의 핵심 개발사 넥슨게임즈가 낮은 퇴사율로 주목 받고 있다. 20일 기업정보 제공사이트 '..."
        
        },{
            id: 5,
            src: "/img/content_img05.png",
            title: "블루아카이브",
            period: "2022.07.19",
            mainTitle: "넥슨 '블루 아카이브' 여름맞이 팬심 집중 공략",
            text: "넥슨이 '블루 아카이브'의 첫 오프라인 행사 참가 등 유저와 접점 확대에 나서 호응을 얻을지 주목된다. ..."
        },{
            id: 6,
            src: "/img/content_img06.png",
            title: "넥슨게임즈",
            period: "2022.07.19",
            mainTitle: "MMORPG에 이은 슈터 게임의 불꽃튀는 격돌…최후에 웃는 게임은?",
            text: "국내에서 슈팅 게임은 ‘서든어택’과 ‘배틀그라운드’, ‘오버워치’ 등이 치열하게 경쟁해 왔다. 여기에 올해에는 ..."
        }
    ]

    return(
        <div className={styles.main}>
            <div className={styles.news}>
                    {medias01.map((user, index) => (
                        <MediaNews user={user} key={index}/>
                    ))}            
            </div>
            <div className={styles.news}>
                    {medias02.map((user, index) => (
                        <MediaNews user={user} key={index}/>
                    ))}            
            </div>
        </div>
        
    );
}

export default Item;