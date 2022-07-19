import React from "react";
import styled from './mainCom.module.css';

import Footer from "./footer";
import Best from './best';


function MainCom() {
    return(
        <div>
            <div className={styled.mainImg}>
                {/* <img src="img/main_img.jpg" alt="#" /> */}
            </div>
            <div className={styled.contents}>
                <div className={styled.best}></div>
                <div className={styled.brand}></div>
                <div className={styled.coupon}></div>
                <div className={styled.event}></div>
            </div>
        
            <Footer/>
        </div>
        
    );
}

export default MainCom;