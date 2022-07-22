import React from "react";

import styled from '../css/item.module.css';


function MediaNews({user}) {
    return (
        <div className={styled.news_group}>
            <img src={user.src} alt={user.title} />
            <div className={styled.news_title}>
                <p>{user.title}</p>
                <span></span>
                <p className={styled.news_period}>{user.period}</p>
            </div>
            <h4>{user.mainTitle}</h4>
            <p className={styled.news_group_text}>{user.text}</p>
        </div>
    );
}


function MoreItem() {

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

    return(
        <div className={styled.news}>
                {medias01.map((user, index) => (
                    <MediaNews user={user} key={index}/>
                ))}            
        </div>
    );
}

export default MoreItem;