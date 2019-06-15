import React, { useState, useEffect } from 'react';
import style from './Record.module.css';
import axios from 'axios';

const Settings = (props) => {
    const [buttonHidden, setButtonHidden] = useState(true);
    const [errorMessage, setErrorMessage] = useState([]);

    const onChangeHandler = (event) => props.onChangeHandler && props.onChangeHandler(event.target.value);

    const onSave = (value) => {
        console.log("onSave: "+ value);
        
        if(props.validate(value)) {
            props.onSave(value);
            setButtonHidden(true);
        }
    }
    
    const onFocus = (target, background) => {
        target.style.background = background.backgroundColor;
        target.style.color = "white";
    }
    
    const focusOut = (target, background) => {
        target.style.background = background.backgroundColor;
        target.style.color = "black";

        if(props.validate(target.value)) {
            setButtonHidden(true);
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