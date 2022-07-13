import React from "react";
import "./createUser.css"

function CreateUser({username, email, onChange, onCreate}){
    return(
        <div className="input-group">
            <div className="input-tag">
                <input name= "username" type="text" onChange={onChange} value={username} placeholder="이름을 입력하세요"/>
                <input name= "email" type="email" onChange={onChange} value={email} placeholder="이메일을 입력하세요"/>
            </div>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}


export default CreateUser;