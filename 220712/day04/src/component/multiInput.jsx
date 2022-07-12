import React, {useState, useRef} from "react";
import "../static/css/multiInput.css";

function MultiInput () {
    const [inputs, setInputs] = useState({
        userId: '',
        name:''
    });

    const userIdInput = useRef(); //특정 dom 선택
    const {userId, name} = inputs; // 비구조화 할당을 통해 값을 전달
    
    const onChange = (e) => {
        const {value, name} = e.target; //name과 value값을 가져온다.
        setInputs({
            ...inputs, //객체를 복사
            [name]: value
        });
    }


    const onReset = () => {
        setInputs({
            userId: "",
            name: "" 
        });
    }

    userIdInput.current.focus();

    return(
        <form action="method">
            <div>
                <div className="signIn-group">
                    <div className="input-group">
                        <input onChange={onChange} name="userId" type="text" value={userId} placeholder="아이디" ref={userIdInput}/>
                        <input onChange={onChange} name="name" type="text" value={name} placeholder="이름"/>
                    </div>
                    <button onClick={onReset} type="reset">reset</button>
                </div>
                <div>
                    <b>아이디: {userId}</b>, <b>이름: {name}</b>
                </div>
            </div>
        </form>
    );
}

export default MultiInput;