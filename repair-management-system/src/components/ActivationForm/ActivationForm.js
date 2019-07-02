import React from 'react';
import style from './ActivationForm.module.css';
import NavigationBar from '../NavigationBar/NavigationBar'

const ActivationForm = (props) => {
    return (
        !props.isActive && props.loged ?
            <div>
                <NavigationBar
                    loged={props.loged}
                    logoutAction={props.logoutAction}
                    bookmarks={["Our Fanpage"]}
                    changeBookmarkAction={() => window.open('https://www.facebook.com/pages/category/Fashion-Model/Fanpage-FB-173623755985314/', '_blank')}
                    style={props.style} />
                <h1 class={style.h1}>Potwierdz swoje konto w najbliższym salonie.</h1>
            </div> : null
    )
}

export default ActivationForm;