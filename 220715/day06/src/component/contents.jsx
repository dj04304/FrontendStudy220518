import React from "react";
import styles from "./contents.module.css";

//내부에서 컴포넌트 선언하는 모듈 연결
import styled from "styled-components";

const Block = styled.div
`
    width: 100%;
    height: 200px;

    background-color: cadetblue;
`

const Btn = styled.button
`
    width: 200px;
    height: 200px;

    background-color: blueviolet;
    cursor:pointer;
    &:hover{
        background-color: cornflowerblue;
    }

`
//&:hover 는 자신한테 hover해주는 역할


function Contents() {
    return(
        <div>
            <div className={styles.header}></div>
            <Block/>
            <Btn/>
        </div>
    )
}

export default Contents;