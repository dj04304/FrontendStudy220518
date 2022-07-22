import React from "react";

import styles from '../css/employment.module.css';

function Careers() {
    return(
        <div className={styles.careers}> 
            <img src="/img/careers_visual.jpg" alt="careers_visual"/>
            <div className={styles.careers_text}>
                <p className={styles.careers_text_in}> 
                    새로운 재미, 교류와 공감의 세계를 창조할<br/>
                    게이머들과 함께하고 싶습니다.
                </p>
            </div>
        </div>
    );
}

export default Careers;