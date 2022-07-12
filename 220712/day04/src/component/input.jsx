import React, {useState} from "react";


function Input () {
    const [text, setText] = useState('');
    
    const onChange = (e) => {
        setText(e.target.value);
    }


    const onReset = () => {
        setText("");
    }

    return(
        <div>
            <input onChange={onChange} type="text" value={text}/>
            <button onClick={onReset} type="button">reset</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default Input;