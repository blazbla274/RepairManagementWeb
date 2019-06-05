import React, { useState, useEffect } from 'react';
import style from './Record.module.css';
import axios from 'axios';

const Settings = (props) => {
    const [buttonHidden, setButtonHidden] = useState(true);
    const [errorMessage, setErrorMessage] = useState([]);

    const onChangeHandler = (event) => props.onChangeHandler && props.onChangeHandler(event.target.value);

    const onSave = (value) => {
        console.log("onSave: "+ value);
        
        if(validate(value)) {
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

        validate(target.value);
    }

    const validatePassword = (value) => {
        if(!value) {
            setErrorMessage("Password can't be empty.");
            return false;
        } else {
            setErrorMessage("");
            return true;
        }
    }

    const validatePhone = (value) => {
        if(value.length != 9) {
            setErrorMessage("Wrong length.");
            return false;
        } else if (value.split("").some(el => isNaN(el))) {
            setErrorMessage("Only numbers.");
            return false;
        } else {
            setErrorMessage("");
            return true;
        }
    }

    const validate = (value) => {
        return props.title.toUpperCase() === "PASSWORD" ? 
            validatePassword(value) : 
            validatePhone(value);
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
            {errorMessage ? (
                <p className={style.valueError}>{errorMessage}</p>
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