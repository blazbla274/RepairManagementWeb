import React from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
  if(!props.loged)
    return (
      <div className="box">
          <div className="header">
            <h1>Welcome in CarRepair system</h1>
          </div>
          <input type="text" placeholder="Login"/>
          <input type="password" placeholder="Password" />
          <input type="submit" value="Submit"/>
      </div>
    );
  else
    return null
}

export default LoginForm;