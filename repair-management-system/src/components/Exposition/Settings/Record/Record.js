import React, { useState } from 'react';
import style from './Record.module.css';
import axios from 'axios';

const Settings = (props) => {
    const [buttonHidden, setButtonHidden] = useState(true);
    const [initValue, setInitValue] = useState(() => props.value);

    const onChangeHandler = (event) => props.onChangeHandler && props.onChangeHandler(event.target.value);

    const onSave = (value) => {
        props.onSave(value);
    }
    
    const onFocus = (target, background) => {
        target.style.background = background.backgroundColor;
        target.style.color = "white";
    }
    
    const focusOut = (target, background) => {
        target.style.background = background.backgroundColor;
        target.style.color = "black";
        if(target.value === "" || initValue === target.value) {
           setButtonHidden(true);
           props.onSave("");
        }
    }

    return (
        <div className={style.setingsRecord}>
            <p className={props.onChangeHandler ? 
                [style.p, style.whiteTitle].join(' ') :
                [style.p, style.grayTitle].join(' ')}>{props.title}:</p>
            <input
                className={props.onChangeHandler ?
                    [style.input, style.canChange].join(' ') :
                    [style.input, style.readOnly].join(' ')}
                type={props.title.toUpperCase() === "PASSWORD" ? "password": "text"}
                readOnly={props.onChangeHandler ? false : true}
                value={props.value}
                onChange={onChangeHandler}
                onFocus={props.style ? (event) => onFocus(event.target, props.style.backgroundColor) : null}
                onBlur={props.style ? (event) => focusOut(event.target, props.style.inputBackgroundColor) : null}
                style={props.style ? props.style.inputBackgroundColor : null}
                onClick={props.onSave ? () => setButtonHidden(false) : null} />
            {props.errorMessage ? (
                <p className={style.valueError}>{props.errorMessage}</p>
            ) : (null)}
            {!buttonHidden ? (
                <div
                  onClick={() => onSave(props.value)}
                  className={style.confirmButton}></div>
            ) : (null)}
        </div>
    );
}

export default Settings;