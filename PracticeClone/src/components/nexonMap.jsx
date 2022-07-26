import React from "react";
import styles from '../css/nexonMap.module.css';

function NexonMap() {
    return(
        <div className={styles.main_map}>
            <div className={styles.main_map_in}>
                <div className={styles.map_seoul}>
                    <h2>넥슨게임즈 SEOUL</h2>
                    <p>서울특별시 강남구 남부순환로 2621 디앤오 강남빌딩 5층</p>
                    <div className={styles.map_seoul_img}>지도01</div>
                </div>
                <div className={styles.map_pangyo}>
                    <h2>넥슨게임즈 PANGYO</h2>
                    <p>경기 성남시 분당구 판교로 256번길 25 판교 테크노벨리</p>
                    <div className={styles.map_pangyo_img}>지도02</div>
                </div>
            </div>
        </div>
    )
}

export default NexonMap;