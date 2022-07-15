import React, { useState } from 'react';
import style from './index.module.css';

const Input = (props) => {
    const [input, setInput] = useState('');
    const [focus, setFocus] = useState(false);

    const onChangeHandler = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className={`${style.container}`}>
            <label
                className={`${input.length > 0 ? style.labelUp : style.label}`}
                htmlFor={`${props.name}`}
            >
                {props.placeholder}
            </label>
            <input
                className={`${style.input}`}
                name={`${props.name}`}
                id={`${props.name}`}
                value={input}
                type={`${props.type}`}
                // placeholder={props.placeholder}
                onChange={onChangeHandler}
            ></input>
        </div>
    );
};

export default Input;
