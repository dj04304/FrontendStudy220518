import React from "react";
import styles from "./header.module.css";


function Header() {
    return(
        <div className={styles.header}>
            <div>
                <h1>NEXON</h1>
                <p>GAMES</p>
            </div>
            <nav>
                <ul className={styles.nav_in}>
                    <li>넥슨게임즈</li>
                    <li>게임</li>
                    <li>인재채용</li>
                    <li>투자정보</li>
                    <li>미디어</li>
                </ul>
            </nav>
            <ul className={styles.language}>
                <li>KOR</li>
                <li>ENG</li>
            </ul>
            
        </div>
    )
}

export default Header;