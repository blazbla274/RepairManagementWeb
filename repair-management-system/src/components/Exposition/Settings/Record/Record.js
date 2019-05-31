import React, { useState } from 'react';
import style from './Record.module.css';
import axios from 'axios';

const Settings = (props) => {
    const [buttonHidden, setButtonHidden] = useState(true);
    const onChangeHandler = (event) => props.onChangeHandler && props.onChangeHandler(event.target.value);

    const xx = () => {
        console.log(buttonHidden);
        setButtonHidden(true);
    }

    return (
        <div className={style.setingsRecord}>
            <span className={style.p}>{props.title}:</span>
            <input
                className={props.onChangeHandler ?
                    [style.input, style.canChange].join(' ') :
                    [style.input, style.readOnly].join(' ')}
                type="text"
                readOnly={props.onChangeHandler ? false : true}
                value={props.value}
                onChange={onChangeHandler}
                onClick={() => xx(true)} />
            {!buttonHidden ? (
                <button>Change</button>
            ) : (null)}
        </div>
    );
}

export default Settings;