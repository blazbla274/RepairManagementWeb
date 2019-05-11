import React from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
  if(!props.loged)
    return (
      <div className="box">
          <div className="header">
            <h1 style={props.style.fontColor}>Welcome in CarRepair system</h1>
          </div>
          <input 
            type="text" 
            placeholder="Login" 
            style={{...props.style.inputBackgroundColor, ...props.style.borderColor}}/>
          <input 
            type="password" 
            placeholder="Password" 
            style={{...props.style.inputBackgroundColor, ...props.style.borderColor}}/>
          <input 
            type="submit" 
            value="Submit" 
            onClick={props.loginAction}
            style={{...props.style.backgroundColor, ...props.style.borderColor}}/>
          <a>Log in using Facebook.</a>
      </div>
    );
  else
    return null
}

export default LoginForm;