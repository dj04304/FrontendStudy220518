import React from "react";

import styles from '../css/news.module.css';

import Item from "./item";

function News() {

    return(
        <div className={styles.media}>
            <div className={styles.news_title}>
                <div className={styles.news_menu}>
                    <div className={styles.news_menu_group}>
                        <img src="/img/news_home.png" alt="#" />
                        <span>Home</span>
                        <span className={styles.menu_media_span}>미디어</span>
                        <span>뉴스</span>
                    </div>
                </div>
                <div className={styles.category}>
                    <h2>뉴스</h2>
                    <div className={styles.category_search}>
                        <select name="category" id="">
                            <option value="cate">전체 카테고리</option>
                            <option value="game">넥슨 게임즈</option>
                            <option value="game">V4</option>
                            <option value="game">서든어택</option>
                            <option value="game">블루아카이브</option>
                            <option value="game">HIT2</option>
                            <option value="game">베일드 엑스퍼트</option>
                            <option value="game">퍼스드 디센던트</option>
                        </select>
                        <div className={styles.category_input_box}>
                            <input type="text" name="" id="" placeholder="검색어를 입력해주세요"/>
                            <button type="button">
                                <span>
                                    <img src="/img/search_icon.png" alt="" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* news */}
            <Item/>
        </div>
    );
}

export default News;