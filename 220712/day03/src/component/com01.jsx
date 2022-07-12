import React from "react";
import "./com01.css"

//함수형 컴퍼넌트 선언
function Com({text}) {
    return(
        <div className="com01">
            Com01 {text}
        </div>
    );
}

export default Com;