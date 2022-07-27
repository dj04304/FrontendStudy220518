import React, {Component} from "react";
import {Link, Route} from 'react-router-dom';

class Fulldown extends React.Component {
    componentDidMount(){
        const nav = document.querySelectorAll(".nav li");
        const subnav = document.querySelector(".fulldownNav")
        const subnavTex = document.querySelector(".fulldownNav_in")
        console.log(nav);
        console.log(subnav);

        for(let i = 0; i < nav.length; i++){
            nav[i].onmouseover = () => {
                subnav.classList.add("on");
                subnavTex.classList.add("act");
            }
        }

        for(let i = 0; i < nav.length; i++){
            subnav.onmouseleave = () => {
            subnav.classList.remove("on");
            subnavTex.classList.remove("act");
            }
        }


    }

    render() {
        return(
            <div className='fulldownNav'>
                <div className="fulldownNav_in">
                    <div className='fulldownNav_in_text'>
                    <ul>
                        <li>넥슨게임즈</li>
                    </ul>
                    <ul>
                        <li>V4</li>
                        <li>서든어택</li>
                        <li>블루아카이브</li>
                        <li>HIT2</li>
                        <li>베일드 엑스퍼트</li>
                        <li>퍼스트 디센던트</li>
                        <li>프로젝트 ZEUS</li>
                    </ul>
                    <ul>
                        <li>기업문화</li>
                        <li>피플</li>
                        <li>복지</li>
                        <li>채용</li>
                    </ul>
                    <ul>
                        <li>기업지배구조</li>
                        <li>주가정보</li>
                        <li>재무정보</li>
                        <li>공시/공고</li>
                    </ul>
                    <ul>
                        <li>뉴스</li>
                        <li>보도자료</li>
                        <li>Multimedia</li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fulldown;